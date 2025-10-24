import React from 'react';

const InstructorList: React.FC = () => {
  const instructors = [
    {
      id: 1,
      name: "Omcar Snehal Bhaskar Rokade",
      role: "Founder & Creative Head",
      experience: "16+ years",
      specialization: ["Bollywood", "Contemporary", "Folk", "Semi-Classical"],
      qualifications: [
        "Professional Choreographer & Performer",
        "16+ Years Experience in Dance Education",
        "G20 Summit Program Designer",
        "President Event Choreographer"
      ],
      achievements: [
        "Choreographer for Hon. President of India",
        "G20 Summit Program Designer",
        "Cultural Ambassador to Japan",
        "TV Show Choreographer"
      ],
      image: "👑",
      contact: "+91 96372 00333"
    },
    {
      id: 2,
      name: "Nikhil Patil",
      role: "Senior HipHop Instructor",
      experience: "8+ years",
      specialization: ["HipHop", "Street Styles", "Urban Dance", "Breaking"],
      qualifications: [
        "Master in HipHop - The Kings Dance Academy, Mumbai",
        "Certified Street Dance Instructor",
        "International Workshop Facilitator"
      ],
      achievements: [
        "National HipHop Competition Winner",
        "International Dance Battle Finalist",
        "Mumbai Dance Championship Judge"
      ],
      image: "💥",
      contact: "+91 96041 11001"
    },
    {
      id: 3,
      name: "Baban Sir",
      role: "Sangeet & Event Specialist",
      experience: "10+ years",
      specialization: ["Wedding Choreography", "Sangeet", "Bollywood", "Group Dance"],
      qualifications: [
        "B.Com Graduate",
        "Hotel Management Professional",
        "Certified Event Choreographer"
      ],
      achievements: [
        "500+ Wedding Choreographies",
        "Corporate Event Specialist",
        "Large Group Management Expert"
      ],
      image: "🎭",
      contact: "+91 95956 06400"
    },
    {
      id: 4,
      name: "Arpita Patil",
      role: "Yoga & Wellness Instructor",
      experience: "6+ years",
      specialization: ["Yoga", "Meditation", "Flexibility Training", "Wellness"],
      qualifications: [
        "Certified Yoga Instructor (RYT 200)",
        "Diploma in Yoga Therapy",
        "Meditation Guide Certification"
      ],
      achievements: [
        "Corporate Wellness Program Designer",
        "Stress Management Workshops",
        "Yoga for Dancers Specialist"
      ],
      image: "🧘",
      contact: "+91 98220 12345"
    },
    {
      id: 5,
      name: "Kanak",
      role: "Senior Dance Instructor",
      experience: "12+ years",
      specialization: ["Classical", "Bollywood", "Contemporary", "Kids Dance"],
      qualifications: [
        "Final Year Physiotherapy Student",
        "Certified Dance Instructor",
        "Child Development Specialist"
      ],
      achievements: [
        "12 Years with BeatToBeat Studio",
        "Kids Program Developer",
        "Annual Day Choreography Expert"
      ],
      image: "🌟",
      contact: "+91 98810 23456"
    },
    {
      id: 6,
      name: "Santosh Rajput",
      role: "Cultural Instructor & Coordinator",
      experience: "8+ years",
      specialization: ["Folk Dance", "Traditional", "School Programs", "Cultural Events"],
      qualifications: [
        "Professional Dance Instructor Certification",
        "Cultural Program Coordinator",
        "School Event Specialist"
      ],
      achievements: [
        "Cultural Instructor at Multiple Schools",
        "Traditional Dance Preservationist",
        "Inter-School Competition Judge"
      ],
      image: "🎪",
      contact: "+91 97654 32109"
    },
    {
      id: 7,
      name: "Prajakta Phadke",
      role: "Administration Head",
      experience: "4+ years",
      specialization: ["Studio Management", "Student Coordination", "Event Planning"],
      qualifications: [
        "MBA Graduate",
        "Master of Journalism",
        "Certified Office Management"
      ],
      achievements: [
        "4 Years Studio Administration",
        "Student Management System Developer",
        "Event Coordination Expert"
      ],
      image: "📊",
      contact: "+91 98765 43210"
    },
    {
      id: 8,
      name: "Rutuja Patil",
      role: "Studio Coordinator & Artist",
      experience: "1.5+ years",
      specialization: ["Event Management", "Art Coordination", "Student Support"],
      qualifications: [
        "MBA in Finance",
        "Event Management Certification",
        "Professional Artist"
      ],
      achievements: [
        "Customized Gift & Art Creator",
        "Event Packaging Specialist",
        "Student Support Coordinator"
      ],
      image: "🎨",
      contact: "+91 97654 12345"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Instructor Team</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate professionals who make BeatToBeat Studio a premier dance education center
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              {/* Instructor Header */}
              <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex flex-col items-center justify-center text-white p-6">
                <div className="text-6xl mb-4">{instructor.image}</div>
                <h3 className="text-xl font-bold text-center">{instructor.name}</h3>
                <p className="text-pink-100 text-center">{instructor.role}</p>
              </div>

              <div className="p-6">
                {/* Basic Info */}
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {instructor.experience}
                  </span>
                  <span className="text-gray-500 text-sm">📞 {instructor.contact}</span>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialization.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Qualifications:</h4>
                  <ul className="space-y-1">
                    {instructor.qualifications.slice(0, 2).map((qual, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-pink-500 mr-2 mt-1">✓</span>
                        {qual}
                      </li>
                    ))}
                    {instructor.qualifications.length > 2 && (
                      <li className="text-sm text-pink-600 font-semibold">
                        +{instructor.qualifications.length - 2} more qualifications
                      </li>
                    )}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {instructor.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-yellow-500 mr-2 mt-1">🏆</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mt-6">
                  <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-600 transition duration-200">
                    View Profile
                  </button>
                  <button className="flex-1 border border-pink-500 text-pink-500 py-2 rounded-lg text-sm font-semibold hover:bg-pink-50 transition duration-200">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Statistics */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📊 Instructor Team Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "8", label: "Total Instructors" },
              { number: "100+", label: "Combined Experience Years" },
              { number: "15+", label: "Professional Certifications" },
              { number: "10+", label: "Dance Styles Covered" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💼 Want to Join Our Team?</h2>
          <p className="text-xl mb-6">We're always looking for passionate dance professionals</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition duration-300">
              Send Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300">
              Schedule Audition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorList;