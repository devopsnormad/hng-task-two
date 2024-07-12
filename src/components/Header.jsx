import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdShoppingBasket } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Profilepic from "../assets/images/profilepic.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  
    <div
      className={`fixed top-0 left-0 w-full bg-textColor bg-opacity-5 z-50 py-4 px-8 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg backdrop-filter backdrop-blur-lg" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div>
          <h1 className="text-2xl font-bold text-textColor2 tracking-widest">
            N A K E D
          </h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-textColor2 text-2xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Navigation and search in the center for desktop */}
        <div className="hidden md:flex flex-col gap-12 md:flex-row md:flex-1 md:justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <nav className="flex flex-col gap-10 md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-lg">
            <Link to="/" className="text-textColor2">
              Home
            </Link>
            <Link to="/collections" className="text-textColor2">
              Collections
            </Link>
            <Link to="/blog" className="text-textColor2">
              Blog
            </Link>
            <Link to="/contact" className="text-textColor2">
              Contact
            </Link>
          </nav>
          <div className="relative flex items-center w-full md:w-64 mx-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-5 rounded-md outline-none bg-textColor opacity-50 text-white placeholder-textColor2"
            />
            <CiSearch className="absolute right-3 text-xl text-textColor2" />
          </div>
        </div>

        {/* Profile and Basket on the right for desktop */}
        <div className="hidden md:flex items-center space-x-2 gap-3">
          <div className="relative mr-5">
            <MdShoppingBasket className="text-3xl text-textColor2" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </div>
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src={Profilepic}
              alt="profile picture"
              className="object-cover object-top w-full h-full"
            />
          </div>
          <h2 className="text-lg text-textColor2 ml-1">Jess</h2>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-sideColor text-white -z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleSidebar} className="text-2xl p-4"></button>
        <nav className="flex flex-col p-4 space-y-6 text-lg">
          <Link to="/" className="text-textColor2">
            Home
          </Link>
          <Link to="/collections" className="text-textColor2">
            Collections
          </Link>
          <Link to="/blog" className="text-textColor2">
            Blog
          </Link>
          <Link to="/contact" className="text-textColor2">
            Contact
          </Link>
        </nav>
        <div className="relative flex items-center w-full p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-5 rounded-md outline-none bg-textColor2 text-white placeholder-textColor2"
          />
          <CiSearch className="absolute right-6 text-xl text-white" />
        </div>
        <div className="flex flex-col items-start p-4 space-y-2">
          <div className="relative mb-4">
            <MdShoppingBasket className="text-5xl" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
              1
            </span>
          </div>
          <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-textColor2">
            <img
              src={Profilepic}
              alt="profile picture"
              className="object-cover object-top w-full h-full"
            />
          </div>
          <h2 className="text-lg text-textColor2">Jess</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
