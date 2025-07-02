import React from 'react';

export const OpeningStatement: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl text-center mb-12 text-primary-950 animate-fade-in">
          Opening doors to the world's most exclusive homes
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="animate-slide-in-left">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Foundry Estates is a boutique property consultancy offering exclusive, hard-to-find 
              properties from $10m to in excess of $200m with a focus on prime luxury markets. 
              We pride ourselves on operating with complete discretion, integrity, and confidentiality. 
              Whether you're buying, selling, renting, investing, or in need of an asset manager, 
              we'll guide you every step of the way with our uniquely personable and bespoke service.
            </p>
          </div>

          {/* Service Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="service-box service-box-buying">
              <h3 className="text-xl font-semibold mb-3 text-primary-950">Buying</h3>
              <p className="text-gray-700">
                We understand the nuances of buying a home, and how personal that process can be. 
                Drawing on our unrivalled experience and networks, we'll make sure your journey 
                is smooth and stress-free.
              </p>
            </div>

            <div className="service-box service-box-selling">
              <h3 className="text-xl font-semibold mb-3 text-primary-950">Selling</h3>
              <p className="text-gray-700">
                Our aim is to achieve the best possible return for you. We often achieve 
                significantly above the asking price for our clients and have extensive 
                experience in selling some of the world's most luxurious homes.
              </p>
            </div>

            <div className="service-box service-box-consulting">
              <h3 className="text-xl font-semibold mb-3 text-primary-950">Consulting</h3>
              <p className="text-gray-700">
                We provide a variety of bespoke advisory and consultancy services, including 
                property management, investment opportunities and rentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

