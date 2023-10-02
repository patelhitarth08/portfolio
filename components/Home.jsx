import React from "react";
import "@styles/home.css";

const Home = () => {
  return (
    <div id="home" className="home-container h-screen">
      <div className=" w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg">
        <img
          className="object-cover w-full h-full"
          src="/assets/images/Hitarth.jpg"
          alt=""
        />
      </div>

      <div className="text">
        Hi, I'm <span>Hitarth Patel</span>
        <p>
          a <span>passionate</span> software developer.
        </p>
        <p>
          I am a <span className="profession">.</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
