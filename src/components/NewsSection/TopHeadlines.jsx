import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import EverythingCard from './EverythingCard'
import { BarLoader } from "react-spinners";
import useAuth, { AuthProvider } from "../../context/AuthContext";

function TopHeadlines() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {authStatus} = useAuth()
  
  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  let pageSize = 6;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const categoryParam = params.category ? `&category=${params.category}` : "";
    fetch(`https://vj3dmrzpm3.ap-southeast-2.awsapprunner.com/top-headlines?language=en${categoryParam}&page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((json) => {
        if (json.success) {
          setTotalResults(json.data.totalResults);
          setData(json.data.articles);
        } else {
          setError(json.message || 'An error occurred');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, params.category]);

  return (
    <AuthProvider value={{authStatus}}>
      {console.log(authStatus)}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className='grid lg:place-content-center grid-cols-1 md:gap-10 
      lg:grid-cols-2 xl:grid-cols-3 lg:gap-14 md:px-16'>
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
            <p>No articles found for this category or criteria.</p>
          )
        ) : (
          <div className='relative lg:mx-[520px] lg:my-[200px] mx-8 my-20'>
          <BarLoader color="#219EBC" width={250}/>
          </div>
        )}
      </div>
      {(!isLoading && authStatus) && data.length > 0 && (
        <div className="flex justify-center gap-5 my-10 items-center">
          <button disabled={page <= 1} className='pagination-btn' onClick={handlePrev}>Prev</button>
          <p className='font-semibold opacity-80 text-center'>{page} of {Math.ceil(totalResults / pageSize)}</p>
          <button className='pagination-btn' disabled={page >= Math.ceil(totalResults / pageSize)} onClick={handleNext}>Next</button>
        </div>
      )}
    </AuthProvider>
  );
}

export default TopHeadlines;