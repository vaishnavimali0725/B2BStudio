import React from 'react';

const Details: React.FC = () => {
  const studioFeatures = [
    {
      category: "Studio A - Main Hall",
      features: [
        "500 sq.ft spacious dance floor",
        "Full wall mirrors",
        "Professional sound system",
        "Air conditioning",
        "Changing rooms",
        "Waiting area",
        "Capacity: 50 people"
      ]
    },
    {
      category: "Studio B - Practice Room",
      features: [
        "300 sq.ft practice area",
        "Mirror walls",
        "Basic sound system",
        "Air conditioning",
        "Storage space",
        "Capacity: 25 people"
      ]
    },
    {
      category: "Studio C - Premium Suite",
      features: [
        "400 sq.ft premium space",
        "Full mirror walls",
        "Professional lighting",
        "High-end sound system",
        "Private changing area",
        "Video recording setup",
        "Capacity: 30 people"
      ]
    }
  ];

  const amenities = [
    { name: "Parking Space", available: true, icon: "🅿️" },
    { name: "WiFi", available: true, icon: "📶" },
    { name: "Drinking Water", available: true, icon: "💧" },
    { name: "Restrooms", available: true, icon: "🚻" },
    { name: "First Aid Kit", available: true, icon: "🩹" },
    { name: "Security", available: true, icon: "🔒" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Studio Details</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our state-of-the-art studio facilities designed for professional dance training and performances
          </p>
        </div>

        {/* Studio Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {studioFeatures.map((studio, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{studio.category}</h3>
                <ul className="space-y-3">
                  {studio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-pink-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold">
                    Book Now
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🏢 Studio Amenities</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-2">{amenity.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{amenity.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  amenity.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {amenity.available ? 'Available' : 'Not Available'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">🎵 Audio Equipment</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">🔊</span>
                Professional Bluetooth Speakers
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">🎤</span>
                Wireless Microphones
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">📱</span>
                Aux & Bluetooth Connectivity
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">🎚️</span>
                Sound Mixer Console
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Studio Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">🪞</span>
                Floor-to-Ceiling Mirrors
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">💡</span>
                Adjustable LED Lighting
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">❄️</span>
                Central Air Conditioning
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-3">📹</span>
                Video Recording Setup
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Measures */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">🛡️ Safety & Hygiene</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🧴", text: "Regular Sanitization" },
              { icon: "🌡️", text: "Temperature Checks" },
              { icon: "😷", text: "Mask Guidelines" },
              { icon: "🧽", text: "Daily Cleaning" }
            ].map((item, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;