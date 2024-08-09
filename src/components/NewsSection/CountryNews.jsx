import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import countries from './countries'
import EverythingCard from './EverythingCard';
import { BarLoader } from 'react-spinners';
import useAuth, { AuthProvider } from '../../context/AuthContext';
function CountryNews() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const {authStatus} = useAuth
  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  const pageSize = 6;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`https://vj3dmrzpm3.ap-southeast-2.awsapprunner.com/country/${params.iso}?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((myJson) => {
        if (myJson.success) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || 'An error occurred');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, params.iso]);

  return (
    <AuthProvider value={{authStatus}}>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className='flex flex-col justify-center gap-4'>
      <li className="flex justify-center mt-4">
        <Link className="no-underline font-semibold flex items-center" onClick={() => { setShowCountryDropdown(!showCountryDropdown) }}>Country </Link>
      </li>
      <p className='text-xl text-center'>Select a country to continue.</p>


      <ul className={`${showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"} flex flex-wrap gap-2`}>
              {countries.map((element, index) => 
                (
                  <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown) }} className='border border-gray-300 px-2 rounded'>
                    <Link to={`/country/${element?.iso_2_alpha}`} className="flex gap-3" type="btn"
                      >
                      <img
                        src={element?.png}
                        srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png `}
                   
                        alt={element?.countryName} />
                      <span>{element?.countryName}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
      </div>
      <div className='grid content-center mt-5 lg:place-content-center grid-cols-1 md:gap-10 
      lg:grid-cols-2 xl:grid-cols-3 lg:gap-7 md:px-16'>
        {(!isLoading && authStatus) ? (
          data.length > 0 ? (
            data.map((element, index) => (
              <EverythingCard
                key={index}
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                publishedAt={element.publishedAt}
                url={element.url}
                author={element.author}
                source={element.source.name}
              />
            ))
          ) : (
            <p>No news articles found for this criteria.</p>
          )
        ) : (
          <div className='relative lg:mx-[520px] lg:my-[200px] mx-8 my-20'>
          <BarLoader color="#219EBC" width={250}/>
          </div>
        )}
      </div>
      {(!isLoading && authStatus) && data.length > 0 && (
        <div className="flex justify-center gap-14 my-10 items-center">
          <button
            disabled={page <= 1}
            className="pagination-btn"
            onClick={handlePrev}
          >
            Prev
          </button>
          <p className="font-semibold opacity-80">
            {page} of {Math.ceil(totalResults / pageSize)}
          </p>
          <button
            disabled={page >= Math.ceil(totalResults / pageSize)}
            className="pagination-btn"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </AuthProvider>
  );
}

export default CountryNews;