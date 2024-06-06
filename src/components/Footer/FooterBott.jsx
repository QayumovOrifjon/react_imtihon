import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import social from "../../assets/image_pay.svg";

const FooterBott = () => {
  return (
    <>
      <div className="grid grid-cols-4 py-8 pl-6 pr-[100px] bg-[#FBFBFB]">
        <ul className="flex flex-col gap-y-1">
          <li className="text-[#3D3D3D] text-[18px] not-italic font-bold leading-[16px] mb-2">
            My Account
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            My Account
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Our stores
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Contact us
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Career
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Specials
          </li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <li className="text-[#3D3D3D] text-[18px] not-italic font-bold leading-[16px] mb-2">
            Help & Guide
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Help Center
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            How to Buy
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Shipping & Delivery
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Product Policy
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            How to Return
          </li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <li className="text-[#3D3D3D] text-[18px] not-italic font-bold leading-[16px] mb-2">
            Categories
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            House Plants
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Potter Plants
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Seeds
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Small Plants
          </li>
          <li className="text-[#3D3D3D] text-[14px] not-italic font-light leading-[30px] cursor-pointer">
            Accessories
          </li>
        </ul>
        <div>
          <p className="text-[#3D3D3D] text-[18px] not-italic font-bold leading-[16px] mb-5">
            Social Media
          </p>
          <span className="flex gap-[10px] mb-[33px]">
            <span className="border rounded-md cursor-pointer hover:text-[#1E9837] hover:border-[#1E9837] duration-300 border-[#8EC699] text-[#8EC699] p-3">
              <FaInstagram></FaInstagram>
            </span>
            <span className="border rounded-md cursor-pointer hover:text-[#1E9837] hover:border-[#1E9837] duration-300 border-[#8EC699] text-[#8EC699] p-3">
              <FaFacebookF></FaFacebookF>
            </span>
            <span className="border rounded-md cursor-pointer hover:text-[#1E9837] hover:border-[#1E9837] duration-300 border-[#8EC699] text-[#8EC699] p-3">
              <FaTwitter></FaTwitter>
            </span>
            <span className="border rounded-md cursor-pointer hover:text-[#1E9837] hover:border-[#1E9837] duration-300 border-[#8EC699] text-[#8EC699] p-3">
              <FaLinkedinIn></FaLinkedinIn>
            </span>
            <span className="border rounded-md cursor-pointer hover:text-[#1E9837] hover:border-[#1E9837] duration-300 border-[#8EC699] text-[#8EC699] p-3">
              <FaYoutube></FaYoutube>
            </span>
          </span>

          <p className="text-[20px] font-bold mb-[20px]">We accept</p>
          <img src={social} alt="" />
        </div>
      </div>
      <hr className="border-[#ECF6EE]" />
      <h1 className="text-center p-2 text-[#3D3D3D] text-[14px] not-italic font-normal leading-[30px]">
        © 2021 GreenShop. All Rights Reserved.
      </h1>
    </>
  );
};

export default FooterBott;
