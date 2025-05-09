import React from 'react';
import { Link } from 'react-scroll';
import { FaLaptopCode, FaKeyboard, FaCode } from 'react-icons/fa';

const Home = () => {
  
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 "></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-5 grid-rows-8 gap-8 p-8 h-full w-full">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="flex justify-center text-white/20">
              {i % 3 === 0 ? (
                <FaLaptopCode className="text-4xl animate-float" />
              ) : i % 3 === 1 ? (
                <FaKeyboard className="text-4xl animate-float-delay" />
              ) : (
                <FaCode className="text-4xl animate-float" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-6 text-amber-200">
          Hi<span className="wave-emoji">👋🏾</span>, I'm Yididiya Tesfaye
        </h1>
        <h2 className="text-3xl font-semibold mb-8 text-amber-200">
          Frontend Developer 
        </h2>
      
        <div className="flex gap-4 justify-center">
          <Link
            to="contact"
            smooth={true}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>

    
     
    </section>
  );
};

export default Home;
