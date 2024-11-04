import React, { useState } from 'react';
import { DollarSign, CreditCard, Wallet, Building2, Bell, MessageSquare, LogOut, Search, Home, Megaphone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FundingPage() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    if (amount && paymentMethod) {
      setBalance(prev => prev + parseFloat(amount));
      setAmount('');
      setPaymentMethod('');
    }
  };

  const fundedCompanies = [
    {
      name: 'TechCraft Solutions',
      amount: '$500,000',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    },
    {
      name: 'Green Earth Co',
      amount: '$750,000',
      date: '2024-03-14',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
    },
    {
      name: 'Creative Minds',
      amount: '$300,000',
      date: '2024-03-13',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
    }
  ];

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
            <Link to="/dashboard" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#1a237e]">
              <Home className="mr-4 h-6 w-6" />
              Home
            </Link>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#1a237e]">
              <Building2 className="mr-4 h-6 w-6" />
              My Company
            </a>
            <Link to="/funding" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-[#1a237e] bg-[#90caf9] bg-opacity-10">
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
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Wallet Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#1a237e]">Your Wallet</h2>
                    <div className="flex items-center space-x-2">
                      <Wallet className="h-6 w-6 text-[#90caf9]" />
                      <span className="text-2xl font-bold">${balance.toFixed(2)}</span>
                    </div>
                  </div>

                  <form onSubmit={handleDeposit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Amount</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]"
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                      <div className="mt-2 grid grid-cols-3 gap-4">
                        {['Visa', 'PayPal', 'USDT'].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPaymentMethod(method)}
                            className={`flex items-center justify-center px-4 py-3 border rounded-lg ${
                              paymentMethod === method
                                ? 'border-[#1a237e] bg-[#1a237e] text-white'
                                : 'border-gray-300 hover:border-[#1a237e]'
                            }`}
                          >
                            <CreditCard className="h-5 w-5 mr-2" />
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1a237e] text-white px-4 py-2 rounded-md hover:bg-[#283593] transition-colors duration-200"
                    >
                      Add Funds
                    </button>
                  </form>
                </div>
              </div>

              {/* Trending Funded Companies */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold text-[#1a237e] mb-6">Recently Funded</h2>
                  <div className="space-y-6">
                    {fundedCompanies.map((company, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <img
                          src={company.image}
                          alt={company.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{company.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{company.date}</span>
                            <span className="text-sm font-semibold text-[#1a237e]">{company.amount}</span>
                          </div>
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
    </div>
  );
}