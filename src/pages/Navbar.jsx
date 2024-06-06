import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-14 ">
        <li className="cursor-pointer hover:font-bold pb-[25px] pt-[25px] border-b-[3px] border-transparent hover:border-[#46A358] text-[#3D3D3D] text-[16px] leading-[normal]">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="cursor-pointer hover:font-bold pb-[25px] pt-[25px] border-b-[3px] border-transparent hover:border-[#46A358] text-[#3D3D3D] text-[16px] leading-[normal]">
        <NavLink to="/Shop">Shop</NavLink>
        </li>
        <li className="cursor-pointer hover:font-bold pb-[25px] pt-[25px] border-b-[3px] border-transparent hover:border-[#46A358] text-[#3D3D3D] text-[16px] leading-[normal] w-[79px]">
          <NavLink to="/Plant Care">
          Plant Care
          </NavLink>
        </li>
        <li className="cursor-pointer hover:font-bold pb-[25px] pt-[25px] border-b-[3px] border-transparent hover:border-[#46A358] text-[#3D3D3D] text-[16px] leading-[normal]">
          <NavLink to="/Blogs">
          Blogs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
