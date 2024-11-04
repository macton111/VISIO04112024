import React from 'react';
import { Home, Building2, DollarSign, Megaphone, Users, Bell, MessageSquare, LogOut, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Feed from './Feed';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-[#1a237e] text-white fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-[#90caf9]" />
              <span className="ml-2 text-xl font-bold">Visio</span>
              <div className="ml-4 flex-1 max-w-xs">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-[#283593] text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search companies..."
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 cursor-pointer hover:text-[#90caf9]" />
              <MessageSquare className="h-6 w-6 cursor-pointer hover:text-[#90caf9]" />
              <LogOut className="h-6 w-6 cursor-pointer hover:text-[#90caf9]" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <div className="w-64 fixed h-full bg-white shadow-md">
          <nav className="mt-5 px-2">
            <Link to="/dashboard" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-[#1a237e] bg-[#90caf9] bg-opacity-10">
              <Home className="mr-4 h-6 w-6" />
              Home
            </Link>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#1a237e]">
              <Building2 className="mr-4 h-6 w-6" />
              My Company
            </a>
            <Link to="/funding" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#1a237e]">
              <DollarSign className="mr-4 h-6 w-6" />
              Funding
            </Link>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#1a237e]">
              <Megaphone className="mr-4 h-6 w-6" />
              Advertising
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#1a237e]">
              <Users className="mr-4 h-6 w-6" />
              Representatives
            </a>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="ml-64 flex-1 p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feed Posts */}
            <div className="col-span-2 space-y-6">
              <Feed />
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Daily Stats */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-[#1a237e] mb-4">Today's Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ad Pool Balance</span>
                    <span className="font-semibold">$1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Companies</span>
                    <span className="font-semibold">1,567</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">New Connections</span>
                    <span className="font-semibold">23</span>
                  </div>
                </div>
              </div>

              {/* Trending Companies */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-[#1a237e] mb-4">Trending Companies</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((company) => (
                    <div key={company} className="flex items-center space-x-3">
                      <Building2 className="h-8 w-8 text-[#90caf9]" />
                      <div>
                        <h4 className="font-medium">Trending Company {company}</h4>
                        <p className="text-sm text-gray-500">Technology</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}