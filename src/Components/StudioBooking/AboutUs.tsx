import React from 'react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Omcar Rokade",
      role: "Founder & Creative Head",
      experience: "16+ years in dance and performing arts",
      qualification: "Choreographer, Performer, Educator"
    },
    {
      name: "Nikhil Patil",
      role: "Choreographer & Instructor",
      experience: "Master in HipHop - The Kings dance academy, Mumbai",
      qualification: "HipHop Specialist"
    },
    {
      name: "Baban Sir",
      role: "Choreographer & Sangeet Event Instructor",
      experience: "Hotel Management Professional",
      qualification: "B.Com, Hotel Management"
    },
    {
      name: "Prajakta Phadke",
      role: "Administration Head",
      experience: "4 years with BeatToBeat Studio",
      qualification: "MBA, Master of Journalism"
    },
    {
      name: "Rutuja Patil",
      role: "Studio Coordinator",
      experience: "1.5 years with BeatToBeat Studio",
      qualification: "MBA in Finance, Event Management"
    },
    {
      name: "Arpita Patil",
      role: "Yoga Instructor",
      experience: "Certified Yoga Trainer",
      qualification: "Yoga Certification"
    },
    {
      name: "Kanak",
      role: "Senior Instructor",
      experience: "12 years with BeatToBeat Studio",
      qualification: "Final Year Physiotherapy Student"
    },
    {
      name: "Santosh Rajput",
      role: "Senior Instructor & Cultural Coordinator",
      experience: "Cultural instructor at schools",
      qualification: "Professional Dance Instructor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About BeatToBeat Studio</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Established in 2010 | 14 Years of Dance, Passion & Excellence
          </p>
        </div>

        {/* Studio Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              <strong>BeatToBeat Studio</strong> is a premier dance and performing arts academy based in Sangli, Maharashtra, 
              founded with a vision to create a vibrant space for creativity, discipline, and cultural excellence.
            </p>
            <p className="mb-6">
              With <strong>14 incredible years</strong> of dedication to dance education and performance, BeatToBeat Studio has 
              grown into a recognized hub for artistic expression, training, and innovation in the field of 
              dance and entertainment.
            </p>
            <p className="mb-6">
              We specialize in training students across various age groups and dance styles—ranging from 
              <strong> Bollywood, Classical, Folk, Semi-Classical, Contemporary, Hip-Hop, Zumba, and more</strong>. 
              Our programs are curated for students, schools, corporates, and government organizations across India and abroad.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">🎯 Our Vision</h3>
            <p className="text-lg">
              To create a world where dance transforms lives, builds communities, and preserves cultural heritage 
              through excellence in training and performance.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">🚀 Our Mission</h3>
            <p className="text-lg">
              To provide professional dance education that nurtures creativity, builds confidence, and develops 
              skilled performers who can represent Indian culture globally.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">💫 Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "💃", title: "Passion", description: "Dance with heart and soul" },
              { icon: "📚", title: "Excellence", description: "Strive for the highest standards" },
              { icon: "🤝", title: "Community", description: "Build together, grow together" },
              { icon: "🌍", title: "Heritage", description: "Celebrate and preserve culture" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">👥 Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                <p className="text-xs text-gray-500">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">📞 Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-4">📱</div>
              <h3 className="font-bold mb-2">Phone Numbers</h3>
              <p>+91 96372 00333</p>
              <p>+91 96372 53572</p>
            </div>
            <div>
              <div className="text-2xl mb-4">📧</div>
              <h3 className="font-bold mb-2">Email</h3>
              <p>beat2beatdancecrew@gmail.com</p>
            </div>
            <div>
              <div className="text-2xl mb-4">📍</div>
              <h3 className="font-bold mb-2">Location</h3>
              <p>Sangli, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;