import { useState } from "react";
import logo from "/images/logo.svg";

function Navigator() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen((state) => !state);
  }

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>

        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        <button
          onClick={handleClick}
          id="menu-btn"
          type="button"
          className={`block hamburger lg:hidden focus:outline-none ${
            menuOpen ? "open" : ""
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        id="menu"
        className={`absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bol text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigator;
