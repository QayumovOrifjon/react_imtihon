import React from "react";
import Modal from "react-modal";
import thank from "../assets/thank-you.svg";
import { useSelector } from "react-redux";

Modal.setAppElement("#root");

const OrderSuccessModal = ({ isOpen, onRequestClose }) => {
  const { carts } = useSelector((state) => state.cart);

  const shippingCostPerItem = 16.0;
  const shippingTotal = carts.length * shippingCostPerItem;

  const subtotal = carts.reduce((acc, item) => {
    const itemPrice = isNaN(item.price) ? 0 : item.price;
    return acc + itemPrice * item.amount;
  }, 0);

  const totalCartPrice = subtotal + shippingTotal;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Order Success"
      className="bg-white shadow-lg mx-auto mt-5 w-[578px] h-[700px] border-[#46A358] border-b-[10px]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div>
        <div className="w-[100%] pb-5 bg-[#F4F9F5] pt-7 px-10">
          <button className="w-[200%] mr-auto">x</button>
          <img src={thank} alt="" className="block mx-auto mb-[16px]" />
          <p className="text-[#727272] text-center text-[16px] font-normal leading-[16px] ">
            Your order has been received
          </p>
        </div>
      </div>
      <hr className="border-[#D1E9D6]" />
      <div>
        <div className="grid grid-cols-4 px-8 mt-4">
          <div className="flex  justify-around items-center">
            <div>
              <p className="text-[#727272] text-[14px] font-normal leading-[16px]">
                Order Number
              </p>
              <p className="text-[#727272] text-[15px] font-bold leading-[16px]">
                19586687
              </p>
            </div>
            <span className="block w-[1px] h-[31px] bg-[#DAEDDE] rounded"></span>
          </div>
          <div className="flex items-center justify-around">
            <div>
              {" "}
              <p className="text-[#727272] text-[14px] font-normal leading-[16px]">
                Date
              </p>
              <p className="text-[#727272] text-[15px] font-bold leading-[16px]">
                15 Sep, 2021
              </p>
            </div>
            <span className="block w-[1px] h-[31px] bg-[#DAEDDE] rounded"></span>
          </div>
          <div className="flex items-center justify-around">
            <div>
              {" "}
              <p className="text-[#727272] text-[14px] font-normal leading-[16px]">
                Total
              </p>
              <p className="text-[#727272] text-[15px] font-bold leading-[16px]">
                2,699.00
              </p>
            </div>
            <span className="block w-[1px] h-[31px] bg-[#DAEDDE] rounded"></span>
          </div>
          <div>
            <p className="text-[#727272] text-[14px] font-normal leading-[16px]">
              Payment Method
            </p>
            <p className="text-[#727272] text-[15px] font-bold leading-[16px]">
              Cash on delivery
            </p>
          </div>
        </div>
        <hr className="border-[#D1E9D6] mt-4" />
        <div className="px-10">
          <p className="text-[#3D3D3D] text-[15px] font-bold leading-[16px] mt-5">
            Order Details
          </p>
          <div className="flex justify-between mt-3">
            <p className="text-[#3D3D3D] text-[16px] font-medium leading-[16px]">
              Products
            </p>{" "}
            <div className="flex gap-[85px]">
              <p className="text-[#3D3D3D] text-[16px] font-medium leading-[16px]">
                Qty
              </p>{" "}
              <p className="text-[#3D3D3D] text-[16px] font-medium leading-[16px]">
                Subtotal
              </p>
            </div>
          </div>
          <hr className="border-[#D1E9D6] mt-3" />

          <div>
            {carts.map((item) => {
              const itemTotal = (item.amount * item.price).toFixed(2);

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-2  mt-[12px] bg-[#FBFBFB] items-center "
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image_url}
                      alt={item.common_name}
                      className="w-[80px] h-[80px]"
                    />
                    <span className="flex flex-col gap-y-2">
                      <span className="text-[#3D3D3D] text-[16px] w-[200px] font-medium leading-[16px]">
                        {item.common_name}
                      </span>
                      <span className="text-[#A5A5A5] text-[14px] font-normal leading-[16px]  ">
                        SKU:
                        <span className="text-[#727272] text-[14px] font-normal leading-[16px]">
                          {item.id}
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center ml-[75px] gap-10    ">
                    <div>
                      <span className="flex gap-[14px] items-center">
                        <span className="text-[#727272] text-right text-[14px] font-normal leading-[16px]">
                          (x {item.amount})
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between ">
                      <p className="text-[#46A358] text-[16px] font-bold leading-[16px] ml-[60px]">
                        ${itemTotal}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[70%] ml-auto flex justify-between mt-5 mb-6">
            <p>Shipping</p>
            <p> ${shippingTotal.toFixed(2)}</p>
          </div>
          <div className="w-[70%] flex justify-between ml-auto">
            <p className="text-[#3D3D3D] text-[16px] font-bold leading-[16px]">
              Total
            </p>{" "}
            <p className="text-[#46A358] text-right text-[18px] font-bold leading-[16px]">
              ${totalCartPrice.toFixed(2)}
            </p>
          </div>

          <hr className="border-[#46A358]  opacity-30 mt-5" />
          <p className="text-[#727272] text-center text-[14px] font-normal leading-[22px] mt-4 mb-[50px]">
            Your order is currently being processed. You will receive an order
            confirmation email shortly with the expected delivery date for your
            items.
          </p>
        </div>
      </div>
      <button
        onClick={onRequestClose}
        className="mx-auto block text-[#FFF]  text-[16px] font-bold leading-[16px] bg-[#46A358] py-4 px-6 rounded"
      >
        Track your order
      </button>
    </Modal>
  );
};

export default OrderSuccessModal;
