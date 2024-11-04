import React from 'react';

export default function CompanyShowcase() {
  const companies = [
    {
      name: "TechCraft Solutions",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      category: "Technology",
      description: "Innovative software solutions for modern businesses"
    },
    {
      name: "Green Earth Co",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      category: "Sustainability",
      description: "Eco-friendly products for a better tomorrow"
    },
    {
      name: "Creative Minds",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      category: "Design",
      description: "Transforming ideas into visual experiences"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#1a237e] sm:text-4xl">
            Featured Companies
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover successful businesses in our network
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={company.image} alt={company.name} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#90caf9]">
                    {company.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#1a237e]">
                    {company.name}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {company.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#1a237e] hover:bg-[#283593]">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}