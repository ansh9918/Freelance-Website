import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="mt-20 px-6 font-syne font-semibold md:px-20">
        {/* Main section with border and company info */}
        <div className="flex flex-col items-center justify-between border-t-[1px] border-gray-800 p-6 md:flex-row md:py-12">
          {/* Company logo */}
          <div className="mb-6 text-4xl text-white md:mb-0 md:text-5xl">
            DZINR
          </div>

          {/* Support info */}
          <div className="mb-6 flex flex-col items-center justify-center space-y-1 text-lg text-gray-500 md:mb-0 md:text-xl">
            <div className="text-gray-600">Need support?</div>
            <div className="cursor-pointer hover:text-white">
              dzinr.co@gmail.com
            </div>
          </div>

          {/* Social media links */}
          <div className="text-center md:text-left">
            <div className="text-lg text-gray-500 md:text-xl">Follow us</div>
            <div className="mt-2 flex items-center justify-center gap-4 text-3xl md:justify-start">
              <FaInstagram className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-white" />
              <CiLinkedin className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-white" />
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="flex flex-col items-center justify-between border-t-[1px] border-gray-600 py-6 text-sm text-gray-600 md:flex-row md:text-base">
          <div className="mb-4 cursor-pointer hover:text-white md:mb-0">
            Designed with ❤️ by Yash
          </div>
          <div>DZINR © 2023 All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
