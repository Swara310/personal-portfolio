import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdPhone } from "react-icons/md";


const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl text-white">
  <li className="flex gap-1 items-center">
    <MdOutlineEmail size={20} className="text-white" />
    <a href="mailto:swaralipatil2131@gmail.com" className="hover:underline">
      swaralipatil2131@gmail.com
    </a>
  </li>
  <li className="flex gap-1 items-center">
    <CiLinkedin className="text-white" />
    <a href="https://www.linkedin.com/in/swarali-patil31" target="_blank" rel="noopener noreferrer" className="hover:underline">
      linkedin.com/swarali-patil31
    </a>
  </li>
  <li className="flex gap-1 items-center">
    <FaGithub className="text-white" />
    <a href="https://github.com/Swara310" target="_blank" rel="noopener noreferrer" className="hover:underline">
      github.com/Swara310
    </a>
  </li>
  <li className="flex gap-1 items-center">
    <MdPhone className="text-white" />
    <a href="tel:+919146939196" className="hover:underline">
      +91 9146939196
    </a>
  </li>
</ul>

    </div>
  );
};

export default Footer;
