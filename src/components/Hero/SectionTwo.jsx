import img_1 from "../../assets/image_1.svg";
import img_2 from "../../assets/image_2.svg";
import { FaArrowRight } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className="flex justify-between items-center gap-[28px]">
      <div className="flex">
        <div>
          <img src={img_1} alt="" className="w-full" />
        </div>
        <div className=" flex flex-col justify-center items-end  h-[292.2px] mt-[60.05px] w-[60%] bg-[#FBFBFB] pr-[30px]">
          <h1 className="text-[--second] text-[24px]  w-[50%] font-bold text-end mb-[10px]">
            Summer Cactus & Succulents
          </h1>
          <p className="text-[14px] text-[#727272] leading-8 font-normal  text-end mb-[16px]">
            {" "}
            We are an olline palnt shop offering a wide range of cheap and
            trendy plants
          </p>
          <button className="flex items-center gap-1 bg-[#46A358] text-white py-2 px-6 rounded-md  hover:opacity-70 duration-300">
            <span>Find More</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src={img_2} alt="" className="w-full" />
        </div>
        <div className=" flex flex-col justify-center items-end  h-[292.2px] mt-[60.05px] w-[60%] bg-[#FBFBFB] pr-[30px]">
          <h1 className="text-[--second] text-[24px]  w-[45%] font-bold text-end mb-[10px]">
            Styling trends & much more
          </h1>
          <p className="text-[14px] text-[#727272] leading-8 font-normal  text-end mb-[16px]">
            {" "}
            We are an olline palnt shop offering a wide range of cheap and
            trendy plants
          </p>
          <button className="flex items-center gap-1 bg-[#46A358] text-white py-2 px-6 rounded-md  hover:opacity-70 duration-300">
            <span>Find More</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
