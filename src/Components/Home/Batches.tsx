import React from 'react';

const Batches = () => {
  const fitnessBatches = [
    {
      category: "🌿 YOGA BATCHES (Unisex)",
      batches: [
        { time: "6:00 AM – 7:00 AM", fee: "₹1200 per month", strength: 5 },
        { time: "8:00 AM – 9:00 AM", fee: "₹1200 per month", strength: 5 }
      ]
    },
    {
      category: "💃 ZUMBA BATCHES",
      batches: [
        { time: "7:00 AM – 8:00 AM", fee: "₹1500 per month", strength: 6 },
        { time: "6:00 PM – 7:00 PM", fee: "₹1500 per month", strength: 30 }
      ]
    }
  ];

  const danceBatches = [
    {
      category: "💃 LADIES DANCE BATCHES",
      batches: [
        { time: "10:00 AM – 11:00 AM", fee: "₹1200 per month", strength: 4 },
        { time: "4:00 PM – 5:00 PM", fee: "₹1200 per month", strength: 6 }
      ]
    },
    {
      category: "👶 FOUNDATION KIDS BATCH",
      description: "Below 10 years kids",
      batches: [
        { time: "5:00 PM – 6:00 PM", fee: "₹3000 for 3 months", strength: 45 }
      ]
    },
    {
      category: "⭐ INTERMEDIATE/ADVANCE BATCH",
      description: "Above 10 years & advance kids",
      batches: [
        { time: "7:00 PM – 8:00 PM", fee: "₹3900 for 3 months", strength: 51 }
      ]
    },
    {
      category: "🏆 PROFESSIONAL BATCH",
      description: "Advance kids",
      batches: [
        { time: "8:00 PM – 9:00 PM", fee: "₹4500 for 3 months", strength: 51 }
      ]
    }
  ];

  const contactInfo = {
    studio: "BeatToBeat Studio, Sangli",
    phone: ["9604111001", "9595606400"],
    gpay: "9637200333 (Omcar Rokade)"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            BEATTOBEAT STUDIO – FITNESS BATCHES 🕺
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Monday to Friday • Start your day with energy and balance!
          </p>
          <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Fitness Batches Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Fitness Batches
              </h2>
            </div>
            <div className="p-6">
              {fitnessBatches.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2">{section.category.split(' ')[0]}</span>
                    <span>{section.category.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  <div className="space-y-4">
                    {section.batches.map((batch, batchIndex) => (
                      <div key={batchIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-gray-700">{batch.time}</span>
                          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                            {batch.strength} students
                          </span>
                        </div>
                        <div className="text-green-600 font-medium">{batch.fee}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dance Batches Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Dance Batches
              </h2>
            </div>
            <div className="p-6">
              {danceBatches.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="mr-2">{section.category.split(' ')[0]}</span>
                    <span>{section.category.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  {section.description && (
                    <p className="text-gray-600 text-sm mb-3">{section.description}</p>
                  )}
                  <div className="space-y-4">
                    {section.batches.map((batch, batchIndex) => (
                      <div key={batchIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-gray-700">{batch.time}</span>
                          <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                            {batch.strength} students
                          </span>
                        </div>
                        <div className="text-purple-600 font-medium">{batch.fee}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Registration Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6">
            <h2 className="text-2xl font-bold text-white text-center">
              Registration & Contact
            </h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              
              {/* Location */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">{contactInfo.studio}</p>
              </div>

              {/* Contact Numbers */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
                {contactInfo.phone.map((number, index) => (
                  <p key={index} className="text-gray-600">{number}</p>
                ))}
              </div>

              {/* Payment */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">GPay</h3>
                <p className="text-gray-600">{contactInfo.gpay}</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-medium mb-4">
                Join our vibrant community of fitness and dance enthusiasts!
              </p>
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            All batches run Monday to Friday • Professional training with experienced instructors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Batches;