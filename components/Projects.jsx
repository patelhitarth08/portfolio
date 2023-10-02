"use client";
import React from "react";
import "@styles/projects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// node_modules\react-image-gallery\styles\css\image-gallery.css
// import { ReactImageGalleryImageSet } from "react-image-gallery";
// import { ReactImageGalleryItem } from "react-image-gallery";

const Projects = () => {
  const images = [
    {
      original: "/assets/images/Hitarth.jpg",
    },
    {
      original: "/assets/images/Hitarth.jpg",
    },
    {
      original: "/assets/images/Hitarth.jpg",
    },
  ];
  return (
    <div id="projects" className="project-container">
      <h1>Projects</h1>
      <div className="gallery grid grid-cols-1 lg:grid-cols-3 gap-6 p-10">
        <div className="bg-[#FEFEFD] m-auto md:m-0 w-72 md:w-full p-6 flex flex-col text-center items-center justify-start space-y-6 shadow-lg rounded-lg">
          <div className="border-2 border-gray-300 p-2">
            <ImageGallery items={images} className="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Sangeet</h2>
            <p className="text-gray-500">GitHub</p>
            <div className="mt-2 text-sm mb-4 text-gray-600">
              Tech: HTML, CSS, Django, MySQL
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Our Music Web Application is a versatile platform for both music
            aficionados and content creators. You can enjoy a wide selection of
            songs and podcasts, while also uploading your own content to share
            with the community. It's a one-stop destination for all things
            audio, offering an inclusive and engaging experience.
          </p>
        </div>

        <div className="bg-[#FEFEFD] m-auto md:m-0 w-72 md:w-full p-6 flex flex-col items-center text-center justify-start space-y-6 shadow-lg rounded-lg">
          <div className="border-2 border-gray-300 p-2">
            <ImageGallery items={images} className="md:w-32" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Connect: FreshStart Guide</h2>
            <p className="text-gray-500">GitHub</p>
            <div className="mt-2 text-sm mb-4 text-gray-600">
              Tech: MERN Stack
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Our project, the Fresh Start Guide platform, solves the challenge of
            student connectivity and resource sharing. It offers multi-mode
            communication options like chat, audio, and video calls for
            interaction and collaboration. Additionally, it facilitates screen
            sharing, notes sharing, and blogging to enhance learning, making it
            a comprehensive solution for students seeking support and guidance.
          </p>
        </div>

        <div className="bg-[#FEFEFD] m-auto md:m-0 w-72 md:w-full p-6 flex flex-col items-center text-center justify-start space-y-6 shadow-lg rounded-lg">
          <div className="border-2 border-gray-300 p-2">
            <ImageGallery items={images} className="md:w-32" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">GetThatDoc</h2>
            <p className="text-gray-500">GitHub</p>
            <div className="mt-2 text-sm mb-4 text-gray-600">
              Tech: HTML, CSS, JavaScript, PHP, MySQL
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            We've tackled the issue students face in finding essential notes by
            creating a user-friendly system. Students can effortlessly search
            for and access notes on any topic they require, whether handwritten
            or typed. Additionally, they can contribute their own valuable notes
            to benefit others, creating a comprehensive and supportive learning
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
