import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const LoginModal = ({}) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-green-600 flex items-center">
              <span className="material-icons">account_circle</span>
              <span className="ml-2">Account Details</span>
            </a>
            <a href="#" className="flex items-center">
              <span className="material-icons">location_on</span>
              <span className="ml-2">Address</span>
            </a>
            <a href="#" className="flex items-center">
              <span className="material-icons">shopping_cart</span>
              <span className="ml-2">Orders</span>
            </a>
            <a href="#" className="flex items-center">
              <span className="material-icons">favorite_border</span>
              <span className="ml-2">Wishlist</span>
            </a>
            <a href="#" className="flex items-center">
              <span className="material-icons">bar_chart</span>
              <span className="ml-2">Reports</span>
            </a>
            <a href="#" className="flex items-center">
              <span className="material-icons">file_download</span>
              <span className="ml-2">Downloads</span>
            </a>
            <a href="#" className="flex items-center">
              <span className="material-icons">support</span>
              <span className="ml-2">Support</span>
            </a>
            <a href="#" className="text-red-600 flex items-center">
              <span className="material-icons">logout</span>
              <span className="ml-2">Logout</span>
            </a>
          </nav>
        </div>
        <div className="w-3/4 p-8">
          <h2 className="text-xl font-bold mb-6">Personal Information</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block mb-1">First Name *</label>
                <input type="text" className="w-full p-2 border" />
              </div>
              <div className="col-span-1">
                <label className="block mb-1">Last Name *</label>
                <input type="text" className="w-full p-2 border" />
              </div>
              <div className="col-span-1">
                <label className="block mb-1">Email address *</label>
                <input type="email" className="w-full p-2 border" />
              </div>
              <div className="col-span-1">
                <label className="block mb-1">Phone Number *</label>
                <div className="flex">
                  <select className="p-2 border">
                    <option value="+966">+966</option>
                    {/* other options */}
                  </select>
                  <input type="text" className="w-full p-2 border" />
                </div>
              </div>
              <div className="col-span-2">
                <label className="block mb-1">Username *</label>
                <input type="text" className="w-full p-2 border" />
              </div>
              <div className="col-span-2 flex items-center">
                <img
                  src="path/to/photo"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <button
                  type="button"
                  className="ml-4 p-2 bg-green-600 text-white"
                >
                  Change
                </button>
                <button
                  type="button"
                  className="ml-2 p-2 bg-red-600 text-white"
                >
                  Remove
                </button>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-8 mb-6">Password change</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block mb-1">Current password</label>
                <input type="password" className="w-full p-2 border" />
              </div>
              <div className="col-span-1">
                <label className="block mb-1">New password</label>
                <input type="password" className="w-full p-2 border" />
              </div>
              <div className="col-span-1">
                <label className="block mb-1">Confirm new password</label>
                <input type="password" className="w-full p-2 border" />
              </div>
              <div className="col-span-2">
                <button type="submit" className="p-2 bg-green-600 text-white">
                  Save Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
