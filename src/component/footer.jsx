import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6148ff] via-[#667EEA] to-[#64B6FF] text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <img
            src={logo}
            alt="Logo"
            className="text-2xl lg:text-3xl font-semibold"
            style={{ width: "160px" }}
          />
          <p className="mt-2 text-xs">
            Meningkatkan pengetahuan, merajut masa depan.
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0 mb-3">
          <p className="text-gray-300">
            Made with <span className="text-red-500">❤️</span> | By DevAcademy
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
