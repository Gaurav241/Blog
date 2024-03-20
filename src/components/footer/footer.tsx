import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

  return (
    <footer className="p-4 flex flex-col md:flex-row justify-between items-center relative">
      <div className="flex flex-col items-start">
        <h3 className="text-lg mb-2">Blog</h3>
        <img src="\favicon.ico" alt="Blog Logo" className="w-16 h-16 mb-2" />
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col">
          <h3 className="text-lg mb-2">Socials</h3>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <a href="mailto:gaurav.govinda2420@gmail.com" className="underline">Email</a>
          </div>
          <div className="flex items-center mb-2">
            <FaGithub className="mr-2" />
            <a href="https://github.com/Gaurav241" className="underline">GitHub</a>
          </div>
          <div className="flex items-center mb-2">
            <FaLinkedin className="mr-2" />
            <a href="https://www.linkedin.com/in/KrGauravGovinda" className="underline">LinkedIn</a>
          </div>
          <div className="flex items-center">
            <FaSquareXTwitter className="mr-2" />
            <a href="https://twitter.com/KrGauravGovinda" className="underline">Twitter</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg mb-2">About</h3>
          <a href="https://gauravgovinda.vercel.app/#contact" className="underline mb-2">Contact</a>
          <a href="https://gauravgovinda.vercel.app/" className="underline mb-2">About Us</a>
          <a href="https://gauravgovinda.vercel.app/projects" className="underline mb-2">Other Projects</a>
          <a href="https://gauravgovinda.vercel.app/#experiences" className="underline mb-2">Past Experience</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
