import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        setisOpen(!isOpen);
    };

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-gradient-to-br from-gray-800 via-blue-900 to-black'}`}>
            <div className="flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <HashLink smooth to="/#hero">
                        <h1
                            className={`font-extrabold text-3xl transition-colors duration-300 ${
                                !top ? 'text-blue-900' : 'text-white'
                            }`} >
                            AT Cloud
                        </h1>
                    </HashLink>
                       
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-8">
                    <NavLinks />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`p-2 rounded-lg lg:hidden transition-all ${
                        top ? 'text-white' : 'text-blue-900'
                    }`}
                    onClick={handleClick}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-black transition-transform duration-500 ease-in-out transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } lg:hidden`}
            >
                <div className="flex flex-col items-center justify-center space-y-6 h-full">
                    <NavLinks />
                    {/* <button
                        className="text-red-600 font-bold text-lg"
                        onClick={() => setisOpen(false)}
                    >
                        Close Menu
                    </button> */}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
