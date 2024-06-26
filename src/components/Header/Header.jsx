import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { FiSearch } from "react-icons/fi";
import IconLabelButtons from "./Login";
import Navbar from "../../pages/Navbar";
import CustomizedBadges from "./Basket";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className="flex items-center justify-between max-w-custom mx-auto ">
        <img src={Logo} alt="" />
        <Navbar />
        <div className="flex items-center gap-[30px]">
          <FiSearch onClick={openModal} />
          <SearchModal show={isModalOpen} onClose={closeModal} />

          <NavLink to="/AddCard">
            <CustomizedBadges />
          </NavLink>

          <header>
            <SignedOut>
              <SignInButton>
                <NavLink to="/Login">
                  <IconLabelButtons />
                </NavLink>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <NavLink
                to={"/Login"}
                onClick={() => dispatch(handleActive())}
                className={` hover:opacity-70 transition-all cursor-pointer rounded-md flex items-center gap-2 bg-[#46A358] py-2 px-4 text-white `}
              >
                <span className="text-[16px] font-medium ">User</span>
                <UserButton />
              </NavLink>
            </SignedIn>
          </header>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
