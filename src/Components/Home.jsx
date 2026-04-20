import React, { useState } from 'react';
import { Menu, X, ArrowRight, Code, Database, Cloud, Users, Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const projects = [
    {
      title: "University Finder App",
      image: "/api/placeholder/300/200",
      description: "Comprehensive platform for students to find and compare universities across Nepal."
    },
    {
      title: "Olympic Web Portal",
      image: "/api/placeholder/300/200",
      description: "Interactive web portal showcasing Olympic events and athlete information."
    },
    {
      title: "Podcast App",
      image: "/api/placeholder/300/200",
      description: "Modern podcast streaming application with advanced audio features."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                <span className="text-green-600">Mirdaha</span> Technology
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Get in Touch
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-900 font-medium">Home</a>
                <a href="#about" className="text-gray-700 font-medium">About</a>
                <a href="#services" className="text-gray-700 font-medium">Services</a>
                <a href="#projects" className="text-gray-700 font-medium">Projects</a>
                <a href="#contact" className="text-gray-700 font-medium">Contact</a>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg w-fit font-medium">
                  Get in Touch
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest work and innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                  <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>info@mirdahatech.com.np</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+977 9767177200</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                <span className="text-green-500">Mirdaha</span> Technology
              </div>
              <p className="text-gray-400">
                Innovating technology for a smarter Nepal through research-driven solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-green-500 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-green-500 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-green-500 transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Software Development</li>
                <li>Research & Data Solutions</li>
                <li>Cloud & Web Services</li>
                <li>IT Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@mirdahatech.com.np</li>
                <li>Kathmandu, Nepal</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Mirdaha Technology | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

 