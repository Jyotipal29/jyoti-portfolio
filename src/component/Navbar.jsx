import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-20 shadow-xl z-[100] bg-white">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        <div className="w-20 h-20">jyoti</div>
        <div>
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link to="/about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link to="/skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link to="/projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link to="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "   fixed left-0 top-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <p className="">jyoti</p>
              <div
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                lets build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="py-4 text-sm">Home</li>
              <li className="py-4 text-sm">About</li>
              <li className="py-4 text-sm">Skills</li>
              <li className="py-4 text-sm">Projects</li>
              <li className="py-4 text-sm">Contact</li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e9]">
                Lets Connect
              </p>
              <div className="flex justify-between items-center py-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsInstagram />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
