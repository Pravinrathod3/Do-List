import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Girlimg from '../assets/testimonal.jpg';

export default function Testimonial() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">Customer Testimonials</h2>
        <p className="text-sm text-blue-700">This tool has transformed my productivity and organization!</p>
      </div>

     
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative bg-white border-8 border-r-0 border-[#FF3E54] px-8 py-10">
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-relaxed">
            “Using this website has made my tasks so much easier! I can't imagine my day without it.”
          </blockquote>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div>
              <p className="font-semibold text-gray-800">Sherri Cronin</p>
              <p className="text-sm text-gray-600">Project Manager, TechCorp</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-100 transition">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              <ChevronRight />
            </button>
          </div>
        </div>

       
        <div className="border-8 border-l-0 border-[#FF3E54] flex items-center justify-center h-80 w-full">
          <img
            src={Girlimg}
            alt="Testimonial"
            className="h-72 w-72 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
