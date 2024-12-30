import React from 'react';
import { Link } from 'react-router-dom';
import cloudImage from '../images/cloud-2.png'; // Example image for the about section

const About = () => {
  return (
    
    <div className="bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-400">
            We're a passionate team dedicated to providing reliable, scalable, and secure cloud hosting solutions to help your business grow.
          </p>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300">
              We strive to empower businesses and developers by providing top-tier cloud hosting solutions. Our mission is to make the internet faster, safer, and more reliable for everyone.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={cloudImage} alt="Cloud Hosting" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Our Services */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold mb-8">Our Cloud Hosting Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Scalable Hosting</h4>
              <p className="text-gray-300">
                Our hosting services scale seamlessly to meet your growing business needs, ensuring top performance at any scale.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">24/7 Support</h4>
              <p className="text-gray-300">
                Our dedicated support team is always available to assist you, ensuring smooth operations around the clock.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Security & Reliability</h4>
              <p className="text-gray-300">
                We prioritize the security of your data, offering robust encryption and reliable backup systems to keep your information safe.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">abc</h4>
              <p className="text-gray-400">System Analyst</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">xyz</h4>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">ghi</h4>
              <p className="text-gray-400">Customer Support Manager</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">Ready to Get Started?</h3>
          <Link
            to="/contact"
            className="text-white bg-indigo-500 hover:bg-indigo-600 inline-flex items-center justify-center px-6 py-3 text-lg shadow-xl rounded-2xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
