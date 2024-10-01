import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className="text-white w-full relative">
                <div className="py-6 flex justify-between items-center px-6 md:px-12">
                    {/* Logo for smaller devices (left aligned) */}
                    <Link
                        to="/"
                        className="text-5xl font-jakarta font-extrabold tracking-wider md:hidden">
                        DZ!NR
                    </Link>

                    {/* Navigation links and centered logo for larger screens */}
                    <div className="hidden md:flex items-center justify-center space-x-8 mx-auto">
                        <NavLink
                            to=""
                            className="text-md font-semibold hover:text-gray-300">
                            Projects
                        </NavLink>
                        <NavLink
                            to="/Merch"
                            className="text-md font-semibold hover:text-gray-300">
                            Merch
                        </NavLink>
                        {/* Centered logo */}
                        <Link
                            to="/"
                            className="text-5xl font-jakarta font-extrabold">
                            DZ!NR
                        </Link>
                        <NavLink
                            to=""
                            className="text-md font-semibold hover:text-gray-300">
                            Team
                        </NavLink>
                        <NavLink
                            to=""
                            className="text-md font-semibold hover:text-gray-300">
                            Contact
                        </NavLink>
                    </div>

                    {/* Hamburger menu for smaller screens */}
                    <div className="md:hidden">
                        <IoMenu
                            className="text-white h-10 w-10 cursor-pointer"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div
                        className={`absolute left-0 right-0 z-20 bg-gray-900 text-center py-4 transition-transform duration-300 ease-in-out ${
                            menuOpen ? "translate-y-0" : "translate-y-[-100%]"
                        }`}>
                        <NavLink
                            to=""
                            className="block py-2 text-md font-semibold hover:text-gray-300">
                            Projects
                        </NavLink>
                        <NavLink
                            to="/Merch"
                            className="block py-2 text-md font-semibold hover:text-gray-300">
                            Merch
                        </NavLink>
                        <NavLink
                            to=""
                            className="block py-2 text-md font-semibold hover:text-gray-300">
                            Team
                        </NavLink>
                        <NavLink
                            to=""
                            className="block py-2 text-md font-semibold hover:text-gray-300">
                            Contact
                        </NavLink>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
