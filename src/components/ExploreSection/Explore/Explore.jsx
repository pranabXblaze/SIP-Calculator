import React from 'react'
import Swiper from 'swiper/bundle'
import {SwiperSlide} from 'swiper/react'
import { useSwiper } from 'swiper/react'
import 'swiper/css'
function Explore () {
  const swiper = useSwiper();
  return (
    <nav className="flex justify-between align-middle gap-4">
          <div className="font-bold text-xl">Stocks & Fundulator</div>
          <ul className="flex space-x-5 my-2">
            <li>
              <a href="/" className="hover:text-blue-500 text-bold">
                Stocks
              </a>
            </li>
            <li>
              <a href="/explore" className="hover:text-blue-500 text-bold">
                Mutual Funds
              </a>
            </li>
          
          </ul>
          </nav>
  )
}


export default Explore