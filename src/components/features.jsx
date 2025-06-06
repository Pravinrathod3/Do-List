import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from '../assets/man.png';

export default function Features() {
  const socialPlatforms = ['Google', 'Facebook', 'YouTube', 'Pinterest', 'Twitch'];

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl grid lg:grid-cols-2 gap-8 w-full items-center">
       
          <div className="bg-[#FF3E54] text-white rounded-3xl p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-6 right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />

            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 space-y-1">
                <div>Organize.</div>
                <div>Achieve.</div>
                <div>Relax.</div>
              </h1>
              <p className="text-base sm:text-lg mb-8 opacity-90 max-w-md leading-relaxed">
                Turn clutter into clarity, chaos into control, and goals into achievements.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-red-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition transform hover:scale-105 shadow">
                  Get Started
                </button>
                <button className="border border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium hover:bg-white hover:text-red-500 transition transform hover:scale-105">
                  Discover Features
                </button>
              </div>
            </div>
          </div>

          
          <div
            className="relative h-[450px] sm:h-[500px] rounded-3xl overflow-hidden bg-cover bg-center flex flex-col justify-between p-8"
            style={{ backgroundImage: `url(${Image})` }}
          >
            <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl" />

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 text-amber-50">Your Tasks.</h2>
              <h3 className="text-xl sm:text-2xl font-semibold opacity-90 text-amber-50">Our Tools.</h3>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-amber-50">Freddie Halvorson</h4>
                <p className="text-sm opacity-80 text-amber-50">Chief Productivity Enthusiast</p>
              </div>
              <button className="bg-black/70 hover:bg-black rounded-full p-3 transition">
                <Play className="w-4 h-4 text-white" />
              </button>
            </div>

     
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 opacity-70">
          {socialPlatforms.map((name, index) => (
            <span key={index} className="text-3xl sm:text-4xl font-bold text-gray-700">
              {name}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
