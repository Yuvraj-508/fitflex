import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const FitnessFooter = () => {
return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-8 h-8 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
              </svg>
              <span className="text-3xl font-bold">FitFlex</span>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We believe fitness is more than just sets — it’s about building
              strength, balance, and confidence.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Programs", "Pricing", "Blogs"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div>
            <h3 className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Utility
            </h3>
            <ul className="space-y-3 text-sm">
              {["404", "Privacy Policy", "Terms & Conditions"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <a
                  href="tel:+919876543210"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <a
                  href="mailto:contact@fitflex.in"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  contact@fitflex.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <span>
                  221B MG Road, Andheri West, Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
          <p>© 2025 All Rights Reserved by Yuvraj Freelance</p>
        </div>
      </div>
    </footer>
  );
};

export default FitnessFooter;