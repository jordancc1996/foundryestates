import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ClientSuccess: React.FC = () => {
  return (
    <section id="properties" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Property Showcase */}
          <div className="relative group animate-slide-in-left">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/elegant_property_interior_design_3.jpg"
                alt="The Beverly Hills Estate"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Property Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  The Beverly Hills Estate
                </h3>
                <Link
                  href="#contact"
                  className="inline-block text-white underline hover:no-underline transition-all duration-300 font-medium"
                >
                  View client success stories
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl mb-6 text-primary-950">
              Why do we do what we do?
            </h2>
            
            <p className="text-lg mb-8 text-gray-700">
              Foundry Estates was created to open the doors to the world's most exclusive homes.
            </p>

            <h3 className="text-xl font-semibold mb-6 text-primary-950">We aim to:</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-950 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Work closely with a select group of individuals to give them a dedicated, 
                  premium, and truly exceptional service.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-950 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Offer personable, bespoke, and detailed care that only an independent 
                  property consultant can offer.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-950 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Support our clients with the full property journey, from the initial 
                  enquiry stage to the final moment when the deal is complete.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

