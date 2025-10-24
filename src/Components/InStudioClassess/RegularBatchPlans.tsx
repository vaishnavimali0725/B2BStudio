import React from 'react';

const RegularBatchPlans: React.FC = () => {
  const batchPlans = [
    {
      name: "Morning Wellness Batch",
      timing: "6:00 AM - 9:00 AM",
      classes: [
        { name: "Yoga (6:00-7:00 AM)", type: "Wellness" },
        { name: "Zumba (7:00-8:00 AM)", type: "Fitness" },
        { name: "Advanced Yoga (8:00-9:00 AM)", type: "Wellness" }
      ],
      price: "₹2,500/month",
      originalPrice: "₹3,000",
      discount: "17% OFF",
      benefits: ["Fresh start to your day", "Energy boost", "Flexible attendance"],
      bestFor: "Early risers, Working professionals",
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Daytime Dance Batch",
      timing: "10:00 AM - 5:00 PM",
      classes: [
        { name: "Ladies Dance (10:00-11:00 AM)", type: "Dance" },
        { name: "Ladies Dance (4:00-5:00 PM)", type: "Dance" }
      ],
      price: "₹1,200/month",
      originalPrice: "₹1,500",
      discount: "20% OFF",
      benefits: ["Women-only batches", "Convenient timing", "Social atmosphere"],
      bestFor: "Homemakers, College students",
      color: "from-pink-400 to-purple-500"
    },
    {
      name: "Evening Fitness Batch",
      timing: "5:00 PM - 7:00 PM",
      classes: [
        { name: "Kids Foundation (5:00-6:00 PM)", type: "Dance" },
        { name: "Zumba (6:00-7:00 PM)", type: "Fitness" }
      ],
      price: "₹3,000/3 months",
      originalPrice: "₹3,600",
      discount: "17% OFF",
      benefits: ["After-school timing", "Family-friendly", "Stress relief"],
      bestFor: "Kids, Working professionals",
      color: "from-purple-400 to-indigo-500"
    },
    {
      name: "Professional Training Batch",
      timing: "7:00 PM - 9:00 PM",
      classes: [
        { name: "Intermediate/Advanced (7:00-8:00 PM)", type: "Dance" },
        { name: "Professional Batch (8:00-9:00 PM)", type: "Dance" }
      ],
      price: "₹4,200/3 months",
      originalPrice: "₹4,800",
      discount: "13% OFF",
      benefits: ["Advanced techniques", "Performance opportunities", "Career guidance"],
      bestFor: "Serious dancers, Aspiring professionals",
      color: "from-orange-400 to-red-500"
    }
  ];

  const additionalBenefits = [
    {
      icon: "🔄",
      title: "Flexible Transfer",
      description: "Transfer between batches based on availability"
    },
    {
      icon: "📝",
      title: "Free Trial",
      description: "One free trial class before enrollment"
    },
    {
      icon: "👥",
      title: "Group Discount",
      description: "Special rates for group enrollments"
    },
    {
      icon: "🎯",
      title: "Progress Tracking",
      description: "Regular assessments and feedback"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Regular Batch Plans</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured batch programs designed for different schedules and fitness goals
          </p>
        </div>

        {/* Batch Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {batchPlans.map((batch, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className={`h-3 bg-gradient-to-r ${batch.color}`}></div>
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{batch.name}</h3>
                    <p className="text-gray-600 font-semibold">{batch.timing}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-600">{batch.price}</div>
                    <div className="text-sm text-gray-500 line-through">{batch.originalPrice}</div>
                    <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {batch.discount}
                    </div>
                  </div>
                </div>

                {/* Classes List */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Includes Classes:</h4>
                  <div className="space-y-2">
                    {batch.classes.map((cls, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-pink-500 mr-2">✓</span>
                        {cls.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {batch.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Ideal For:</h4>
                  <p className="text-sm text-gray-600">{batch.bestFor}</p>
                </div>

                <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-200">
                  Enroll in This Batch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🌟 Additional Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Batch Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📊 Batch Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-pink-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Batch Plan</th>
                  <th className="px-4 py-3 text-left">Timing</th>
                  <th className="px-4 py-3 text-left">Classes/Week</th>
                  <th className="px-4 py-3 text-left">Monthly Price</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {batchPlans.map((batch, index) => (
                  <tr key={index} className="hover:bg-pink-50 transition duration-200">
                    <td className="px-4 py-3 font-semibold text-gray-800">{batch.name}</td>
                    <td className="px-4 py-3 text-gray-600">{batch.timing}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {batch.classes.length * 5} classes
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-pink-600">{batch.price}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{batch.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Batch?</h2>
          <p className="text-xl mb-6">Start your fitness journey with our structured batch programs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition duration-300">
              Free Trial Class
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300">
              Contact for Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularBatchPlans;