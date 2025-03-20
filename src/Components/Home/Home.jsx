import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";


const Home = () => {

  const handleScroll = () => {
    document.getElementById("Footer").scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
         <TextChange/>
        </h1>
        <p className="text-m md:text-md leading-tight mt-10">
        MERN Stack Developer passionate about building scalable and user-friendly web applications. I focus on writing clean, maintainable code that enhances performance and user experience.
        </p>
      
        <button
            className="mt-10 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            onClick={handleScroll} 
          >
            Contact Me
          </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
