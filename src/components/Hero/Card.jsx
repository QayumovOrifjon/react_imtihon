import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useBadgeContext } from "../context/Context";
import { useDispatch, useSelector } from 'react-redux';
import { setCarts } from '../../reducer/cards';
import { useNavigate } from 'react-router-dom';
// import BadgeModal from '../../Ui/Modal'; 

const Card = ({ item }) => {
const dispatch = useDispatch();
const { items } = useSelector((state) => state.cart);
const navigate =useNavigate();

const handleCartClick = (e, item) => {
    e.stopPropagation();
    dispatch(setCarts(item));
};


    const { handleIncrementBadge, isModalOpen, handleCloseModal } = useBadgeContext();
    const handleClick = () => {
        handleIncrementBadge(item.id);
    };



   
    

    return (
        <div onClick={() =>navigate(`/shop/${item.slug}`)} className="group h-full">
            <div className="relative group border-t-[5px] border-[#fff] group-hover:border-[#46A258] duration-300 transition-all">
                <img
                    src={item.image_url}
                    alt=""
                    className="h-[300px] w-full"
                />

                <div  className="translate-y-[50px] group-hover:translate-y-0 duration-300 transition-all flex gap-4 absolute z-10 bottom-1 left-[27%]">
                    <p className="text-[32px] cursor-pointer bg-[--bg-cart] rounded-md p-1 "onClick={(e) => handleCartClick(e, item)}>
                        <PiShoppingCartSimpleBold onClick={handleClick} key={item.id} id={item.id} className={`text-[#3D3D3D] hover:text-[#46A258] duration-300`}></PiShoppingCartSimpleBold>
                    </p>
                    <p className="text-[32px] cursor-pointer bg-[--bg-cart] rounded-md p-1">
                        <IoSearch className={`text-[#3D3D3D] hover:text-[#46A258] duration-300`}></IoSearch>
                    </p>
                    <p className="text-[32px] cursor-pointer bg-[--bg-cart] rounded-md p-1">
                        <FaRegHeart className={`text-[#3D3D3D] hover:text-[#46A258] duration-300`}></FaRegHeart>
                    </p>
                </div>
            </div>
            <div className="pb-[60px] bg-white pt-[12px] relative z-30">
                <p className="text-[20px] text-[--second] mb-[6px]">
                    {item.common_name}
                </p>
                <p className="text-[#46A258] font-bold text-[20px]">
                    $ {item.price}
                </p>
            </div>
            {/* {isModalOpen && <BadgeModal />}   */}
        </div>
    );
};

export default Card;
