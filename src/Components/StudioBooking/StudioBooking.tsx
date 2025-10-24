import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudioBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedStudio, setSelectedStudio] = useState<string>('');

  const studios = [
    {
      id: 1,
      name: "Studio A - Main Hall",
      capacity: "50 people",
      equipment: "Mirror walls, Sound system, AC",
      rate: "₹500/hour",
      image: "🏢"
    },
    {
      id: 2,
      name: "Studio B - Practice Room",
      capacity: "25 people",
      equipment: "Mirror walls, Basic sound system",
      rate: "₹300/hour",
      image: "🎭"
    },
    {
      id: 3,
      name: "Studio C - Premium Suite",
      capacity: "30 people",
      equipment: "Full mirror walls, Professional sound, Lighting",
      rate: "₹700/hour",
      image: "⭐"
    }
  ];

  const timeSlots = [
    "6:00 AM - 7:00 AM", "7:00 AM - 8:00 AM", "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM", "7:00 PM - 8:00 PM",
    "8:00 PM - 9:00 PM", "9:00 PM - 10:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Studio Booking</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book our professional studio spaces for rehearsals, practice sessions, workshops, and events
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📅 Book Your Slot</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Studio</label>
                <select
                  value={selectedStudio}
                  onChange={(e) => setSelectedStudio(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Choose a studio</option>
                  {studios.map(studio => (
                    <option key={studio.id} value={studio.name}>
                      {studio.name} - {studio.rate}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Available Time Slots</label>
                <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 border rounded-lg text-sm font-semibold transition duration-200 ${
                        selectedTime === time
                          ? 'bg-pink-600 text-white border-pink-600'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-pink-100 hover:border-pink-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Booking Summary */}
            <div className="bg-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>
              
              {selectedDate && selectedTime && selectedStudio ? (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Studio:</span>
                    <span className="font-semibold">{selectedStudio}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-pink-700 border-t pt-3">
                    <span>Total Amount:</span>
                    <span>₹500</span>
                  </div>
                  
                  <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-200 mt-4">
                    Confirm Booking
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <div className="text-4xl mb-4">📋</div>
                  <p>Select date, time, and studio to see booking details</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Studio Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {studios.map((studio) => (
            <div key={studio.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-6xl">
                {studio.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{studio.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <span className="text-pink-500 mr-2">👥</span>
                    Capacity: {studio.capacity}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-pink-500 mr-2">🎵</span>
                    {studio.equipment}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-pink-500 mr-2">💰</span>
                    Rate: {studio.rate}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStudio(studio.name)}
                  className="w-full bg-pink-100 text-pink-700 py-2 rounded-lg font-semibold hover:bg-pink-200 transition duration-200"
                >
                  Select This Studio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">More Information</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Studio Details', path: '/details', icon: '🏢' },
              { name: 'About Us', path: '/about-us', icon: '👥' },
              { name: 'Image Gallery', path: '/image-gallery', icon: '📷' },
              { name: 'Rental Rates', path: '/studio-rental-rates', icon: '💰' }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition duration-200 border border-pink-200"
              >
                <div className="text-3xl mb-4">{link.icon}</div>
                <h3 className="font-semibold text-gray-800">{link.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioBooking;