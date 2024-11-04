import React from 'react';
import { Building2, DollarSign, Users } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  return (
    <div className="relative bg-[#1a237e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Connect. Grow.</span>
              <span className="block text-[#90caf9]">Thrive Together.</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Join the premier network for SMEs. Access funding, boost visibility, and connect with industry leaders.
              Just $1/day for unlimited opportunities.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button 
                onClick={onGetStarted}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#1a237e] bg-[#90caf9] hover:bg-[#64b5f6] md:text-lg"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-[#283593] rounded-lg overflow-hidden">
                <img
                  className="w-full opacity-80"
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
                  alt="Business networking"
                />
                <div className="absolute inset-0 bg-[#1a237e] mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}