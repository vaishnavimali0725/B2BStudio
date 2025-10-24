import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-4">BeatToBeat Studio</h3>
            <p className="text-gray-300 mb-4">
              Established in 2010 | 14 Years of Dance, Passion & Excellence
            </p>
            <p className="text-gray-400 text-sm">
              Your premier destination for dance and fitness in Sangli
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Class Schedule', path: '/class-schedule' },
                { name: 'Studio Booking', path: '/studio-booking' },
                { name: 'Upcoming Events', path: '/upcoming-event' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-pink-400 transition duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Our Services</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Government Projects</div>
              <div>Corporate Events</div>
              <div>Wedding Choreography</div>
              <div>Dance Classes</div>
              <div>Zumba Sessions</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="text-pink-400 mr-2">📞</span>
                <div>
                  <div>+91 96372 00333</div>
                  <div>+91 96372 53572</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-pink-400 mr-2">📧</span>
                <div>beat2beatdancecrew@gmail.com</div>
              </div>
              <div className="flex items-center">
                <span className="text-pink-400 mr-2">📍</span>
                <div>
                  <div className="font-semibold">Our Location:</div>
                  <div>BeatToBeat Studio</div>
                  <div>Near XYZ Landmark,</div>
                  <div>Main Road, Sangli</div>
                  <div>Maharashtra - 416416</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-pink-400 text-center">Find Us Here</h4>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Address Details */}
            <div className="text-gray-300">
              <h5 className="font-semibold text-white mb-4 text-xl">Studio Address</h5>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-pink-400 mr-3 mt-1 text-xl">🏢</span>
                  <div>
                    <div className="font-medium text-lg">BeatToBeat Dance Studio</div>
                    <div>2nd Floor, Shreeji Complex</div>
                    <div>Near Railway Station</div>
                    <div>Vishrambag, Sangli</div>
                    <div>Maharashtra - 416415</div>
                  </div>
                </div>
                <div className="flex items-start mt-6">
                  <span className="text-pink-400 mr-3 mt-1 text-xl">⏰</span>
                  <div>
                    <div className="font-medium text-lg">Studio Hours</div>
                    <div>Monday - Saturday: 6:00 AM - 10:00 PM</div>
                    <div>Sunday: 8:00 AM - 8:00 PM</div>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://maps.app.goo.gl/Z9PgwET6JdpcDRCa8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-200 font-semibold"
                  >
                    <span>🗺️</span>
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15288.215651901132!2d74.564667!3d16.854167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzE1LjAiTiA3NMKwMzMnNTIuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BeatToBeat Studio Location"
                className="w-full h-80"
              ></iframe>
              <div className="p-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/Z9PgwET6JdpcDRCa8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition duration-200 text-sm"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BeatToBeat Studio. All rights reserved.</p>
          <p className="text-sm mt-2">Serving Sangli with excellence since 2010</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;