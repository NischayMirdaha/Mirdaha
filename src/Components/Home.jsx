import React, { useState } from 'react';
import { Menu, X, ArrowRight, Code, Database, Cloud, Users, Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GIS & Mapping Solutions",
      description: "Geographic Information Systems expertise for spatial data analysis and mapping solutions."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Digital Profile for Local Bodies",
      description: "Comprehensive digital transformation solutions for local government bodies and municipalities."
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
text-transparent bg-clip-text font-bold animate-pulse">
  Mirdaha Research & Technology
</span>

            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-green-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Get in Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-green-600 transition-colors py-2">About</a>
              <a href="#services" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Services</a>
              <a href="#projects" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Projects</a>
              <a href="#contact" className="block text-gray-700 hover:text-green-600 transition-colors py-2">Contact</a>
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Get in Touch
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Innovating Technology for a{' '}
                <span className="text-green-600">Smarter Nepal</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                At Mirdaha Technology, we bring research-driven tech solutions to empower businesses and communities across Nepal and beyond.
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Content - Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow sm:mt-8">
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research</h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud</h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow sm:mt-8">
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consulting</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="bg-green-600 w-full aspect-square rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl sm:text-8xl font-bold text-white mb-4">MT</div>
                  <div className="text-xl sm:text-2xl text-white font-semibold">Nepal's Tech Innovation</div>
                  <div className="text-base sm:text-lg text-green-100 mt-2">Empowering communities through technology</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Mirdaha Technology</h2>
              <p className="text-xl sm:text-2xl text-green-600 font-semibold mb-6">
                "Blending Research & Technology to Create Impactful Solutions."
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                We are a forward-thinking technology company based in Nepal, dedicated to bridging the gap between cutting-edge research and practical technology solutions. Our team combines deep technical expertise with a thorough understanding of local and global market needs.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                From custom software development to advanced data analytics, we help businesses and organizations leverage technology to achieve their goals and make a meaningful impact in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-shadow border border-gray-200">
                <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our latest work and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
                <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <button className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base">
                      View Project
                    </button>
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@mirdahatech.com.np</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+977 9867177200</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Itahari, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600 p-6 sm:p-8 rounded-xl shadow-lg text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <button className="bg-white text-green-600 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="bg-white text-green-600 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button className="bg-white text-green-600 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                <span className="text-green-400">Mirdaha</span> Technology
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Innovating technology for a smarter Nepal through research-driven solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Software Development</span></li>
                <li><span className="text-gray-400">Research & Data Solutions</span></li>
                <li><span className="text-gray-400">Cloud & Web Services</span></li>
                <li><span className="text-gray-400">IT Consulting</span></li>
                <li><span className="text-gray-400">GIS & Mapping</span></li>
                <li><span className="text-gray-400">Digital Profile Solutions</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">info@mirdahatech.com.np</li>
                <li className="text-gray-400">Itahari, Nepal</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 Mirdaha Technology | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;