import React from 'react';

const KeyAchievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "Choreographer for Hon. President of India",
      description: "Civic Felicitation of Hon. President of India, Smt. Droupadi Murmu, at Raj Bhavan, Mumbai",
      year: "2023",
      category: "Government",
      icon: "🇮🇳"
    },
    {
      id: 2,
      title: "G20 Summit Program Designer",
      description: "Program Designer & Choreographer for G20 Summit India – Mumbai & Pune",
      year: "2023",
      category: "International",
      icon: "🌍"
    },
    {
      id: 3,
      title: "Cultural Ambassador in Japan",
      description: "Represented Indian culture in Kobe, Japan, under the Central and State Governments",
      year: "2024",
      category: "International",
      icon: "🎌"
    },
    {
      id: 4,
      title: "University Choreographer",
      description: "Official Choreographer – Shivaji University, Kolhapur (Inter-University Competitions). Two-time Gold Medalist",
      year: "2022-2023",
      category: "Education",
      icon: "🏫"
    },
    {
      id: 5,
      title: "WAVES Summit Performance",
      description: "Choreographed and performed at the WAVES Summit, Jio World Centre, Mumbai",
      year: "2023",
      category: "Corporate",
      icon: "💼"
    },
    {
      id: 6,
      title: "TV Channel Collaborations",
      description: "Choreography & Assistant Choreography for popular TV channels",
      year: "2022-2024",
      category: "Media",
      icon: "📺"
    }
  ];

  const corporateClients = [
    "GAIL (India) Pvt. Ltd.",
    "Ratnagiri Gas & Power Pvt. Ltd. (RGPPL)",
    "Sarvatra Technologies, Pune",
    "Bosch Pvt. Ltd., Pune"
  ];

  const institutionalClients = [
    "MIT VGS, Sangli",
    "Podar International School & College, Sangli",
    "Takshila School, Sangli",
    "A.B. Patil School, Sangli"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Key Achievements</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Celebrating 14 years of excellence in dance education, performance, and cultural representation
          </p>
        </div>

        {/* Main Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  {achievement.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Clients */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Corporate Associations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateClients.map((client, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="font-semibold text-gray-800">{client}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Clients */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Institutional Associations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalClients.map((client, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="text-3xl mb-4">🏫</div>
                <h3 className="font-semibold text-gray-800">{client}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { year: "2010", event: "Studio Founded" },
              { year: "2015", event: "First International Workshop" },
              { year: "2020", event: "5000+ Students Milestone" },
              { year: "2024", event: "G20 & Presidential Events" }
            ].map((milestone, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl font-bold mb-2">{milestone.year}</div>
                <div className="text-sm">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyAchievements;