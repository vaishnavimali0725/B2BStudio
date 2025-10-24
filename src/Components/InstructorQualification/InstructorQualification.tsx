import React from 'react';
import { Link } from 'react-router-dom';

const InstructorQualification: React.FC = () => {
  const stats = [
    { number: "8+", label: "Professional Instructors" },
    { number: "100+", label: "Years Combined Experience" },
    { number: "10+", label: "Dance Styles" },
    { number: "5000+", label: "Students Trained" }
  ];

  const featuredInstructors = [
    {
      id: 1,
      name: "Omcar Rokade",
      role: "Founder & Creative Head",
      specialization: "Bollywood, Contemporary, Folk",
      experience: "16+ years",
      image: "👑"
    },
    {
      id: 2,
      name: "Nikhil Patil",
      role: "HipHop Specialist",
      specialization: "HipHop, Street Styles",
      experience: "8+ years",
      image: "💥"
    },
    {
      id: 3,
      name: "Arpita Patil",
      role: "Yoga Instructor",
      specialization: "Yoga, Meditation, Wellness",
      experience: "6+ years",
      image: "🧘"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Instructors & Qualifications</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of certified professional instructors with decades of combined experience in dance and fitness
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Instructors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🌟 Featured Instructors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredInstructors.map((instructor) => (
              <div key={instructor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-6xl">
                  {instructor.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
                  <p className="text-pink-600 font-semibold mb-3">{instructor.role}</p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">🎯</span>
                      {instructor.specialization}
                    </div>
                    <div className="flex items-center">
                      <span className="text-pink-500 mr-2">⏱️</span>
                      {instructor.experience} experience
                    </div>
                  </div>
                  <Link
                    to="/instructor-list"
                    className="block w-full bg-pink-500 text-white text-center py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-200"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📜 Qualification Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎓",
                title: "Certified Professionals",
                description: "All instructors hold recognized certifications"
              },
              {
                icon: "🏆",
                title: "Award Winners",
                description: "National and international competition winners"
              },
              {
                icon: "🌍",
                title: "International Exposure",
                description: "Trained and performed globally"
              },
              {
                icon: "👨‍🏫",
                title: "Teaching Experience",
                description: "Minimum 5 years teaching experience"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/instructor-list"
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-8 text-center hover:from-pink-600 hover:to-rose-600 transition duration-300"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold mb-4">Meet All Instructors</h3>
            <p>Get to know our complete team of professional instructors</p>
          </Link>

          <Link
            to="/qualification"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 text-center hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-2xl font-bold mb-4">View Qualifications</h3>
            <p>Explore detailed certifications and achievements</p>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Learn from the Best?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our classes and experience professional training</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/in-studio-classes"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
            >
              View Class Schedule
            </Link>
            <Link
              to="/about-us"
              className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorQualification;