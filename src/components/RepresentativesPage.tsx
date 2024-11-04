import React, { useState } from 'react';
import { Building2, Bell, MessageSquare, LogOut, Search, Home, DollarSign, Megaphone, Users, Star, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RepresentativesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showContractModal, setShowContractModal] = useState(false);
  const [selectedRepresentative, setSelectedRepresentative] = useState(null);

  const categories = ['all', 'tech', 'lifestyle', 'business', 'entertainment'];

  const representatives = [
    {
      id: 1,
      name: 'Sarah Johnson',
      category: 'tech',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      followers: '2.5M',
      expertise: 'Tech Innovation',
      rate: '$5,000/campaign',
      description: 'Tech influencer specializing in startup growth and innovation'
    },
    {
      id: 2,
      name: 'Michael Chen',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      followers: '1.8M',
      expertise: 'Business Strategy',
      rate: '$4,500/campaign',
      description: 'Business strategist and keynote speaker'
    },
    {
      id: 3,
      name: 'Emma Davis',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      followers: '3.2M',
      expertise: 'Sustainable Living',
      rate: '$6,000/campaign',
      description: 'Sustainability advocate and lifestyle consultant'
    }
  ];

  const filteredRepresentatives = selectedCategory === 'all'
    ? representatives
    : representatives.filter(rep => rep.category === selectedCategory);

  const handleRequestContract = (representative) => {
    setSelectedRepresentative(representative);
    setShowContractModal(true);
  };

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
                    placeholder="Search representatives..."
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
            <Link to="/dashboard" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#1a237e]">
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
            <Link to="/representatives" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-[#1a237e] bg-[#90caf9] bg-opacity-10">
              <Users className="mr-4 h-6 w-6" />
              Representatives
            </Link>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex space-x-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategory === category
                        ? 'bg-[#1a237e] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Representatives Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRepresentatives.map((representative) => (
                <div key={representative.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={representative.image}
                      alt={representative.name}
                      className="absolute h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#1a237e]">{representative.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-gray-600">{representative.followers}</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-5 w-5 mr-2" />
                        <span>{representative.expertise}</span>
                      </div>
                      <div className="text-gray-600">{representative.description}</div>
                      <div className="font-semibold text-[#1a237e]">{representative.rate}</div>
                    </div>
                    <button
                      onClick={() => handleRequestContract(representative)}
                      className="w-full bg-[#1a237e] text-white px-4 py-2 rounded-md hover:bg-[#283593] transition-colors duration-200"
                    >
                      Request Contract
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contract Request Modal */}
      {showContractModal && selectedRepresentative && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Request Contract</h2>
            <p className="mb-4">
              Send a contract request to <span className="font-semibold">{selectedRepresentative.name}</span>
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Campaign Details</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a237e] focus:ring-[#1a237e]"
                  rows={4}
                  placeholder="Describe your campaign and requirements..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Proposed Duration</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a237e] focus:ring-[#1a237e]"
                  placeholder="e.g., 3 months"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget Range</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a237e] focus:ring-[#1a237e]"
                  placeholder="e.g., $5,000 - $10,000"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#1a237e] text-white px-4 py-2 rounded-md hover:bg-[#283593]"
                >
                  Send Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowContractModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}