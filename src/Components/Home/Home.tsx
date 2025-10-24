import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    { name: "Government Projects", icon: "🏛️" },
    { name: "Corporate Events", icon: "💼" },
    { name: "Theme Based Show", icon: "🎪" },
    { name: "Competition Choreography", icon: "🏆" },
    { name: "Professional Troop & Instructors", icon: "👥" },
    { name: "Zumba & Fitness Batches", icon: "💃" },
    { name: "Dance Classes", icon: "✨" },
    { name: "Zumba Sessions", icon: "🔥" },
    { name: "Sangeet/Wedding Choreography", icon: "💍" },
    { name: "School Events & Annual Day", icon: "🎓" }
  ];

  const achievements = [
    { 
      text: "Choreographer for Hon. President of India, Smt. Droupadi Murmu",
      icon: "🇮🇳",
      year: "2023"
    },
    { 
      text: "Program Designer for G20 Summit India",
      icon: "🌍", 
      year: "2023"
    },
    { 
      text: "Represented Indian culture in Kobe, Japan",
      icon: "🎌",
      year: "2024"
    },
    { 
      text: "Official Choreographer – Shivaji University",
      icon: "🏫",
      year: "2022-23"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-pink-50 to-rose-50 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-200 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-100 rounded-full opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-500 rounded-2xl mb-6 shadow-lg">
              <span className="text-3xl text-white">💃</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              BeatToBeat <span className="text-pink-500">Studio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Established in <span className="text-pink-500 font-semibold">2010</span> | 
              <span className="text-pink-500 font-semibold"> 16 Years</span> of Dance, Passion & Excellence
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/in-studio-classes"
              className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span className="text-lg">🎯</span>
              Explore Classes
            </Link>
            <Link
              to="/studio-booking"
              className="bg-white text-pink-500 border-2 border-pink-200 px-8 py-4 rounded-2xl font-semibold hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span className="text-lg">🏢</span>
              Book Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "14+", label: "Years Experience", icon: "⭐", color: "bg-pink-100 text-pink-600" },
              { number: "5000+", label: "Students Trained", icon: "👥", color: "bg-rose-100 text-rose-600" },
              { number: "100+", label: "Events Organized", icon: "🎭", color: "bg-pink-100 text-pink-600" },
              { number: "50+", label: "Awards Won", icon: "🏆", color: "bg-rose-100 text-rose-600" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-md`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-pink-500">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dance and fitness solutions tailored for everyone
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-pink-200 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/overview"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>📋</span>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured <span className="text-pink-500">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-md">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      {achievement.text}
                    </p>
                    <span className="inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/key-achievements"
              className="inline-flex items-center gap-2 bg-white text-pink-500 border-2 border-pink-200 px-8 py-4 rounded-2xl font-semibold hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>🌟</span>
              View All Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-pink-100">
            <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6 shadow-lg">
              💫
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Start Your <span className="text-pink-500">Dance Journey</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join <span className="text-pink-500 font-semibold">5000+ students</span> who have transformed their lives through dance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/in-studio-classes"
                className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>🎯</span>
                Free Trial Class
              </Link>
              <Link
                to="/about-us"
                className="bg-white text-pink-500 border-2 border-pink-200 px-8 py-4 rounded-2xl font-semibold hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>📞</span>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 shadow-lg">
                💃
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from certified professionals with years of experience</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-rose-50 rounded-3xl shadow-lg border border-rose-100">
              <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 shadow-lg">
                🏢
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Modern Studio</h3>
              <p className="text-gray-600">State-of-the-art facilities with professional equipment</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-lg border border-pink-100">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 shadow-lg">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Results</h3>
              <p className="text-gray-600">14 years of excellence and countless success stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-pink-100">
              <div className="text-3xl text-pink-300 mb-4">📞</div>
              <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 96372 00333</p>
              <p className="text-gray-600">+91 96372 53572</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-pink-100">
              <div className="text-3xl text-pink-300 mb-4">📧</div>
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">beat2beatdancecrew@gmail.com</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-pink-100">
              <div className="text-3xl text-pink-500 mb-4">📍</div>
              <h3 className="font-bold text-gray-800 mb-2">Visit</h3>
              <p className="text-gray-600">Sangli, Maharashtra</p>
            </div>
          </div>
          <button className="bg-white-300 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;