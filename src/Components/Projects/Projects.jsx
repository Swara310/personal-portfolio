import React from "react";
import ProjectCard from "./ProjectCard";
import chatImg from "../../assets/chat.png";
import quizImg from "../../assets/quiz.png";
import restaurantImg from "../../assets/reservation.png";
import locationImg from "../../assets/location.png";
import passwordImg from "../../assets/pass.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Chat Application"
          main="Built a real-time chat application with private messaging, JWT authentication, and a modern UI using DaisyUI. Integrated Socket.io for instant communication and Cloudinary for image sharing."
          imgSrc={chatImg}
          demoLink="https://chat-app-oaje.onrender.com"
          sourceLink="https://github.com/Swara310/chat-app.git"
        />
        <ProjectCard
          title="Quiz App"
          main="Developed an interactive quiz app with a dynamic UI, backend for quiz management, and MongoDB for storing questions, results and scores."
          imgSrc={quizImg}
          demoLink="https://quiz-game-swarali-patils-projects.vercel.app"
          sourceLink="https://github.com/Swara310/QuizGame.git"
        />
        <ProjectCard
          title="Restaurant Reservation"
          main="Designed a stylish restaurant reservation page with an intuitive form for booking. The UI features elegant styling, high-quality images, and smooth interactions to enhance the user experience."
          imgSrc={restaurantImg}
          demoLink="https://restaurant-reservation-nine.vercel.app/"
          sourceLink="https://github.com/Swara310/Restaurant_Reservation.git"
        />
         <ProjectCard
          title="Location Tracker"
          main="Developed a location tracking application using React and Leaflet, allowing users to enter a current location and destination. The app displays markers and calculates the straight-line distance between locations, providing a simple and interactive map interface."
          imgSrc={locationImg}
          demoLink="https://location-tracker-jet.vercel.app/"
          sourceLink="https://github.com/Swara310/Location_Tracker.git"
        />
         <ProjectCard
          title="Password Generator"
          main="Developed a password generator using React and Vite, allowing users to customize password length and include numbers or characters. The app features a modern UI with a copy-to-clipboard button for easy usage."
          imgSrc={passwordImg}
          demoLink="https://password-generator-rose-nu.vercel.app/"
          sourceLink="https://github.com/Swara310/Password_Generator.git"
        />
      </div>
    </div>
  );
};

export default Projects;
