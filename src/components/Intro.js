import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 bg-gradient-to-br from-gray-800 via-blue-900 to-black" id="about">

                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <img alt="Cloud Hosting" className="rounded-t float-right" src={img} />
                    </div>
                    <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">

                        <h3 className="text-3xl text-white font-bold mb-4">
                            Fast, Secure, and Scalable Cloud Hosting for Your Business
                        </h3>
                        <div>
                            <p className="my-3 text-xl text-gray-300 font-semibold">
                                Experience lightning-fast performance, unparalleled uptime, and robust security with our cutting-edge cloud hosting solutions. 
                            </p>
                        </div>

                        <div>
                            <p className="my-3 text-xl text-gray-300 font-semibold">
                                Whether you're running a small business or managing an enterprise, our cloud hosting services are designed to scale with your needs.
                            </p>
                        </div>

                        <div>
                            <p className="my-3 text-xl text-gray-300 font-semibold">
                                Enjoy 24/7 support, automated backups, and an intuitive control panel to manage your hosting effortlessly.
                            </p>
                        </div>

                        <Link to="/contact" className="text-white bg-blue-700 hover:bg-blue-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                            Contact us
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;
