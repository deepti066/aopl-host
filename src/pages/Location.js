import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';



const Location = () => {
  useDocTitle('Aryahi Optinet - Our Location');

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="location" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Our Location</h1>
            </div>

            {/* Google Map Embed or Location Info */}
            <div className="mt-8">
              <h2 className="text-xl text-blue-900">Office Location</h2>
              <div className="w-full h-64 mt-4 rounded-lg overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.839876339858!2d91.7983603761509!3d26.136763393004173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a58da9c53099b%3A0x366ce40069b3ea7d!2sMadhab%20Tower!5e0!3m2!1sen!2sin!4v1731579371196!5m2!1sen!2sin"
              title="location"
              width="600" height="450" 
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            {/* Office Contact Info */}
            <div className="my-8">
              <h2 className="text-xl text-blue-900">Contact Information</h2>
              <div className="flex flex-col mt-4 space-y-4">
                <div className="flex">
                  <i className="fas fa-map-marker-alt pt-2 pr-2 text-blue-900" />
                  <div>
                    <h3 className="text-lg text-blue-900">Office Address</h3>
                    <p className="text-gray-700">Guwahati, Assam</p>
                  </div>
                </div>

                <div className="flex">
                  <i className="fas fa-phone-alt pt-2 pr-2 text-blue-900" />
                  <div>
                    <h3 className="text-lg text-blue-900">Call Us</h3>
                    <p className="text-gray-700">Tel: 000000000</p>
                  </div>
                </div>

                <div className="flex">
                  <i className="fas fa-envelope pt-2 pr-2 text-blue-900" />
                  <div>
                    <h3 className="text-lg text-blue-900">Send an Email</h3>
                    <p className="text-gray-700">info@aryahioptinet.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full flex justify-center bg-white h-10 w-10 text-blue-900 text-center pt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current font-black hover:animate-pulse"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full flex justify-center bg-white h-10 w-10 text-blue-900 text-center pt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current font-black hover:animate-pulse"
                >
                  <circle cx="4.983" cy="5.009" r="2.188"></circle>
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Location;
