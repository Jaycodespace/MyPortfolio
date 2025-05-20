import React from 'react';
import { CONTACT } from '../assets/Constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30 pointer-events-none" />
      
      {/* Increased max width container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl min-w-[300px]">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-4 rounded-lg">
                <FaMapMarkerAlt className="h-8 w-8 text-blue-500" />
              </div>
              <div className="break-words">
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300 leading-relaxed">{CONTACT.address}</p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl min-w-[300px]">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-4 rounded-lg">
                <FaPhone className="h-8 w-8 text-blue-500" />
              </div>
              <div className="break-words">
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-300 leading-relaxed">{CONTACT.phoneNo}</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl min-w-[300px]">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-4 rounded-lg">
                <FaEnvelope className="h-8 w-8 text-blue-500" />
              </div>
              <div className="break-words">
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300 leading-relaxed">{CONTACT.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ContactMe;
