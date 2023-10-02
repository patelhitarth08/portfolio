"use client";
import React, { useState } from "react";
import "../styles/experience.css";

const Experience = () => {
  const details = [
    {
      shortform: "Internship",
      club: "W3Nuts Agency",
      position: "Python Web Dev Intern",
      span: "Jul 2023 - Aug 2023",
      description: [
        "Collaborated for 1.5 months on web project back-end development with the team.",
      ],
      certificate:
        "https://drive.google.com/file/d/11XLzwM45lTLZNHrCKbwEXLX4Dsv7gQAP/view?usp=sharing",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div id="experience" className="experience-container h-screen">
      <h1>Experience</h1>
      <div className="mb-4">
        {details.map((experience, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded-lg mr-2`}
            onClick={() => handleTabClick(index)}
          >
            {experience.shortform}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          {details[activeTab].club}
        </h2>
        <p className="text-lg font-semibold text-blue-500 mb-2">
          {details[activeTab].position}
        </p>
        <p className="text-gray-600">{details[activeTab].span}</p>
        <ul className="list-disc ml-6 mt-2">
          {details[activeTab].description.map((item, i) => (
            <li key={i} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={details[activeTab].certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default Experience;
