import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const FitnessFooter = () => {
  return (
    <footer className="bg-black  text-white">
      <div className="max-w-7xl mx-auto px-8 pt-25 py-10">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
              </svg>
              <span className="text-3xl font-bold">FitFlex</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We believe fitness is more than just sets building confidence
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Quick Link
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  Program
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Utility */}
          <div>
            <h3 className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Utility
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  404
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <a href="tel:+13075350133" className="hover:text-yellow-400 transition-colors duration-300">
                  +12 (307) 535-0133
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:contact@fitnix.com" className="hover:text-yellow-400 transition-colors duration-300">
                  contact@fitflex.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <span>6391 Elgin St. Celina, Delaware 10299</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 All Right Reserved by Yuvraj Freelance</p>
        </div>
      </div>
    </footer>
  );
};

export default FitnessFooter;