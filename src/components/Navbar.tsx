import React, { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a237e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-[#90caf9]" />
            <span className="ml-2 text-xl font-bold">Visio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#283593] hover:text-white">Home</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#283593] hover:text-white">Companies</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#283593] hover:text-white">Funding</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#283593] hover:text-white">Advertising</a>
              <button 
                onClick={() => onOpenAuth('login')}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#283593] hover:text-white"
              >
                Log In
              </button>
              <button 
                onClick={() => onOpenAuth('signup')}
                className="bg-[#90caf9] text-[#1a237e] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#64b5f6]"
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#283593]">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#283593]">Companies</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#283593]">Funding</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#283593]">Advertising</a>
            <button
              onClick={() => onOpenAuth('login')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-[#283593]"
            >
              Log In
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="block w-full text-center bg-[#90caf9] text-[#1a237e] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#64b5f6]"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}