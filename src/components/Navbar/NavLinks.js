import React from 'react';
import { HashLink } from 'react-router-hash-link';


const NavLinks = () => {
    return (
        <>
            <div className="font-roboto text-lg space-x-10">
            <HashLink className="px-4 gap-4 text-white hover:text-black" smooth to="/">
                Home
            </HashLink>
            <HashLink className="px-4 gap-4 text-white hover:text-black" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 gap-4 text-white hover:text-black" to="/services">
                Services
            </HashLink>
            <HashLink className="px-4 text-white hover:text-black" to="/">
                Hosting
            </HashLink>
            <HashLink className="px-4 text-white hover:text-black" to="/contact">
                Contact Us
            </HashLink>
            {/* <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink> */}
            </div>
        </>
    )
}

export default NavLinks;
