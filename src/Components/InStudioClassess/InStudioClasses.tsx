import React from 'react';
import { Link } from 'react-router-dom';

const InStudioClasses: React.FC = () => {
  const classCategories = [
    {
      title: "Yoga & Wellness",
      description: "Find inner peace and physical strength",
      classes: 3,
      icon: "🧘",
      color: "from-green-400 to-blue-500",
      path: "/class-schedule"
    },
    {
      title: "Dance Fitness",
      description: "Energetic workouts through dance",
      classes: 4,
      icon: "💃",
      color: "from-pink-400 to-purple-500",
      path: "/class-schedule"
    },
    {
      title: "Dance Styles",
      description: "Learn various dance forms",
      classes: 5,
      icon: "⭐",
      color: "from-purple-400 to-indigo-500",
      path: "/class-schedule"
    },
    {
      title: "Professional Training",
      description: "Advanced programs for serious dancers",
      classes: 3,
      icon: "🏆",
      color: "from-orange-400 to-red-500",
      path: "/class-schedule"
    }
  ];

  const benefits = [
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of experience"
    },
    {
      icon: "🏢",
      title: "Modern Studio",
      description: "State-of-the-art facilities with proper equipment"
    },
    {
      icon: "🕒",
      title: "Flexible Timing",
      description: "Multiple batches throughout the day to suit your schedule"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Competitive rates with various package options"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">In-Studio Classes</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our diverse range of classes conducted by expert instructors in our well-equipped studio
          </p>
        </div>

        {/* Class Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {classCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <div className={`h-3 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {category.classes} Classes
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🌟 Why Choose Our Studio Classes?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "15+", label: "Weekly Classes" },
            { number: "8", label: "Expert Instructors" },
            { number: "500+", label: "Active Students" },
            { number: "10+", label: "Dance Styles" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/class-schedule"
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-8 text-center hover:from-pink-600 hover:to-rose-600 transition duration-300"
          >
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-2xl font-bold mb-4">Class Schedule</h3>
            <p>View complete timetable and batch timings</p>
          </Link>

          <Link
            to="/regular-batch-plans"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 text-center hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold mb-4">Batch Plans</h3>
            <p>Explore our regular batch programs</p>
          </Link>

          <Link
            to="/class-package"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 text-center hover:from-blue-600 hover:to-purple-600 transition duration-300"
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-4">Packages</h3>
            <p>Special offers and package deals</p>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Dance Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our community and experience the joy of dance</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/class-schedule"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
            >
              View Schedule
            </Link>
            <Link
              to="/about-us"
              className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition duration-300"
            >
              Free Trial Class
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InStudioClasses;