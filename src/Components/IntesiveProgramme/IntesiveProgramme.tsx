import React from 'react';
import { Link } from 'react-router-dom';

const IntensiveProgramme: React.FC = () => {
  const programs = [
    {
      level: "Beginner Intensive",
      duration: "4 Weeks",
      price: "₹5,000",
      features: [
        "Foundation techniques",
        "Basic choreography",
        "Rhythm training",
        "Body conditioning",
        "Group performances"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      level: "Intermediate Intensive",
      duration: "5 Weeks",
      price: "₹6,500",
      features: [
        "Advanced techniques",
        "Complex choreography",
        "Musicality development",
        "Style variations",
        "Solo performances"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      level: "Advanced Intensive",
      duration: "6 Weeks",
      price: "₹8,000",
      features: [
        "Master level techniques",
        "Performance preparation",
        "Choreography creation",
        "Stage presence",
        "Professional portfolio"
      ],
      color: "from-red-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Intensive Programme</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerated training programs designed to transform your dancing skills in short, focused periods
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <div className={`h-3 bg-gradient-to-r ${program.color}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.level}</h3>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-semibold">{program.duration}</span>
                  <span className="text-2xl font-bold text-pink-600">{program.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Focused Training</h3>
              <p className="text-gray-600">Concentrated sessions targeting specific skill development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Regular assessments and personalized feedback</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Opportunities</h3>
              <p className="text-gray-600">Showcase your skills in studio events and competitions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certificate</h3>
              <p className="text-gray-600">Receive completion certificate for each intensive program</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/upcoming-event"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300"
          >
            View Upcoming Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntensiveProgramme;