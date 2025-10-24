import React from 'react';

const StudioRentalRates: React.FC = () => {
  const rentalRates = [
    {
      studio: "Studio A - Main Hall",
      hourlyRate: "₹500",
      dailyRate: "₹3,500",
      weeklyRate: "₹20,000",
      monthlyRate: "₹70,000",
      features: ["Best for large groups", "Professional events", "Workshops"]
    },
    {
      studio: "Studio B - Practice Room",
      hourlyRate: "₹300",
      dailyRate: "₹2,000",
      weeklyRate: "₹12,000",
      monthlyRate: "₹40,000",
      features: ["Ideal for practice", "Small groups", "Personal training"]
    },
    {
      studio: "Studio C - Premium Suite",
      hourlyRate: "₹700",
      dailyRate: "₹4,500",
      weeklyRate: "₹25,000",
      monthlyRate: "₹85,000",
      features: ["Professional shoots", "Recordings", "Premium events"]
    }
  ];

  const packageDeals = [
    {
      name: "Starter Package",
      hours: "10 hours",
      price: "₹4,500",
      original: "₹5,000",
      discount: "10% OFF",
      features: ["Flexible timing", "Any studio", "1 month validity"]
    },
    {
      name: "Professional Package",
      hours: "30 hours",
      price: "₹12,000",
      original: "₹15,000",
      discount: "20% OFF",
      features: ["All studios access", "Priority booking", "3 months validity"]
    },
    {
      name: "Enterprise Package",
      hours: "100 hours",
      price: "₹35,000",
      original: "₹50,000",
      discount: "30% OFF",
      features: ["24/7 access", "All amenities", "6 months validity"]
    }
  ];

  const additionalServices = [
    {
      service: "Sound Engineer",
      rate: "₹500/hour",
      description: "Professional audio setup and management"
    },
    {
      service: "Video Recording",
      rate: "₹1,000/hour",
      description: "HD video recording with basic editing"
    },
    {
      service: "Lighting Technician",
      rate: "₹400/hour",
      description: "Professional lighting setup"
    },
    {
      service: "Choreographer",
      rate: "₹800/hour",
      description: "Professional choreography services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Studio Rental Rates</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable and flexible rental options for all your dance and performance needs
          </p>
        </div>

        {/* Studio Rental Rates */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rentalRates.map((studio, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{studio.studio}</h3>
                
                {/* Pricing */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Hourly</span>
                    <span className="font-bold text-pink-600">{studio.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Daily (8 hrs)</span>
                    <span className="font-bold text-pink-600">{studio.dailyRate}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Weekly</span>
                    <span className="font-bold text-pink-600">{studio.weeklyRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly</span>
                    <span className="font-bold text-pink-600">{studio.monthlyRate}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {studio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-pink-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Package Deals */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">💎 Package Deals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packageDeals.map((pkg, index) => (
              <div key={index} className="border-2 border-pink-200 rounded-2xl p-6 hover:border-pink-400 transition duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500 line-through">{pkg.original}</div>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mt-2">
                    {pkg.discount}
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.hours}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-200">
                  Get Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🛠️ Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl border border-pink-200">
                <div className="text-3xl mb-4">🎵</div>
                <h3 className="font-semibold text-gray-800 mb-2">{service.service}</h3>
                <div className="text-pink-600 font-bold mb-2">{service.rate}</div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">📋 Rental Terms & Conditions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">✅ Included in Rental</h3>
              <ul className="space-y-2">
                <li>• Basic studio equipment</li>
                <li>• Air conditioning</li>
                <li>• Changing rooms access</li>
                <li>• Drinking water</li>
                <li>• WiFi connectivity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">📝 Important Notes</h3>
              <ul className="space-y-2">
                <li>• 50% advance payment required</li>
                <li>• Cancellation 24 hours prior</li>
                <li>• Damage deposit: ₹2,000</li>
                <li>• Overtime charges apply</li>
                <li>• Equipment rental separate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioRentalRates;