import React from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-200 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="bg-[#3E2723] p-8 rounded-3xl shadow-lg text-white flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-amber-200 text-center mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <FaPhone className="text-[#3E2723] bg-amber-200 p-2 rounded-full text-4xl" />
                <p className="font-bold">Phone:</p>
                <p>(+251) 939959823</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#3E2723] bg-amber-200 p-2 rounded-full text-4xl" />
                <p className='font-bold'>Email:</p>
                <span>yidutes612@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#3E2723] bg-amber-200 p-2 rounded-full text-4xl" />
                <p className='font-bold'>Location:</p>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Right Side - Social Media */}
          <div className="bg-[#3E2723] p-8 rounded-3xl shadow-lg text-center text-white flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-amber-200 mb-6">
              Follow Me
            </h3>
            <p className="mb-8">Stay connected through my social platforms</p>
            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/in/yididiyatesfaye/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 text-amber-200 hover:text-amber-300"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://github.com/yidu612"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 text-amber-200 hover:text-amber-300"
              >
                <FaGithub className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
