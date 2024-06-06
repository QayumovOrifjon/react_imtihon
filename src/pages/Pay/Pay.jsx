import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cartSlice, selectCartItems } from "../../reducer/features";
import OrderSuccessModal from "../../Ui/OrderSuccessModal";
import { FiTrash } from "react-icons/fi";
import paymend from "../../assets/paymend.svg";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const { carts } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "city",
      "street",
      "state",
      "zip",
      "email",
      "phone",
    ];
    const isValid = requiredFields.every((field) => formData[field] !== "");

    if (isValid) {
      setModalIsOpen(true);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const subtotal = carts.reduce((acc, item) => {
    const itemPrice = isNaN(item.price) ? 0 : item.price;
    return acc + itemPrice * item.amount;
  }, 0);

  const shippingCostPerItem = 16.0;
  const shippingTotal = carts.length * shippingCostPerItem;

  const totalCartPrice = subtotal + shippingTotal;

  return (
    <div className="flex justify-between max-w-custom mx-auto px-4 mt-9">
      <div className="w-[727px]">
        <h2 className="text-[#3D3D3D] text-[17px] font-bold leading-[16px] mb-5">
          Billing Address
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-y-8 gap-4">
            <div>
              <label
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
                htmlFor="firstName"
              >
                First Name{" "}
                <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="p-2 border rounded w-full mt-2 outline-[#46A358]"
              />
            </div>
            <div>
              <label
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
                htmlFor="lastName"
              >
                Last Name{" "}
                <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="p-2 border rounded w-full mt-2 outline-[#46A358]"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
              >
                Country / Region{" "}
                <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className="px-2 border rounded w-full h-10 outline-[#46A358] text-[#9CA3AF] mt-2"
              >
                <option value="" hidden>
                  Select Country / Region
                </option>
                <option value="toshkent">Toshkent</option>
                <option value="fergana">Farg'ona</option>
                <option value="andijon">Andijon</option>
                <option value="namangan">Namangan</option>
                <option value="samarqand">Samarqand</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
              >
                Town / City{" "}
                <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                className="p-2 border rounded w-full mt-2 outline-[#46A358]"
              />
            </div>
            <div>
              <label
                htmlFor="street"
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
              >
                Street Address{" "}
                <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <input
                type="text"
                id="street"
                value={formData.street}
                onChange={handleInputChange}
                placeholder="House number and street name "
                className="p-2 border rounded w-full mt-2 outline-[#46A358]"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
              >
                State <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <select
                id="state"
                value={formData.state}
                onChange={handleInputChange}
                className="border text-[#9CA3AF] px-2 h-10 outline-[#46A358] rounded w-full mt-2"
              >
                <option value="" hidden>
                  Select a State
                </option>
                <option value="chilonzor">Chilonzor</option>
                <option value="yakka">Yakkasaroy</option>
                <option value="yunus">Yunisobod</option>
                <option value="mirzo">Mirzo Ulug'bek</option>
                <option value="sergili">Sergili</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="zip"
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
              >
                Zip <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <input
                type="text"
                id="zip"
                value={formData.zip}
                onChange={handleInputChange}
                placeholder="Zip"
                className="p-2 border rounded w-full mt-2 outline-[#46A358]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[#3D3D3D] text-[15px] font-normal leading-[15px] "
              >
                Email address{" "}
                <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="outline-[#46A358] p-2 border rounded w-full mt-2"
              />
            </div>
            <div>
              <label htmlFor="phone">
                Phone Number{" "}
                <span className="text-red-600 font-bold text-xl">*</span>
              </label>
              <div className="flex items-center gap-2">
                <select
                  id="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleInputChange}
                  className="border px-3 h-10 outline-[#46A358] rounded mt-2"
                >
                  <option value="+966">+966</option>
                  <option value="+998">+998</option>
                  <option value="+900">+900</option>
                </select>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border rounded outline-[#46A358] p-2 mt-2 grow"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="flex items-center text-[#3D3D3D] text-[15px] font-medium leading-[16px] mt-8">
              <input type="checkbox" className="mr-2" />
              Ship to a different address?
            </label>
          </div>
          <div className="mt-5">
            <label
              htmlFor="notes"
              className="text-[#3D3D3D] text-[15px] font-normal leading-[15px]"
            >
              Order notes (optional)
            </label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="block p-2 border rounded w-[350px] h-[152px] outline-none mt-4"
            ></textarea>
          </div>
        </form>
      </div>

      <div className="w-[405px]">
        <h2 className="text-2xl font-bold mb-4">Your Order</h2>
        <div className="flex justify-between">
          <p className='text-[#3D3D3D] font-["Cera_Pro"] text-[16px] font-medium leading-[16px]'>
            Products
          </p>
          <p className='text-[#3D3D3D] font-["Cera_Pro"] text-[16px] font-medium leading-[16px]'>
            Subtotal
          </p>
        </div>
        <hr className="border-[#A3D1AB] mt-3 mb-3" />
        <div className="max-h-[500px] overflow-auto">
          {carts.map((item) => {
            const itemTotal = (item.amount * item.price).toFixed(2);

            return (
              <div
                key={item.id}
                className="grid grid-cols-3 mt-[12px] bg-[#FBFBFB] items-center "
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

                <div>
                  <span className="flex gap-[14px] items-center">
                    <span className="text-[#727272] text-right text-[14px] ml-[100px] font-normal leading-[16px]">
                      (x {item.amount})
                    </span>
                  </span>
                </div>

                <div className="flex items-center justify-between pr-[26px]">
                  <p className="text-[#46A358] text-[16px] font-bold leading-[16px] ml-[60px]">
                    ${itemTotal}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pl-[60px] mt-[20px] flex flex-col gap-y-4">
          <p className="text-[#3D3D3D] text-right text-[14px] font-normal leading-[16px]">
            Have a coupon code?
            <span className="text-[#46A358] text-[14px] font-medium leading-[16px]">
              {" "}
              Click here
            </span>
          </p>

          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Coupon Discount</p>
            <p>(-) 00.00</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p> ${shippingTotal.toFixed(2)}</p>
          </div>
          <p className="text-[#46A358] text-[12px] font-normal leading-[16px] text-right">
            View shipping charge
          </p>
          <hr className="border-[#46A358] opacity-30 mt-4" />
        </div>

        <div className=" pl-[60px]">
          <div className="flex justify-between">
            <p>Total</p>
            <p>${totalCartPrice.toFixed(2)}</p>
          </div>

          <h2 className="text-[#3D3D3D] text-[17px] font-bold leading-[16px] mt-[47px]">
            Payment Method
          </h2>
          <div className="bg-white py-4">
            <label className="flex items-center w-[321px] mb-2 p-3 border">
              <input type="radio" name="payment" className="mr-2" />
              <img src={paymend} alt="" />
            </label>
            <label className="flex items-center w-[321px] mb-2 p-3 border">
              <input type="radio" name="payment" className="mr-2" />
              Direct bank transfer
            </label>
            <label className="flex items-center w-[321px] mb-2 p-3 border.">
              <input type="radio" name="payment" className="mr-2" />
              Cash on delivery
            </label>
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="mt-6 w-full bg-[#46A358] text-white p-2 rounded"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>

      <OrderSuccessModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </div>
  );
};

export default Checkout;
