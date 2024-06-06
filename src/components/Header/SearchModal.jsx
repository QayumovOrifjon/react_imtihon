import React from "react";
import { FaTimes } from "react-icons/fa";

const SearchModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-[-600px] inset-0 bg-[#171A1E] bg-opacity-95 flex items-center justify-center z-50">
      <div className=" p-6 rounded-lg w-1/3 animate-slideDown">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <FaTimes className="text-[#46A358] hover:text-[#007718]" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-white px-4 py-2 border-b border-[#46A358] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchModal;
