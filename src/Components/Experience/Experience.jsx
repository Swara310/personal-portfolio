import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaJava,FaNode} from "react-icons/fa";
import { SiMongodb ,SiTailwindcss,SiExpress} from "react-icons/si";
import { MdVolunteerActivism } from "react-icons/md";
import sahyadriLogo from "../../assets/sahyadri.png"; 
import dxcLogo from "../../assets/dxc.png"; 

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#fff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={sahyadriLogo} alt="Sahyadri Software" className="w-16 h-16" />
            <span className="text-white">
              <h2 className="leading-tight">Sahyadri Software Solutions | Intern</h2>
              <p className="text-sm leading-tight font-thin">January 2024 - May 2024</p>
              <ul className="text-sm p-2">
                <li>- Developed web-based applications using JavaScript and React.js.</li>
                <li>- Enhanced user experience.</li>
                <li>- Collaborated with cross-functional teams for innovative client solutions.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <MdVolunteerActivism color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">National Social Services | Volunteer</h2>
              <p className="text-sm leading-tight font-thin">February 2024</p>
              <ul className="text-sm p-2">
                <li>- Led team management and structured communication.</li>
                <li>- Boosted task completion speed and quality.</li>
                <li>- Increased volunteer participation by 30+ members per event.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={dxcLogo} alt="DXC Technology" className="w-16 h-16" />
            <span className="text-white">
              <h2 className="leading-tight">DXC Technology | Apprentice</h2>
              <p className="text-sm leading-tight font-thin">July 2022 - October 2022</p>
              <ul className="text-sm p-2">
                <li>- Assistant Service Delivery Coordinator.</li>
                <li>- Gained hands-on experience in cloud computing principles.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
