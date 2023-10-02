"use client";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default styles
import "../styles/achievements.css";

const Achievements = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const achievements = [
    {
      title: "7th rank DUHacks hackathon",
      certificateLink:
        "https://certopus.com/c/0e78f61e0c3843bc9ff2a592f6ef31ff",
    },
    {
      title: "Organized DUHacks 2.0 hackathon",
      certificateLink:
        "https://drive.google.com/file/d/188n6kp8jOwIpT64Lf-hg8yznZ6nEYpo5/view?usp=drive_link",
    },
    {
      title: "Google KickStart round B - Top 11%",
      certificateLink:
        "https://drive.google.com/file/d/1v8RWHSX4ZQnw74SvAvoLZctOeB_LRdsO/view?usp=sharing",
    },
    {
      title: "Google KickStart round C - Top 10%",
      certificateLink:
        "https://drive.google.com/file/d/1v8RWHSX4ZQnw74SvAvoLZctOeB_LRdsO/view?usp=sharing",
    },
  ];

  const profiles = [
    {
      platform: "GitHub",
      username: "patelhitarth08",
      link: "https://github.com/patelhitarth08",
    },
    {
      platform: "LeetCode",
      username: "patelhitarth08",
      link: "https://leetcode.com/patelhitarth08/",
    },
    {
      platform: "Codeforces",
      username: "patel_hitarth08",
      link: "https://codeforces.com/profile/patel_hitarth08",
    },
    {
      platform: "Hackerrank",
      username: "patelhitarth08",
      link: "https://www.hackerrank.com/patelhitarth08?hr_r=1",
    },
    {
      platform: "CodeChef",
      username: "hitarth_codes",
      link: "https://www.codechef.com/users/hitarth_codes",
    },
  ];

  return (
    <div id="achievements" className="achievements-container">
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList className="flex bg-gray-200 rounded-t-lg">
          <Tab
            className={`w-1/2 py-2 text-center cursor-pointer ${
              selectedTab === 0 ? "bg-white text-blue-500" : "bg-gray-200"
            }`}
          >
            Achievements
          </Tab>
          <Tab
            className={`w-1/2 py-2 text-center cursor-pointer ${
              selectedTab === 1 ? "bg-white text-blue-500" : "bg-gray-200"
            }`}
          >
            Profiles
          </Tab>
        </TabList>

        <TabPanel>
          <div className="bg-white p-6 rounded-lg w-full shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Achievements</h1>
            <ul className="list-disc ml-6">
              {achievements.map((achievement, index) => (
                <li key={index}>
                  {achievement.title}
                  <a
                    href={achievement.certificateLink}
                    className="text-blue-500 ml-2 hover:text-blue-700 transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="bg-white p-6 rounded-lg w-full shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Profiles</h1>
            <ul className="list-disc ml-6">
              {profiles.map((profile, index) => (
                <li key={index}>
                  {profile.platform}:{" "}
                  <a
                    href={profile.link}
                    className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.username}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Achievements;
