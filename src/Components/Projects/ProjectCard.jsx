import React from "react";
import projectImg from "../../assets/project.png";


const ProjectCard = ({ title, main, imgSrc ,  demoLink, sourceLink    }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
       <img className="w-full h-40 object-cover rounded-lg" src={imgSrc } alt={title} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 flex-grow">{main}</p>
   
      <div className="mt-auto p-2 md:p-4 flex justify-center gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
