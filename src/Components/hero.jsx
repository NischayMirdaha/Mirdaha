import React from 'react';
import { ArrowRight, Code, Database, Cloud, Users } from 'lucide-react';

const Homepage = () => {
  return (
    <section id="home" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Innovating Technology for a{' '}
              <span className="text-green-600">Smarter Nepal</span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              At Mirdaha Technology, we bring research-driven tech solutions to empower 
              businesses and communities across Nepal and beyond.
            </p>
            <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Development</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg mt-8">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Research</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg -mt-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Cloud</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg mt-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Consulting</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;