import React from 'react';
import { Code, Database, Cloud, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies and best practices."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Research & Data Solutions",
      description: "Advanced data analytics and research methodologies to drive informed decision-making."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Web Services",
      description: "Scalable cloud infrastructure and responsive web applications for modern businesses."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your digital transformation journey."
    }
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-green-600 group-hover:text-green-700 transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;