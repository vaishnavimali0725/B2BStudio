import React from 'react';

const QualificationAndInstruction = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Omcar Rokade",
      role: "Creative Head and Choreographer",
      photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "With extensive experience in choreography and creative direction, Omcar brings innovative concepts to life through dance."
    },
    {
      id: 2,
      name: "Nikhil Patil",
      role: "Choreographer & Instructor",
      photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "Master in HipHop from The Kings Dance Academy, Mumbai. Specializes in urban dance styles and performance techniques."
    },
    {
      id: 3,
      name: "Baban",
      role: "Choreographer & Sangeet Event Instructor",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "B.Com and Hotel Management graduate. Expertise in traditional Indian dance forms and wedding performances."
    },
    {
      id: 4,
      name: "Prajakta Phadke",
      role: "Administration",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "MBA and Master of Journalism. Manages studio operations with 4 years of dedicated service at BeatToBeat."
    },
    {
      id: 5,
      name: "Rutuja Patil",
      role: "Coordinator",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "MBA in Finance & Event Management. Multitalented artist specializing in mural art, resin art, and customized gifts. 1.5 years with BeatToBeat."
    },
    {
      id: 6,
      name: "Arpita Patil",
      role: "Yoga Instructor",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "Specializes in integrating yoga practice with dance training for enhanced flexibility and performance."
    },
    {
      id: 7,
      name: "Kanak",
      role: "Senior Instructor",
      photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "12 years with BeatToBeat. Final year Physiotherapy student, bringing anatomical knowledge to dance instruction."
    },
    {
      id: 8,
      name: "Santosh Rajput",
      role: "Senior Instructor",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "Cultural instructor at schools on behalf of BeatToBeat Studio. Expertise in traditional folk dance forms."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Our Expert Team
          </h1>
          <div className="w-32 h-1 bg-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet the talented professionals who make BeatToBeat Studio a premier dance academy.
            Our team combines artistic excellence with educational expertise to create transformative dance experiences.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-pink-300 text-sm">{member.role}</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-pink-500 w-2 h-8 rounded-full mr-3"></div>
                  <h4 className="text-gray-700 font-medium">Qualifications & Experience</h4>
                </div>
                <p className="text-gray-600 text-sm">{member.details}</p>
                
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-3">
                    <button className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </button>
                    <button className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </button>
                    <button className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Team?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-3">100+</div>
              <h3 className="text-xl font-semibold mb-2">Years Combined Experience</h3>
              <p>Our instructors bring decades of professional dance and teaching expertise</p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-3">8</div>
              <h3 className="text-xl font-semibold mb-2">Dance Specialties</h3>
              <p>From classical to contemporary, our team covers all major dance forms</p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-3">15+</div>
              <h3 className="text-xl font-semibold mb-2">Professional Certifications</h3>
              <p>Our instructors hold recognized qualifications in dance and related fields</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The instructors at BeatToBeat transformed my dancing completely. Their personalized approach helped me find my style!",
                name: "Priya Sharma",
                role: "Advanced Contemporary Student"
              },
              {
                quote: "I've trained with Nikhil sir for 2 years and his hip-hop classes are simply the best in Maharashtra!",
                name: "Rahul Deshmukh",
                role: "Hip-Hop Specialist"
              },
              {
                quote: "The administrative team makes everything so smooth. They truly care about every student's journey.",
                name: "Anjali Patil",
                role: "Parent of Student"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-yellow-400 mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Dance Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the BeatToBeat difference with our world-class instructors and supportive community.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
            Schedule a Trial Class
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            or call us at +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualificationAndInstruction;