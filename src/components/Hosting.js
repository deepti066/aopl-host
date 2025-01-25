import React from "react";
import NavBar from "./Navbar/NavBar";

const HostingPage = () => {
  const services = [
    { title: "Shared Hosting", icon: "🖥️", description: "Read More →" },
    { title: "Dedicated Hosting", icon: "🔒", description: "Read More →" },
    { title: "Cloud Hosting", icon: "☁️", description: "Read More →" },
    { title: "VPS Hosting", icon: "🖧", description: "Read More →" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800 via-blue-900 to-black p-8 ">
        <div>
          <NavBar />
        </div>

      <h2 className="text-center text-2xl font-bold mt-16">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white border rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-center">{service.title}</h3>
            <a
              href="#"
              className="text-blue-500 mt-2 text-sm font-medium hover:underline"
            >
              {service.description}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostingPage;
