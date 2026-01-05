import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">MT</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nepal's Tech Innovation</h3>
                  <p className="text-gray-600">Empowering communities through technology</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Mirdaha Technology
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <span className="text-green-600 font-semibold">
                "Blending Research & Technology to Create Impactful Solutions."
              </span>
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a forward-thinking technology company based in Nepal, dedicated to 
              bridging the gap between cutting-edge research and practical technology solutions. 
              Our team combines deep technical expertise with a thorough understanding of 
              local and global market needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From custom software development to advanced data analytics, we help 
              businesses and organizations leverage technology to achieve their goals 
              and make a meaningful impact in their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;