import moment from "moment/moment";
import img_1 from "../../assets/cart_1.jpg";
import img_2 from "../../assets/cart_2.jpg";
import img_3 from "../../assets/cart_3.jpg";
import img_4 from "../../assets/cart_4.jpg";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="mb-[35px]">
          <h1 className="text-[#3D3D3D] text-center text-[30px] font-bold leading-[16px] mt-[130px] mb-4">
            Our Blog Posts
          </h1>
          <p className="text-[#727272] text-center text-[14px] not-italic font-normal leading-[24px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex justify-between mb-[250px]">
          <div className="w-[268px] h-[195px]">
            <img src={img_1} alt="" className="w-full" />
            <div className="px-[15px] pb-[13px] bg-[#FBFBFB] pt-2">
              <p className="text-[#46A358] text-[14px] font-medium leading-[16px] mb-1">
                <span> {moment().format("dddd DD")} </span> | Read
                <span> {moment().startOf("week").fromNow()} </span>
              </p>
              <p className="text-[20px] font-bold leading-[130%] w-[90%] mb-2">
                Cactus & Succulent Care Tips
              </p>
              <p className="text-[#727272] text-[14px] font-normal leading-[22px]">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <button className="flex text-[#3D3D3D] items-center hover:text-[#46A358] gap-2 font-medium hover:opacity-70 duration-300 mt-1">
                Read More
                <FaArrowRight className="hover: flex w-[16px] h-[16px] mt-[5px] pt-[3.301px] pr-[2.333px] pb-[3.666px] pl-[2.667px] justify-center items-center flex-shrink-0" />
              </button>
            </div>
          </div>
          <div className="w-[268px] h-[195px] ">
            <img src={img_2} alt="" className="w-full" />
            <div className="px-[15px] pb-[13px] bg-[#FBFBFB] pt-2">
              <p className="text-[#46A358] text-[14px] font-medium leading-[16px] mb-1">
                <span> {moment().format("dddd DD")} </span> | Read
                <span> {moment().startOf("week").fromNow()} </span>
              </p>
              <p className="text-[20px] font-bold leading-[130%] w-[90%] mb-2">
                Top 10 Succulents for Your Home
              </p>
              <p className="text-[#727272] text-[14px] font-normal leading-[22px]">
                Best in hanging baskets. Prefers medium to high light.
              </p>
              <button className="flex text-[#3D3D3D] items-center hover:text-[#46A358] gap-2 font-medium hover:opacity-70 duration-300 mt-1">
                Read More
                <FaArrowRight className="hover: flex w-[16px] h-[16px] mt-[5px] pt-[3.301px] pr-[2.333px] pb-[3.666px] pl-[2.667px] justify-center items-center flex-shrink-0" />
              </button>
            </div>
          </div>
          <div className="w-[268px] h-[195px]">
            <img src={img_3} alt="" className="w-full" />
            <div className="px-[15px] pb-[13px] bg-[#FBFBFB] pt-2">
              <p className="text-[#46A358] text-[14px] font-medium leading-[16px] mb-1">
                <span> {moment().format("dddd DD")} </span> | Read
                <span> {moment().startOf("week").fromNow()} </span>
              </p>
              <p className="text-[20px] font-bold leading-[130%] w-[90%] mb-2">
                Cactus & Succulent Care Tips
              </p>
              <p className="text-[#727272] text-[14px] font-normal leading-[22px]">
                Cacti and succulents thrive in containers and because most are..
              </p>
              <button className="flex text-[#3D3D3D] items-center hover:text-[#46A358] gap-2 font-medium hover:opacity-70 duration-300 mt-1">
                Read More
                <FaArrowRight className="hover: flex w-[16px] h-[16px] mt-[5px] pt-[3.301px] pr-[2.333px] pb-[3.666px] pl-[2.667px] justify-center items-center flex-shrink-0" />
              </button>
            </div>
          </div>
          <div className="w-[268px] h-[195px]">
            <img src={img_4} alt="" className="w-full" />
            <div className="px-[15px] pb-[13px] bg-[#FBFBFB] pt-2">
              <p className="text-[#46A358] text-[14px] font-medium leading-[16px] mb-1">
                <span> {moment().format("dddd DD")} </span> | Read
                <span> {moment().startOf("week").fromNow()} </span>
              </p>
              <p className="text-[20px] font-bold leading-[130%] w-[90%] mb-2">
                Best Houseplants Room by Room
              </p>
              <p className="text-[#727272] text-[14px] font-normal leading-[22px]">
                The benefits of houseplants are endless. In addition to..
              </p>
              <button className="flex text-[#3D3D3D] items-center hover:text-[#46A358] gap-2 font-semi-bold hover:opacity-70 duration-300 mt-1">
                Read More
                <FaArrowRight className="hover: flex w-[16px] h-[16px] mt-[5px] pt-[3.301px] pr-[2.333px] pb-[3.666px] pl-[2.667px] justify-center items-center flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
