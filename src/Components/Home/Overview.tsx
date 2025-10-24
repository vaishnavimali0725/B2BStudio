import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About BeatToBeat Studio</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transforming lives through dance since 2010 - A journey of passion, discipline, and artistic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              BeatToBeat Studio is a premier dance and performing arts academy based in Sangli, Maharashtra, 
              founded with a vision to create a vibrant space for creativity, discipline, and cultural excellence.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With 14 incredible years of dedication to dance education and performance, BeatToBeat Studio has 
              grown into a recognized hub for artistic expression, training, and innovation in the field of 
              dance and entertainment.
            </p>
            <div className="bg-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
              <p className="text-gray-800 font-semibold italic">
                "We specialize in training students across various age groups and dance styles—ranging from 
                Bollywood, Classical, Folk, Semi-Classical, Contemporary, Hip-Hop, Zumba, and more."
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "💃", title: "Dance Styles", value: "10+" },
                { icon: "👥", title: "Students Trained", value: "5000+" },
                { icon: "🏆", title: "Awards", value: "50+" },
                { icon: "🌍", title: "Countries", value: "3+" },
                { icon: "📺", title: "TV Shows", value: "5+" },
                { icon: "🏢", title: "Corporate Clients", value: "10+" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-lg font-bold text-gray-800">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Core Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Professional dance training for all age groups",
              "Corporate & institutional choreography",
              "National and International workshops",
              "Government collaborations & cultural representations",
              "Large-scale event choreography & concept designing",
              "Dance-based fitness formats (Zumba, Strong Nation, etc.)",
              "School & college event choreography",
              "Cultural Events with Corporate Companies",
              "Wedding & Sangeet Choreography"
            ].map((expertise, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-pink-100 text-pink-600 p-2 rounded-lg mr-4 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-medium">{expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "For Students",
              icon: "🎓",
              features: ["Age-specific training", "Competition preparation", "Certificate programs", "Performance opportunities"]
            },
            {
              title: "For Corporates",
              icon: "💼",
              features: ["Team building workshops", "Annual event choreography", "Wellness programs", "Leadership through dance"]
            },
            {
              title: "For Institutions",
              icon: "🏫",
              features: ["Annual day events", "Cultural programs", "Teacher training", "Curriculum development"]
            }
          ].map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{program.title}</h3>
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;