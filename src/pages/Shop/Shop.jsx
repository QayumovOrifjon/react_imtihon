import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "../../components/ShopSlider/Slider";
import Footer from "../../components/Footer/Footer";
import { Data } from "../../components/data/data";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Shop = () => {
  const navigate = useNavigate();

  const handleGoToShop = () => {
    navigate("/");
  };

  const dispatch = useDispatch();
  
  const { carts } = useSelector((state) => state.cart);

  const { slug } = useParams();
  const product = Data.find((item) => item.slug == slug);

  return (
    <div>
      {product ? (
      <div className="grid grid-cols-2 gap-20 max-w-custom mx-auto px-4 justify-between mt-[43px]">
        <div className="flex gap-2">
<div className="flex  flex-col gap-4">
  <img src={product.image_url} alt="" className="w-[100px] h-[100px]"/>
  <img src={product.image_url} alt="" className="w-[100px] h-[100px]"/>
  <img src={product.image_url} alt="" className="w-[100px] h-[100px]"/>
  <img src={product.image_url} alt="" className="w-[100px] h-[100px]"/>
</div>
<div><img src={product.image_url} alt="" className="w-[444px] h-[448px]"/></div>
        </div>
        <div>
<h1 className="text-[#3D3D3D] text-[28px] font-bold leading-[16px] mb-5">{product.common_name}</h1>
<div className="flex justify-between mb-3">
<p className="text-[#46A358] text-[22px] font-bold leading-[16px]">${product.price}</p>
{/* mui */} <p className="text-[#3D3D3D] text-[15px] font-normal leading-[16px]">19 Customer Review</p>
</div>

<hr />
<p className="text-[#3D3D3D] text-[15px] font-medium leading-[16px] mt-4 mb-3">Short Description:</p>
<p className="text-[#727272] text-[14px] font-normal leading-[24px]">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
        
<p className="text-[#3D3D3D] text-[15px] font-medium leading-[16px] mt-6">size:</p>
<div className="flex gap-2 mt-3">
  <p className="border rounded-full px-[15px] py-2">S</p>
  <p className="border rounded-full px-[14px] py-2">M</p>
  <p className="border rounded-full px-4 py-2">L</p>
  <p className="border rounded-full px-3 py-2">XL</p>
</div>
<div className="flex items-center gap-7 mt-6">
                                            <span className="flex gap-[14px] items-center">
                                                <span onClick={() => dispatch(decrement(product.id))} className="text-white cursor-pointer hover:opacity-70  bg-[#46A358] px-[15px] text-[18px] py-[6px] rounded-full font-bold">
                                                    -
                                                </span>
                                                <span className="text-[20px]">1</span>
                                                <span onClick={() => dispatch(increment(product.id))} className="text-white cursor-pointer hover:opacity-70 bg-[#46A358] px-[13px] text-[18px] py-[6px] rounded-full font-bold">
                                                    +
                                                </span>
                                            </span>
                                        <div className="flex gap-2"><button className="px-8 py-3 bg-[#46A358] text-white rounded-lg  text-[14px] font-bold leading-[20px]">BUY NOW</button><button className="px-8 py-3 text-[#46A358] bg-white border-[#46A358] border rounded-lg text-[14px] font-bold leading-[20px]">ADD TO CART</button><button>yurak</button></div>
                                        </div>
                                        
<p className="text-[#ACACAC] text-[15px] font-normal leading-[16px] mb-3">SKU : <span className="text-[#727272] text-[15px] font-normal leading-[16px]">{product.id}</span></p>
<p className="text-[#ACACAC] text-[15px] font-normal leading-[16px] mb-3">Categories: <span className="text-[#727272] text-[15px] font-normal leading-[16px]">{product.family}</span></p>
<p className="text-[#ACACAC] text-[15px] font-normal leading-[16px] mb-3">Tags: <span className="text-[#727272] text-[15px] font-normal leading-[16px]">{product.scientific_name}</span></p>
<div className="flex items-center gap-3">
  <p className="text-[#3D3D3D] text-[15px] font-medium leading-[16px] mt-2">Share this products:</p> 
  <FaFacebookF />
  <FaTwitter />
  <FaLinkedinIn />
  <TfiEmail />

</div>
        </div>
        
      </div>
      ) : (
       <></>
      )}
    </div>
  );
};

export default Shop;
