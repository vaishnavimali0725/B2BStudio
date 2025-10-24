import React, { useState, useEffect } from 'react';
import logo from '../../Assests/Images/Logo.png'; // ✅ Use your actual logo path
import './Navbar.css'; // ✅ Ensure you have the correct CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const navItems = [
    {
      title: 'Home',
      subItems: ['Overview', 'Key Achievement'],
    },
    {
      title: 'Intensive Programme',
      subItems: ['About us', 'Programe details', 'Batch Dates 2025-26', 'Application Form'],
    },
    {
      title: 'Upcoming Events',
      subItems: [],
    },
    {
      title: 'In Studio Classes',
      subItems: ['Class Schedule', 'Regular Batch Plans', 'Class Packages'],
    },
    {
      title: 'Studio Booking',
      subItems: ['Details', 'About Us', 'Images', 'Video', 'Studio Rental Rates'],
    },
    {
      title: 'Instructors & Qualifications',
      subItems: [],
    },
  ];

  const toggleDropdown = (index: number | null) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 border-b transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-3'}`}>
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-[40px]" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block dropdown-container">
            <ul className="flex gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <button className="text-[14px]  text-gray-500 hover:text-pink-600 transition-colors py-4">
                    {item.title}
                    {item.subItems.length > 0 && (
                      <svg
                        className={`ml-1 w-4 h-4 inline transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {item.subItems.length > 0 && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-10 border border-pink-100 animation-down-to-top">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <button className="block w-full text-left px-4 py-3 text-gray-500 text-[14px] hover:bg-pink-50 hover:text-pink-600 border-b border-pink-50 last:border-b-0">
                            {subItem}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex gap-1">
            <button
              onClick={() => setShowSignIn(true)}
              className="text-[14px] text-pink-500 hover:bg-pink-50 px-3 py-2 rounded-md transition-colors"
            >
            <FontAwesomeIcon icon={faKey} />
            </button>
            <button
              onClick={() => setShowSignUp(true)}
              className="bg-white text-[14px] text-pink-500 hover:bg-pink-50 px-3 py-2 rounded-md transition-colors"
            >
              <FontAwesomeIcon icon={faUserPlus} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-600 p-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-100">
                    <button
                      className="w-full text-[14px] text-left py-4 px-2 text-gray-600  flex justify-between items-center"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.title}
                      {item.subItems.length > 0 && (
                        <svg
                          className={`ml-1 w-5 h-5 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    {item.subItems.length > 0 && activeDropdown === index && (
                      <ul className="pl-4 pb-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <button className="block w-full text-[14px] text-left py-3 px-2 text-gray-600 hover:text-pink-600 transition-colors">
                              {subItem}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Auth Buttons */}
              <div className="flex gap-4 mt-6 pb-4">
                <button
                  onClick={() => setShowSignIn(true)}
                  className="text-[14px] text-pink-500 hover:bg-pink-50 px-3 py-2 rounded-md transition-colors"
                >
                   <FontAwesomeIcon icon={faKey} />
                </button>
                <button
                  onClick={() => setShowSignUp(true)}
                  className="text-[14px] text-pink-500 hover:bg-pink-50 px-3 py-2 rounded-md transition-colors"
                >
                <FontAwesomeIcon icon={faUserPlus} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className=" p-5 sm:p-0 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
         <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg modal-fade-in animation-down-to-top">


            <h2 className="text-xl text-pink-500 uppercase text-left font-bold mb-4">Sign In</h2>
            <input type="text" placeholder="Username" className="w-full mb-3 px-4 py-2 border border-pink-300 rounded-md" />
            <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border border-pink-300 rounded-md" />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSignIn(false)} className="px-4 py-2 border border-gray-400 active:bg-gray-100 text-gray-400 rounded-md">
                Cancel
              </button>
              <button className="px-4 py-2 active:bg-pink-500 text-pink-500 border active:text-white border-pink-500 rounded-md">Login</button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="p-5 sm:p-0 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg animation-down-to-top">
          <form action="">
              <h2 className="text-xl text-pink-500 uppercase text-left font-bold mb-4">Sign Up</h2>
            <input type="text" placeholder="Username" className="w-full mb-3 border-pink-300 px-4 py-2 border rounded-md" />
            <input type="password" placeholder="Password" className="w-full mb-3 border-pink-300 px-4 py-2 border rounded-md" />
            <input type="password" placeholder="Confirm Password" className="w-full mb-4 border-pink-300 px-4 py-2 border rounded-md" />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSignUp(false)} className="px-4 py-2 border border-gray-400 active:bg-gray-100 text-gray-400 rounded-md">
                Cancel
              </button>
              <button className="px-4 py-2 active:bg-pink-500 text-pink-500 border active:text-white border-pink-500 rounded-md">Register</button>
            </div>
          </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
