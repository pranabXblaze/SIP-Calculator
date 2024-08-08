import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import countries from './countries'
import EverythingCard from './EverythingCard';
import { BarLoader } from 'react-spinners';
function CountryNews() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

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
    <>
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
                    <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" type="btn"
                      onClick={() => {
                        setActive(!active)
                      }}>
                      <img
                        src={element?.png}
                        srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                   
                        alt={element?.countryName} />
                      <span>{element?.countryName}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
      </div>
      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {!isLoading ? (
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
          <BarLoader color="#219EBC" width={200}/>
        )}
      </div>
      {!isLoading && data.length > 0 && (
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
    </>
  );
}

export default CountryNews;