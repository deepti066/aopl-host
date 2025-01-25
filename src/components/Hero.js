import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Img1 from '../images/cloud-2.png';
// import Img2 from '../images/hosting.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div
          className="h-screen m-auto overflow-hidden bg-gradient-to-br from-gray-800 via-blue-900 to-black mt-8 lg:mt-4 h-5/6"
          data-aos="zoom-in">
          <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
              <h1 className="md-15 md:text-5xl text-3xl font-bold text-white">
                Fast and Secure Web Hosting
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-white">
                We are a team of highly motivated and skilled developers dedicated to delivering only the best software.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="text-white bg-indigo-500 hover:bg-indigo-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="text-white bg-teal-500 hover:bg-teal-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Contact Us
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="flex lg:justify-end w-full lg:w-1/2 pr-8 mt-8" data-aos="fade-up" data-aos-delay="700">
              <Carousel
                className="w-full"
                interval={3000}
                fade
                activeIndex={currentIndex}
                onSelect={handleSelect}>
                <Carousel.Item>
                  <img className="d-block w-100 rounded-t mt-40" src={Img1} alt="First slide" />
                  <Carousel.Caption
                    className={`transition-transform duration-1000 transform ${
                      currentIndex === 0 ? 'translate-y-0' : '-translate-y-12'
                    }`}
                  >
                    <h3 className="text-white">Fast and Secure Hosting</h3>
                    <p className="text-white">Your cloud hosting solution for better performance and scalability.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                  <img className="d-block w-100 rounded-t mt-40" src={Img2} alt="Second slide" />
                  <Carousel.Caption
                    className={`transition-transform duration-1000 transform ${
                      currentIndex === 1 ? 'translate-y-0' : '-translate-y-12'
                    }`}
                  >
                    <h3 className="text-white">Reliable Cloud Solutions</h3>
                    <p className="text-white">Empower your business with reliable cloud hosting.</p>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
