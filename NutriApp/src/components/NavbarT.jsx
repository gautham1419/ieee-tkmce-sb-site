import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"; 
import { Link } from "react-scroll"; 
import logo from "../assets/ACM-logo.png";

const NavbarT = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-10 flex items-center justify-between py-4 bg-gray-800">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-0.2 w-16 h-10 rounded-lg" src={logo} alt="logo" />
        </a>
        <div className="md:text-lg text-white ml-2">
          NutriApp<br />
          
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`hidden md:flex px-8 items-center justify-center gap-6 text-xl text-white`}>
        <NavLink
          to="/"
          exact
          className="hover:text-blue-400 transition duration-300"
          activeClassName="text-blue-500"
        >
          Home
        </NavLink>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400 transition duration-300"
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400 transition duration-300"
        >
          Contact Us
        </Link>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 p-4 md:hidden flex flex-col items-center space-y-4 text-white z-50`}
      >
        <NavLink
          to="/"
          exact
          className="hover:text-blue-400 transition duration-300"
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400 transition duration-300"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400 transition duration-300"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavbarT;
