import React, { useState, useEffect, useRef } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import vase from '../../assets/slide_1.png';
import vase_2 from '../../assets/green-vase.jpg';
import vase_1 from '../../assets/vas4.jpg';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      image: vase,
      title: 'Welcome to GreenShop',
      subtitle: "Let's Make a Better Planet",
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!',
    },
    {
      image: vase_1,
      title: 'Welcome to GreenShop',
      subtitle: "Let's Make a Better Planet",
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!',
    },
    {
      image: vase_2,
      title: 'Welcome to GreenShop',
      subtitle: "Let's Make a Better Planet",
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!',
    },
  ];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handlePrev = () => {
    stopAutoSlide();
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    startAutoSlide();
  };

  const handleDotClick = (index) => {
    stopAutoSlide();
    setActiveIndex(index);
    startAutoSlide();
  };

  return (
    <div className="max-w-custom mx-auto rounded-[30px] overflow-hidden relative bg-gray-100 mt-3">
      <div className="max-w-[1440px] rounded-[30px] relative overflow-hidden flex items-center">
        <div className="w-3/4 p-8 text-gray-800 z-10">
          <h1 className="text-[14px] not-italic font-medium leading-[16px] tracking-[1.4px] uppercase mb-2">{slides[activeIndex].title}</h1>
          <h2 className="text-[#3D3D3D] text-[70px] not-italic font-black leading-[70px] uppercase w-[]">
            Let's Make a Better <span className="text-green-500">Planet</span>
          </h2>
          <p className="text-[#727272] text-[14px] not-italic font-normal leading-[24px] font-sans tracking-[1.2px] mb-[55px] w-[557px]">
            {slides[activeIndex].description}
          </p>
          <button className="bg-green-500 text-white px-7 py-2 rounded-lg hover:bg-green-600">
            Shop Now
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center h-[450px]">
          <img
            src={slides[activeIndex].image}
            alt={`Slide ${activeIndex}`}
            className="w-full h-full"
          />
        </div>
        <button
          onClick={handlePrev}
          className="w-[50px] h-[50px] absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none z-10"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={handleNext}
          className="w-[50px] h-[50px] absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none z-10"
        >
          <ChevronRightIcon />
        </button>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10 mt-50">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${index === activeIndex ? 'bg-[#46A358]' : 'bg-[#C4E0C9]'}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
