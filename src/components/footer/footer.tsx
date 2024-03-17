import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 flex justify-between items-center flex-col md:flex-row">
      <div className="flex flex-col items-start mb-4 md:mb-0">
        <h3 className="text-lg mb-2">Blog</h3>
        <img src="\favicon.ico" alt="Blog Logo" className="w-16 h-16 mb-2" />
      </div>
      <div className="flex flex-col items-start mb-4 md:mb-0 md:mx-4">
        <h3 className="text-lg mb-2">Socials</h3>
        <div className="flex items-center mb-2">
          <FaTwitter className="mr-2" />
          <a href="https://twitter.com/yourtwitter" className="underline">Your Twitter</a>
        </div>
        <div className="flex items-center">
          <FaGithub className="mr-2" />
          <a href="https://github.com/yourgithub" className="underline">Your GitHub</a>
        </div>
      </div>
      <div className="flex flex-col items-start mb-4 md:mb-0">
        <h3 className="text-lg mb-2">About</h3>
        <a href="#" className="underline mb-2">About Us</a>
        <a href="#" className="underline mb-2">Contact</a>
        <a href="#" className="underline mb-2">Past Projects</a>
        <a href="#" className="underline">Past Experience</a>
      </div>
    </footer>
  );
};

export default Footer;
