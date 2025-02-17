import React from "react";
import NavBar from "../components/Navbar/NavBar";
import { Link } from "react-router-dom";

const HostingPage = () => {
  const services = [
    { title: "Shared Hosting", icon: "🖥️", description: "Read More →", link: "#" },
    { title: "Dedicated Hosting", icon: "🔒", description: "Read More →", link: "#" },
    { title: "Cloud Hosting", icon: "☁️", description: "Read More →", link: "/cloud-hosting" },
    { title: "VPS Hosting", icon: "🖧", description: "Read More →", link: "/vps-hosting" },
    { title: "Web Hosting", icon: "", description: "Read More", } 
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 via-blue-900 to-black p-8 min-h-screen">
      <NavBar />
      <h2 className="text-center text-2xl text-white font-bold mt-16">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 bg-white border rounded-lg shadow-md hover:shadow-lg">
            <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-center">{service.title}</h3>
            <Link to={service.link} className="text-blue-500 text-sm font-medium hover:underline">
              {service.description}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostingPage;
