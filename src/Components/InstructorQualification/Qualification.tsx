import React from 'react';

const Qualification: React.FC = () => {
  const certificationCategories = [
    {
      category: "Dance & Choreography Certifications",
      certifications: [
        {
          name: "Professional Choreographer Certification",
          issuing: "BeatToBeat Studio & Industry Partners",
          year: "2010-Present",
          description: "Advanced choreography techniques and teaching methodologies"
        },
        {
          name: "International Dance Instructor",
          issuing: "Global Dance Federation",
          year: "2018",
          description: "International standards for dance education"
        },
        {
          name: "Traditional Dance Preservation",
          issuing: "Ministry of Culture, India",
          year: "2015",
          description: "Certification in preserving and teaching traditional Indian dance forms"
        }
      ]
    },
    {
      category: "Yoga & Fitness Certifications",
      certifications: [
        {
          name: "RYT 200 Yoga Teacher",
          issuing: "Yoga Alliance International",
          year: "2020",
          description: "200-hour registered yoga teacher certification"
        },
        {
          name: "Zumba Instructor",
          issuing: "Zumba Fitness LLC",
          year: "2019",
          description: "Certified Zumba instructor for fitness dance programs"
        },
        {
          name: "Fitness Trainer Certification",
          issuing: "International Sports Sciences Association",
          year: "2021",
          description: "Professional fitness training and conditioning"
        }
      ]
    },
    {
      category: "Specialized Training & Workshops",
      certifications: [
        {
          name: "HipHop Master Training",
          issuing: "The Kings Dance Academy, Mumbai",
          year: "2017",
          description: "Advanced HipHop and street dance techniques"
        },
        {
          name: "Contemporary Dance Intensive",
          issuing: "Terence Lewis Academy",
          year: "2019",
          description: "Professional contemporary dance training program"
        },
        {
          name: "Child Development in Dance",
          issuing: "National Institute of Dance Education",
          year: "2020",
          description: "Specialized training for teaching children"
        }
      ]
    }
  ];

  const achievementLevels = [
    {
      level: "International Recognition",
      achievements: [
        "G20 Summit Program Designer & Choreographer (2023)",
        "Cultural Ambassador to Japan (2024)",
        "International Dance Workshop Facilitator",
        "Global Dance Collaboration Projects"
      ]
    },
    {
      level: "National Achievements",
      achievements: [
        "Choreographer for Hon. President of India (2023)",
        "National Dance Competition Winners",
        "TV Show Choreography Credits",
        "University Level Gold Medals"
      ]
    },
    {
      level: "Industry Partnerships",
      achievements: [
        "Official Choreographer - Shivaji University",
        "Corporate Training Partners (GAIL, Bosch, etc.)",
        "School Program Collaborations",
        "Government Project Executions"
      ]
    }
  ];

  const professionalDevelopment = [
    {
      area: "Continuous Education",
      activities: [
        "Annual skill upgrade workshops",
        "International dance conventions",
        "Teaching methodology updates",
        "New dance style incorporations"
      ]
    },
    {
      area: "Industry Participation",
      activities: [
        "Dance competition judging",
        "Workshop facilitation",
        "Cultural exchange programs",
        "Dance education conferences"
      ]
    },
    {
      area: "Student Development",
      activities: [
        "Personalized training programs",
        "Performance opportunities",
        "Competition preparation",
        "Career guidance in dance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Qualifications</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive certifications, achievements, and professional development of our instructor team
          </p>
        </div>

        {/* Certification Categories */}
        {certificationCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.certifications.map((cert, certIndex) => (
                <div key={certIndex} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">📜</div>
                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-sm font-semibold">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                  <p className="text-pink-600 font-semibold text-sm mb-3">Issued by: {cert.issuing}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Achievement Levels */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🏆 Achievement Levels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievementLevels.map((level, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">
                  {index === 0 ? "🌍" : index === 1 ? "🇮🇳" : "🤝"}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{level.level}</h3>
                <ul className="space-y-2 text-left">
                  {level.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-yellow-500 mr-2 mt-1">★</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📈 Professional Development</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {professionalDevelopment.map((development, index) => (
              <div key={index} className="bg-pink-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{development.area}</h3>
                <ul className="space-y-3">
                  {development.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2 mt-1">🔄</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">✅ Quality Assurance</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Regular performance evaluations
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Student feedback implementation
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Continuous skill assessment
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Teaching methodology updates
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">🎯 Teaching Standards</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Individual attention guarantee
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Progress tracking systems
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Safe learning environment
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Age-appropriate teaching methods
              </li>
            </ul>
          </div>
        </div>

        {/* Verification & Accreditation */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🔍 Verification & Accreditation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Background Verified",
                description: "All instructors undergo thorough background checks",
                icon: "🔒"
              },
              {
                title: "Certification Validated",
                description: "Professional certifications verified and updated",
                icon: "📋"
              },
              {
                title: "Experience Certified",
                description: "Teaching experience documented and verified",
                icon: "⏱️"
              },
              {
                title: "Student Reviewed",
                description: "Regular student feedback and reviews",
                icon: "⭐"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Verification */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">📞 Verification & References</h2>
          <p className="text-xl mb-6">Need to verify our instructors' qualifications? Contact us for official documentation and references.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition duration-300">
              Request Documentation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300">
              Contact HR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;