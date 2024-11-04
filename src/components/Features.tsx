import React from 'react';
import { Building2, DollarSign, Users, Megaphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-[#90caf9]" />,
      title: "Company Registration",
      description: "Create your company profile and showcase your products and services to a targeted audience."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#90caf9]" />,
      title: "Business Funding",
      description: "Access flexible funding options through Visio AI Company to fuel your growth."
    },
    {
      icon: <Megaphone className="h-8 w-8 text-[#90caf9]" />,
      title: "Daily Advertising Pool",
      description: "Participate in our $1/day advertising pool for a chance to boost your company's visibility."
    },
    {
      icon: <Users className="h-8 w-8 text-[#90caf9]" />,
      title: "Brand Representatives",
      description: "Connect with public personalities to represent your brand and amplify your reach."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#1a237e] sm:text-4xl">
            Empower Your Business Growth
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to scale your business, all in one place.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#1a237e] rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-[#1a237e] tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}