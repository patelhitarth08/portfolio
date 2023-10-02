import React from "react";
import "@styles/education.css";

const Education = () => {
  return (
    <div id="education" className="education-container">
      <h1 className="tex-lg md:text-4xl font-bold text-center mt-8 mb-6 xl:mb-10 text-gray-900">
        Education
      </h1>
      <div className="card-container grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
        <div className="card bg-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="card-display bg-blue-100 text-black">
            <p className="text-3xl xl:text-4xl font-bold">Graduation</p>
          </div>
          <div className="card-hover bg-white">
            <p className="text-xl font-bold">B.Tech in Computer Engineering</p>
            <p className="text-sm">Dharmsinh Desai University</p>
            <p className="text-sm">Expected Graduation: May 2025</p>
            <p className="text-sm font-bold">CPI: 8.52/10</p>
          </div>
        </div>
        <div className="card bg-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="card-display bg-blue-100 text-black">
            <p className="text-3xl xl:text-4xl font-bold">HSC</p>
          </div>
          <div className="card-hover bg-white">
            <p className="text-xl font-bold">Class XII State Board</p>
            <p className="text-sm">
              Tapasya Integrated School, Gandhinagar, Gujarat
            </p>
            <p className="text-sm">May 2021</p>
            <p className="text-sm font-bold">Percentage: 94.00%</p>
          </div>
        </div>
        <div className="card bg-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="card-display bg-blue-100 text-black">
            <p className="text-3xl xl:text-4xl font-bold">SSC</p>
          </div>
          <div className="card-hover bg-white">
            <p className="text-xl font-bold">Class X State Board</p>
            <p className="text-sm">
              Gopalak Vidya Sankul, Gandhinagar, Gujarat
            </p>
            <p className="text-sm">May 2019</p>
            <p className="text-sm font-bold">Percentage: 89.50%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
