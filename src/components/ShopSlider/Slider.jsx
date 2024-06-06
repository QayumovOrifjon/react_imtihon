import React, { useState, useEffect, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { useBadgeContext } from '../context/Context';
import { Data } from '../data/data';
import { useDispatch } from 'react-redux';
import { setCarts } from '../../reducer/cards';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(Data);
  const cardsPerPage = 5;
  const totalDots = 3;
  const totalSlides = totalDots;
  const { handleIncrementBadge } = useBadgeContext();
  const dispatch = useDispatch();

  const handleCartClick = (e, item) => {
    e.stopPropagation();
    dispatch(setCarts(item));
};
  
  const handleClick = (item) => {
      handleIncrementBadge(item.id);
  };

  const intervalRef = useRef(null);

  const refreshData = () => {
    setData([...Data]);
    setCurrentIndex(0);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= totalSlides) {
          refreshData();
          return 0; // qaytib birinchisidan boshlanadi
        }
        return newIndex;
      });
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [totalSlides]);

  const setSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
    if (index === 0) {
      refreshData();
    }
    startInterval();
  };

  return (
    <div className="mx-auto overflow-hidden bg-white max-w-6xl">
     
      <hr className='border-[1px] border-[#46A358] opacity-30 mb-[40px]'/>
      <div
        className="slides flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100 / totalSlides}%)`, width: `${totalSlides * 100}%` }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div className="flex w-full" key={slideIndex}>
            {data.slice(slideIndex * cardsPerPage, (slideIndex + 1) * cardsPerPage).map((item, index) => (
              <div className="w-1/5" key={index}>
          
            <div className="group px-2">
            <div className="relative group w-[200px] h-[220px]  border-t-[3px] border-[#fff] group-hover:border-[#46A358] duration-300 transition-all">
                <img
                    src={item.image_url}
                    alt=""
                    className="h-[260px] w-full"
                />

                    <div className="translate-y-[50px] group-hover:translate-y-0 duration-300 transition-all flex gap-4 absolute z-10 bottom-1 left-[7%]">
                        <p onClick={(e) => handleCartClick(e, item)} className="text-[40px] cursor-pointer bg-[--bg-cart] p-1">
                            <PiShoppingCartSimpleBold onClick={()=>handleClick(item)}  className='text-[--second] hover:text-[#46A358] duration-300 bg-white p-2 rounded-xl'></PiShoppingCartSimpleBold>
                        </p>
                        <p className="text-[40px] cursor-pointer rounded-md p-1"> <IoSearch className={`text-[--second] hover:text-[#46A358] bg-white p-2 rounded-xl duration-300`}></IoSearch></p>
                        <p className="text-[40px] cursor-pointer rounded-md p-1"> <FaRegHeart className={`text-[--second] hover:text-[#46A358] bg-white p-2 rounded-xl duration-300`}></FaRegHeart></p>
                    </div>
            </div>
            <div className="w-[200px] bg-white pt-[12px] relative z-30 p-2">
                <p className=" w-[120%]  mb-[6px] text-[#3D3D3D] text-[15px] font-normal leading-[16px]">
                    {item.common_name}
                </p>
                <p className="text-[#46A358] text-[16px] font-bold leading-[16px]">
                    $ {item.price}
                </p>
            </div>
        </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalDots }).map((_, index) => (
          <span
            key={index}
            onClick={() => setSlide(index)}
            className={`${
              currentIndex === index ? 'bg-[#46A358]' : 'bg-white border border-[#46A358]'
            } w-3 h-3 mx-2  rounded-full cursor-pointer`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
