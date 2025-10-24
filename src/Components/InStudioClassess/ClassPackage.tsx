import React, { useState } from 'react';

const ClassPackage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const packages = [
    {
      name: "Starter Pack",
      duration: "1 Month",
      price: "₹1,200",
      originalPrice: "₹1,500",
      discount: "20% OFF",
      classes: "8 Classes",
      features: [
        "Any 2 classes per week",
        "Flexible timing",
        "Basic instructor support",
        "Studio access during class"
      ],
      bestFor: "Beginners trying out",
      popular: false,
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Pro Fitness",
      duration: "3 Months",
      price: "₹3,000",
      originalPrice: "₹3,600",
      discount: "17% OFF",
      classes: "48 Classes",
      features: [
        "Unlimited classes",
        "All batch access",
        "Priority instructor support",
        "Progress tracking",
        "Free workshop access"
      ],
      bestFor: "Regular practitioners",
      popular: true,
      color: "from-pink-400 to-purple-500"
    },
    {
      name: "Elite Annual",
      duration: "12 Months",
      price: "₹10,000",
      originalPrice: "₹14,400",
      discount: "30% OFF",
      classes: "200+ Classes",
      features: [
        "Unlimited all classes",
        "24/7 studio practice access",
        "Personalized training plan",
        "Performance opportunities",
        "Free guest passes",
        "Annual progress report"
      ],
      bestFor: "Dedicated enthusiasts",
      popular: false,
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const specialPackages = [
    {
      name: "Family Package",
      description: "For 2 family members",
      discount: "15% OFF",
      price: "₹5,100/3 months",
      original: "₹6,000",
      features: ["Any two members", "Mixed batch access", "Family discount"]
    },
    {
      name: "Corporate Package",
      description: "For company employees",
      discount: "20% OFF",
      price: "Custom Pricing",
      original: "Group rates",
      features: ["Team building", "Wellness programs", "Flexible scheduling"]
    },
    {
      name: "Student Special",
      description: "For college students",
      discount: "25% OFF",
      price: "₹2,250/3 months",
      original: "₹3,000",
      features: ["Valid ID required", "Special student batches", "Exam flexibility"]
    }
  ];

  const addOnServices = [
    {
      service: "Personal Training",
      price: "₹800/session",
      description: "One-on-one personalized training"
    },
    {
      service: "Diet Consultation",
      price: "₹500/session",
      description: "Nutritionist guidance for dancers"
    },
    {
      service: "Video Recording",
      price: "₹1,000/session",
      description: "Professional dance video recording"
    },
    {
      service: "Choreography",
      price: "₹2,000/routine",
      description: "Custom choreography for events"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Class Packages & Offers</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable packages and special offers to suit every need and budget
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ${
                pkg.popular ? 'ring-4 ring-pink-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-pink-500 text-white text-center py-2 font-semibold">
                  ⭐ MOST POPULAR
                </div>
              )}
              <div className={`h-3 bg-gradient-to-r ${pkg.color}`}></div>
              <div className="p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500 line-through mb-2">{pkg.originalPrice}</div>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {pkg.discount}
                  </div>
                </div>

                {/* Duration & Classes */}
                <div className="text-center mb-6">
                  <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                    {pkg.duration}
                  </div>
                  <div className="text-gray-600 font-semibold">{pkg.classes}</div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Best For */}
                <div className="mb-6 text-center">
                  <p className="text-sm text-gray-500">Best for: <span className="font-semibold text-gray-700">{pkg.bestFor}</span></p>
                </div>

                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
                    pkg.popular
                      ? 'bg-pink-500 text-white hover:bg-pink-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPackage === pkg.name ? 'Selected ✓' : 'Select Package'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Packages */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🎁 Special Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialPackages.map((special, index) => (
              <div key={index} className="border-2 border-pink-200 rounded-2xl p-6 text-center hover:border-pink-400 transition duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{special.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{special.description}</p>
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {special.discount}
                </div>
                <div className="text-lg font-bold text-pink-600 mb-1">{special.price}</div>
                <div className="text-sm text-gray-500 line-through mb-4">{special.original}</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {special.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-200">
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add-on Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🛠️ Add-on Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl border border-pink-200">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-800 mb-2">{service.service}</h3>
                <div className="text-pink-600 font-bold mb-2">{service.price}</div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💳 Payment Options</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                Cash Payment at Studio
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                GPay: 9637200333 (Omcar Rokade)
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                Bank Transfer Available
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                EMI Options Available
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Terms & Conditions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Packages are non-transferable</li>
              <li>• 50% refund if cancelled within 7 days</li>
              <li>• Freeze option available (medical reasons)</li>
              <li>• Valid for 3 months from purchase date</li>
              <li>• Group discounts available for 3+ people</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Choose your perfect package and begin your dance journey today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition duration-300">
              Book Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300">
              Contact for Custom Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPackage;