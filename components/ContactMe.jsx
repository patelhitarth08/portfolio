import React from "react";
import "../styles/contactMe.css";
import { MdLocationPin } from "react-icons/md";

const ContactMe = () => {
  // Replace with your actual contact information
  const email = "patelhitarth08@gmail.com";
  const phoneNumber = "+91 7016421539";
  const resumeLink =
    "https://drive.google.com/file/d/1fxMfKwu7z46d--soHp5Q9M7ZVsrozstR/view?usp=drive_link";
  const address = "Katpur, Prantij, Gujarat-India";

  return (
    <div id="contactMe" className="contact-container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
        <p className="text-lg mb-4">
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="text-lg mb-4">Phone: {phoneNumber}</p>
        <p className="text-lg mb-4">
          Resume:{" "}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Download Resume
          </a>
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg mt-6">
        <div className="p-4">
          <div className="flex items-center mb-2">
            <MdLocationPin size={25} color="red" />
            <p className="text-lg font-semibold">Address</p>
          </div>
          <p className="text-lg mt-2 mb-4">{address}</p>
        </div>
        <iframe
          title="Map"
          width="100%"
          height="200"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            "23.412927,72.836928"
          )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMe;
