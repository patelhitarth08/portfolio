"use client";
import React, { useState } from "react";
import "../styles/extraCurricular.css";

const ExtraCurricular = () => {
  const details = [
    {
      shortform: "CSI",
      club: "Computer Society of India, Student Branch DDU",
      position: "Vice President",
      span: "Sep 2023 - Present",
      description: [
        "Organized tech events and content creation.",
        "Developed teamwork, communication, and web development skills.",
        "Previously served as a Junior Associate from Sep 2022 toSep 2023.",
      ],
    },
    {
      shortform: "GDSC",
      club: "Google Student Developer Clubs, DDU Chapter",
      position: "Web Development Lead",
      span: "Sep 2023 - Present",
      description: [
        "Managed repositories for Hacktoberfest-2022 (an open-source festival in October).",
        "Enhanced web development skills.",
        "Previously worked as a Web Development Team Member from Sep 2022 to Sep 2023.",
      ],
    },
    {
      shortform: "Malgadi",
      club: "Malgadi",
      position: "Management Team Member",
      span: "Apr 2022 - Present",
      description: [
        "Managing team across Ecommerce administration of a website and customer service.",
        " Learned leadership, time management, business skills and more management skills",
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div id="extra" className="extra-container h-screen">
      <h1>Extra Curricular Activities</h1>
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
        <h2 className="text-2xl font-semibold mb-2">
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
      </div>
    </div>
  );
};

export default ExtraCurricular;
