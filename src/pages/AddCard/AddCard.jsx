import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Slider from "../../components/ShopSlider/Slider";
import Footer from "../../components/Footer/Footer";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePrice,
  increment,
  decrement,
  handleRemove,
} from "../../reducer/cards";
import { useBadgeContext } from "../../components/context/Context";

const AddCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleIncrementBadge, handleDecrementBadge } = useBadgeContext();

  const { carts } = useSelector((state) => state.cart);

  const subtotal = carts.reduce((acc, item) => {
    const itemPrice = isNaN(item.price) ? 0 : item.price;
    return acc + itemPrice * item.amount;
  }, 0);

  const shippingCostPerItem = 16.0;
  const shippingTotal = carts.length * shippingCostPerItem;

  const totalCartPrice = subtotal + shippingTotal;

  useEffect(() => {
    dispatch(handlePrice());
  }, [carts, dispatch]);

  const handleGoToHome = () => {
    navigate("/");
  };
  const handleGoToShop = () => {
    navigate("/Shop");
  };

  const handleRemoveItem = (id) => {
    dispatch(handleRemove(id));
    handleDecrementBadge(id);
  };

  return (
    <div className="max-w-custom mx-auto px-4">
      <div className="flex mt-[30px]">
        <p
          onClick={handleGoToHome}
          className="text-[18px] font-extrabold cursor-pointer"
        >
          Home/
        </p>
        <p
          onClick={handleGoToShop}
          className="text-[18px] font-extrabold cursor-pointer"
        >
          Shop/
        </p>
        <p className="text-[18px]">Shopping Cart</p>
      </div>

      <div className="flex justify-between mt-[51px]">
        <div className="w-[782px]">
          <div className="flex">
            <p className="mr-[245px] text-[#3D3D3D] text-[16px] not-italic font-medium leading-[16px]">
              Products
            </p>
            <p className="mr-[108px] text-[#3D3D3D] text-[16px] not-italic font-medium leading-[16px]">
              Price
            </p>
            <p className="mr-[97px] text-[#3D3D3D] text-[16px] not-italic font-medium leading-[16px]">
              Quantity
            </p>
            <p className="text-[#3D3D3D] text-[16px] font-medium leading-[16px]">
              Total
            </p>
          </div>
          <hr className="border-[#46A358] opacity-30 mt-3" />

          <div className="max-h-[500px] overflow-auto">
            {carts.map((item) => {
              const itemTotal = (item.amount * item.price).toFixed(2);

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr] mt-[12px] bg-[#FBFBFB] items-center "
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image_url}
                      alt={item.common_name}
                      className="w-[80px] h-[80px]"
                    />
                    <span>
                      <span className="block text-[18px] capitalize font-medium mb-[6px]">
                        {item.common_name}
                      </span>
                      <span className="text-[#A5A5A5] text-[14px] font-normal leading-[16px]">
                        SKU:
                        <span className="text-[#727272] text-[14px] font-normal leading-[16px]">
                          {item.id}
                        </span>
                      </span>
                    </span>
                  </div>

                  <p className="text-[#727272] text-[16px] font-medium leading-[16px] ">
                    ${item.price}.00
                  </p>

                  <div>
                    <span className="flex gap-[14px] items-center">
                      <span
                        onClick={() => dispatch(decrement(item.id))}
                        className="text-white cursor-pointer hover:opacity-70  bg-[#46A358] px-[15px] text-[18px] py-[6px] rounded-full font-bold"
                      >
                        -
                      </span>
                      <span className="text-[20px]">{item.amount}</span>
                      <span
                        onClick={() => dispatch(increment(item.id))}
                        className="text-white cursor-pointer hover:opacity-70 bg-[#46A358] px-[13px] text-[18px] py-[6px] rounded-full font-bold"
                      >
                        +
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between pr-[26px]">
                    <p className="text-[#46A358] text-[16px] font-bold leading-[16px]">
                      ${itemTotal}
                    </p>
                    <FiTrash
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-[28px] text-[--text] cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[332px]">
          <p className="text-[#3D3D3D] text-[18px] font-bold leading-[16px] mb-3">
            Cart Totals
          </p>
          <hr className="border-[#46A358] opacity-30 mb-3" />
          <p>Coupon Apply</p>
          <div className="flex items-center mt-3">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className="p-3 pr-[30px] outline-none border rounded-l border-[#46A358]"
            />
            <button className="border border-[#46A358] py-4 pl-[35px] pr-[25px] bg-[#46A358] text-[#FFF] text-[15px] font-bold leading-[16px] rounded-r">
              Apply
            </button>
          </div>
          <div className="flex justify-between mt-7">
            <p className="text-[#3D3D3D] text-[15px] font-normal leading-[16px] mb-4">
              Subtotal
            </p>
            <p className="text-[#3D3D3D] text-right text-[18px] font-medium leading-[16px]">
              ${subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D3D3D] text-[15px] font-normal leading-[16px] mb-5">
              Coupon Discount
            </p>
            <p className="text-[#3D3D3D] text-[15px] font-normal leading-[16px]">
              (-) 00.00
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D3D3D] text-[15px] font-normal leading-[16px] mb-5">
              Shipping
            </p>
            <p className="text-[#3D3D3D] text-right text-[18px] font-medium leading-[16px]">
              ${shippingTotal.toFixed(2)}
            </p>
          </div>
          <hr className="border-[#46A358] opacity-30 mb-3" />
          <div className="flex justify-between">
            <p className="text-[#3D3D3D] text-[15px] font-normal leading-[16px]">
              Total
            </p>
            <p className="text-[#46A358] text-[18px] font-bold leading-[16px]">
              ${totalCartPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col ">
            <button className="border border-[#46A358] py-4 bg-[#46A358] text-[#FFF] text-[15px] font-bold leading-[16px] rounded w-full mt-8">
              {carts.length > 0 ? (
                <NavLink to={"/AddCard/Pay"}> Proceed To Checkout </NavLink>
              ) : (
                <span onClick={() => setPay(true)}>Proceed To Checkout</span>
              )}
            </button>
            <button
              onClick={handleGoToHome}
              className="text-[#46A358] text-[15px] font-normal leading-[16px] mt-[10px] py-4 rounded "
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-[#46A358] mt-[100px] mb-4 pl-2">
        You may be interested in
      </h2>
      <Slider />
      <Footer />
    </div>
  );
};

export default AddCard;
