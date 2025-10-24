import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Try one of these paths - use the one that works
  const logoPath = require('../../Assests/Images/Logo.png');
  // OR
  // const logoPath = require('../../../Assests/Images/Logo.png');

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      submenu: [
        { name: 'Overview', path: '/overview' },
        { name: 'Key Achievements', path: '/key-achievements' }
      ]
    },
    {
      name: 'Intensive Programme',
      path: '/intensive-programme',
      submenu: [
        { name: 'Upcoming Event', path: '/upcoming-event' }
      ]
    },
    {
      name: 'In Studio Classes',
      path: '/in-studio-classes',
      submenu: [
        { name: 'Class Schedule', path: '/class-schedule' },
        { name: 'Regular Batch Plans', path: '/regular-batch-plans' },
        { name: 'Class Package', path: '/class-package' }
      ]
    },
    {
      name: 'Studio Booking',
      path: '/studio-booking',
      submenu: [
        { name: 'Details', path: '/details' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Image Gallery', path: '/image-gallery' },
        { name: 'Video Gallery', path: '/video-gallery' },
        { name: 'Studio Rental Rates', path: '/studio-rental-rates' }
      ]
    },
    {
      name: 'Instructor & Qualification',
      path: '/instructor-qualification',
      submenu: [
        { name: 'Instructor List', path: '/instructor-list' },
        { name: 'Qualification', path: '/qualification' }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-lg border-b-4 border-pink-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo - B2B replaced with icon */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-pink-500 text-white p-4 rounded-xl flex items-center justify-center">
              {/* Logo Icon only - no B2B text */}
              <img 
                src={logoPath} 
                alt="BeatToBeat Logo" 
                className="w-10 h-10"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">BeatToBeat Studio</h1>
              <p className="text-xs text-pink-600">Est. 2010 | 16 Years of Excellence</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="flex items-center text-gray-700 hover:text-pink-600 font-semibold transition duration-300 py-2"
                    >
                      {item.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-pink-100 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition duration-200 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-pink-600 font-semibold transition duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Desktop - Login Button Only */}
            <div className="nav-auth ml-4">
              <Link 
                to="/login" 
                className="login-btn flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="btn-icon text-lg">🔐</span>
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button with Login Icon */}
          <div className="md:hidden flex items-center gap-4">
            {/* Login Button for Mobile (outside menu) */}
            <Link 
              to="/login" 
              className="login-btn-mobile flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300"
            >
              <span className="btn-icon">🔐</span>
            </Link>
            
            <button 
              className="text-gray-600 hover:text-pink-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-2 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="border-b border-gray-100">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition duration-200 font-semibold"
                      >
                        {item.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="bg-pink-50 pl-6">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-600 hover:bg-pink-100 hover:text-pink-700 transition duration-200 border-b border-gray-100 last:border-b-0"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition duration-200 border-b border-gray-100 font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile - Login Button Inside Menu */}
              <div className="nav-auth-mobile border-t border-gray-200 pt-4">
                <Link 
                  to="/login" 
                  className="login-btn-mobile flex items-center justify-center gap-2 bg-pink-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 mx-4"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="btn-icon">🔐</span>
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;