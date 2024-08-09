import { React, useState, useEffect } from 'react';
import EverythingCard from './EverythingCard';
import { BarLoader } from 'react-spinners';
function AllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  let pageSize = 9;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`https://vj3dmrzpm3.ap-southeast-2.awsapprunner.com/all-news?page=${page}&pageSize=${pageSize}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(myJson => {
        if (myJson.success) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || 'An error occurred');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return (
    <>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className='grid lg:place-content-center grid-cols-1 md:gap-10 
      lg:grid-cols-2 xl:grid-cols-3 lg:gap-7 md:px-16'>
        {(!isLoading) ? data.map((element, index) => (
          <EverythingCard
            title={element.title}
            description={element.description}
            imgUrl={element.urlToImage}
            publishedAt={element.publishedAt}
            url={element.url}
            author={element.author}
            source={element.source.name}
            key={index}
          />
        )) :  
        (<div className='relative lg:mx-[520px] lg:my-[200px] mx-10 my-20'>
        <BarLoader color="#219EBC" width={250}/>
        </div>)
        }
      </div>
      {(!isLoading) && data.length > 0 && (
        <div className="flex justify-center gap-14 my-10 items-center">
          <button disabled={page <= 1} className='pagination-btn text-center' onClick={handlePrev}>&larr; Prev</button>
          <p className='font-semibold opacity-80'>{page} of {Math.ceil(totalResults / pageSize)}</p>
          <button className='pagination-btn text-center' disabled={page >= Math.ceil(totalResults / pageSize)} onClick={handleNext}>Next &rarr;</button>
        </div>
      )}
    </>
  );
}

export default AllNews;