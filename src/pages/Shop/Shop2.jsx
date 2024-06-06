import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "../../components/ShopSlider/Slider";
import Footer from "../../components/Footer/Footer";
import { Data } from "../../components/data/data";

const Shop2 = () => {
  const navigate = useNavigate();

  const handleGoToShop = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="max-w-custom mx-auto px-4">
        <div className="flex mb-[100px] mt-[30px] ">
          <p onClick={handleGoToShop} className="font-extrabold text-[18px]">
            Home/{" "}
          </p>
          <p className="font-normal text-[18px]"> shop</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-[#46A358] mb-4">
            Hali hech narsa tanlamadingiz
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Mahsulotlarni ko'rish uchun do'kondan biror narsani tanlang.
          </p>
          <button
            onClick={handleGoToShop}
            className="px-6 py-3 bg-[#46A358] text-white rounded-md hover:bg-[#3b8c47] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#46A358] transition"
          >
            Go to Shop
          </button>
        </div>
        <div className="mb-[128px]">
          <h2 className="text-xl font-semibold text-[#46A358] mt-[100px] mb-4 pl-2">
            Releted Products
          </h2>
          <Slider />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop2;
