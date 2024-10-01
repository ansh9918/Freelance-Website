import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="px-6 md:px-20 mt-20 font-syne font-semibold">
                {/* Main section with border and company info */}
                <div className="border-t-[1px] border-gray-800 flex flex-col md:flex-row justify-between items-center p-6 md:py-12">
                    {/* Company logo */}
                    <div className="text-white text-4xl md:text-5xl mb-6 md:mb-0">
                        DZINR
                    </div>

                    {/* Support info */}
                    <div className="text-gray-500 flex flex-col justify-center items-center text-lg md:text-xl space-y-1 mb-6 md:mb-0">
                        <div className="text-gray-600">Need support?</div>
                        <div className="hover:text-white cursor-pointer">
                            dzinr.co@gmail.com
                        </div>
                    </div>

                    {/* Social media links */}
                    <div className="text-center md:text-left">
                        <div className="text-gray-500 text-lg md:text-xl">
                            Follow us
                        </div>
                        <div className="flex justify-center md:justify-start items-center text-3xl gap-4 mt-2">
                            <FaInstagram className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer" />
                            <CiLinkedin className="text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Footer section */}
                <div className="border-t-[1px] border-gray-600 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm md:text-base">
                    <div className="hover:text-white cursor-pointer mb-4 md:mb-0">
                        Designed with ❤️ by Yash
                    </div>
                    <div>DZINR © 2023 All Rights Reserved</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
