import React, { useState } from 'react';

const UpcomingEvent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const events = [
    {
      id: 1,
      title: "Annual Dance Festival 2024",
      date: "December 20, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "BeatToBeat Studio Main Hall",
      description: "Join us for our grand annual dance festival featuring performances from all our students and instructors. Showcase of various dance styles and special guest performances.",
      price: "Free Entry",
      image: "🎭",
      type: "Festival",
      category: "Performance",
      registrationLink: "#",
      featured: true,
      seats: "Open for all"
    },
    {
      id: 2,
      title: "Hip-Hop Workshop with Special Guest",
      date: "December 15, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Studio A",
      description: "Learn advanced hip-hop techniques from renowned choreographer Rahul Mehta. Intensive 3-hour workshop covering foundation, grooves, and choreography.",
      price: "₹1,500",
      image: "💥",
      type: "Workshop",
      category: "Training",
      registrationLink: "#",
      featured: true,
      seats: "Limited to 20 participants"
    },
    {
      id: 3,
      title: "Yoga & Meditation Retreat",
      date: "December 18, 2024",
      time: "7:00 AM - 10:00 AM",
      location: "Studio Garden",
      description: "Start your day with peaceful yoga and meditation session for mental and physical wellness. Perfect for stress relief and improving flexibility.",
      price: "₹800",
      image: "🧘",
      type: "Wellness",
      category: "Wellness",
      registrationLink: "#",
      featured: false,
      seats: "15 seats available"
    },
    {
      id: 4,
      title: "Kids Dance Competition",
      date: "December 22, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Main Auditorium",
      description: "Annual dance competition for kids aged 6-12 years. Multiple categories including solo, duet, and group performances with exciting prizes.",
      price: "₹500 Registration",
      image: "👶",
      type: "Competition",
      category: "Competition",
      registrationLink: "#",
      featured: false,
      seats: "50 participants max"
    },
    {
      id: 5,
      title: "Zumba Marathon",
      date: "December 25, 2024",
      time: "4:00 PM - 7:00 PM",
      location: "Studio B",
      description: "3-hour non-stop Zumba session with multiple instructors. Fun and fitness combined! Perfect for burning calories and having fun with friends.",
      price: "₹1,000",
      image: "💃",
      type: "Fitness",
      category: "Fitness",
      registrationLink: "#",
      featured: false,
      seats: "30 participants"
    },
    {
      id: 6,
      title: "Professional Choreography Camp",
      date: "January 5-7, 2025",
      time: "10:00 AM - 4:00 PM Daily",
      location: "All Studios",
      description: "3-day intensive camp focusing on choreography techniques and performance skills. Learn to create your own dance pieces and improve stage presence.",
      price: "₹4,500",
      image: "🌟",
      type: "Camp",
      category: "Training",
      registrationLink: "#",
      featured: true,
      seats: "25 participants only"
    },
    {
      id: 7,
      title: "Bollywood Night Special",
      date: "January 12, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Main Hall",
      description: "An evening dedicated to Bollywood dance. Learn iconic movie steps, participate in group dances, and enjoy Bollywood music all night.",
      price: "₹1,200",
      image: "🎬",
      type: "Social",
      category: "Performance",
      registrationLink: "#",
      featured: false,
      seats: "40 participants"
    },
    {
      id: 8,
      title: "Contemporary Dance Intensive",
      date: "January 18-19, 2025",
      time: "9:00 AM - 5:00 PM Both Days",
      location: "Studio C",
      description: "Weekend intensive workshop focusing on contemporary dance techniques, floor work, and emotional expression through movement.",
      price: "₹3,500",
      image: "💫",
      type: "Workshop",
      category: "Training",
      registrationLink: "#",
      featured: true,
      seats: "15 participants only"
    }
  ];

  const categories = ["All", "Performance", "Training", "Wellness", "Competition", "Fitness", "Social"];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const featuredEvents = events.filter(event => event.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exciting events, workshops, and performances throughout the year. 
            Don't miss these opportunities to learn, perform, and connect with the dance community.
          </p>
        </div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🌟 Featured Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 border-2 border-pink-200">
                  <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-6xl">
                    {event.image}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                      <span className="text-orange-600 font-bold">{event.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-700">
                        <span className="text-pink-500 mr-2">📅</span>
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="text-pink-500 mr-2">⏰</span>
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="text-pink-500 mr-2">📍</span>
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <span className="text-pink-500 mr-2">👥</span>
                        {event.seats}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200">
                        Register Now
                      </button>
                      <button className="px-4 py-3 border border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition duration-200">
                        📋
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Event Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-pink-100 shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-5xl">
                {event.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <span className="text-pink-600 font-bold">{event.price}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-700">
                    <span className="text-pink-500 mr-2">📅</span>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-pink-500 mr-2">⏰</span>
                    {event.time}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{event.seats}</span>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-600 transition duration-200">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Calendar View */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📅 Event Calendar</h2>
          <div className="grid md:grid-cols-7 gap-4 text-center">
            {/* Calendar Header */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
            
            {/* Calendar Days with Events */}
            {[
              { date: "15", event: "Hip-Hop Workshop", color: "bg-pink-500" },
              { date: "18", event: "Yoga Retreat", color: "bg-green-500" },
              { date: "20", event: "Dance Festival", color: "bg-purple-500" },
              { date: "22", event: "Kids Competition", color: "bg-blue-500" },
              { date: "25", event: "Zumba Marathon", color: "bg-orange-500" },
            ].map((dayEvent, index) => (
              <div key={index} className="relative p-2">
                <div className={`w-8 h-8 ${dayEvent.color} rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-1`}>
                  {dayEvent.date}
                </div>
                <div className="text-xs text-gray-600 truncate">
                  {dayEvent.event}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">1. Register Online</h3>
            <p className="text-gray-600">Fill the registration form with your details</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">2. Make Payment</h3>
            <p className="text-gray-600">Complete payment via GPay or cash</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">3. Get Confirmation</h3>
            <p className="text-gray-600">Receive event details and preparation guide</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">📞 Need Help with Registration?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl mb-4">📱</div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p>+91 96372 00333</p>
              <p>+91 96372 53572</p>
            </div>
            <div>
              <div className="text-2xl mb-4">💬</div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p>Quick chat support</p>
            </div>
            <div>
              <div className="text-2xl mb-4">📧</div>
              <h3 className="font-bold mb-2">Email</h3>
              <p>beat2beatdancecrew@gmail.com</p>
            </div>
            <div>
              <div className="text-2xl mb-4">🏢</div>
              <h3 className="font-bold mb-2">Visit</h3>
              <p>Studio in Sangli</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Get notified about upcoming events and early bird discounts</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-pink-600 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;