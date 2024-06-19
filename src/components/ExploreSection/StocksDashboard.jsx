import React, { useRef, useState, useEffect } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

export default function StockDashboard() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  const [stockData, setStockData] = useState([]);
  const symbols = ['^NSEI', '^BSESN', '^NSEBANK', 'TCS.NS'];

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const data = await Promise.all(symbols.map(async (symbol) => {
  //                 const response = await fetch(`http://localhost:5000/api/stock?symbol=${symbol}`);
  //                 const result = await response.json();
  //                 return result;
  //             }));

  //             setStockData(data);
  //         } catch (error) {
  //             console.error("Error fetching stock data", error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  return (
    <div className='grid'>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="append-buttons">
       
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides">
          Append Slide
        </button>
      </div>
    </div>
  );
}
