import React, { useState, useEffect, useRef } from "react";
import vase from "../../assets/slide_1.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      image: vase,
      title: "Welcome to GreenShop",
      subtitle: "Let's Make a Better ",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    },
    {
      image: vase,
      title: "Explore Our Collection",
      subtitle: "Discover Beautiful Plants",
      description:
        "Find a variety of beautiful plants that can bring life to your home. Explore our collection and choose the ones that suit your style!",
    },
    {
      image: vase,
      title: "Join Our Community",
      subtitle: "Share Your Green Space",
      description:
        "Become part of our community of plant enthusiasts. Share your green space and get inspired by others!",
    },
  ];

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleDotClick = (index) => {
    stopAutoSlide();
    setActiveIndex(index);
    startAutoSlide();
  };

  return (
    <div className="w-[1200px] mx-auto overflow-hidden relative bg-gray-100 mt-3">
      <div className="relative w-[1200px] h-[450px]">
        <div
          className="flex transition-transform duration-500 ease-in-out ml-[40px]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="w-full flex-shrink-0 flex items-center" key={index}>
              <div className="w-3/4 text-gray-800 z-10">
                <h1 className="text-[14px] not-italic font-medium leading-[16px] tracking-[1.4px] uppercase mb-2">
                  {slide.title}
                </h1>
                <h2 className="text-[#3D3D3D] text-[70px] not-italic font-black leading-[70px] uppercase">
                  {slide.subtitle}{" "}
                  <span className="text-green-500">Planet</span>
                </h2>
                <p className="text-[#727272] text-[14px] not-italic font-normal leading-[24px] font-sans tracking-[1.2px] mb-[35px] w-[557px]">
                  {slide.description}
                </p>
                <button className="bg-[#46A358] text-white px-7 py-2 rounded-lg hover:bg-green-600 text-[#FFF] text-[16px] font-bold leading-[20px]">
                  Shop Now
                </button>
              </div>
              <div className="w-1/2 flex items-center justify-center h-[450px]">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10 mt-50">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-[#46A358]" : "bg-[#C4E0C9]"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
