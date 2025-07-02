import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { OpeningStatement } from '@/components/OpeningStatement';
import { ClientSuccess } from '@/components/ClientSuccess';
import { Contact } from '@/components/Contact';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <OpeningStatement />
      
      {/* Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl mb-8 text-primary-950 animate-fade-in">
            Experience and expertise
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl animate-slide-up">
            Our team is exceptionally talented at bringing together their inside knowledge and 
            extensive contact list to source the most sought-after and unseen properties. With more 
            than 18 years in the property industry and having amassed a long-established network of 
            trusted partners, our team has an established track record and is trusted to oversee 
            the largest and most complex property deals, from negotiation through to fruition.
          </p>
        </div>
      </section>

      <ClientSuccess />

      {/* Our Approach Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl mb-8 text-primary-950 animate-fade-in">
            Our approach
          </h2>
          <p className="text-lg mb-12 text-gray-700 max-w-3xl animate-slide-up">
            Our vision is to become the leading independent property consultancy, driven by 
            three principles that apply to everything we do:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg animate-slide-in-left">
              <h3 className="text-xl font-semibold mb-4 text-primary-950">
                Absolute discretion
              </h3>
              <p className="text-gray-700">
                The relationships we build are founded on trust and respect. Many of our clients 
                decide to use our services time and time again. We always practice complete 
                discretion, confidentiality, and integrity.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-primary-950">
                Expert knowledge and experience
              </h3>
              <p className="text-gray-700">
                With our expertise and experience, we can identify the best opportunities and 
                make sure all transactions complete smoothly. We'll anticipate any issues before 
                they arise and take care of all the details on your behalf.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg animate-slide-in-right">
              <h3 className="text-xl font-semibold mb-4 text-primary-950">
                Tailored personal service
              </h3>
              <p className="text-gray-700">
                At Foundry Estates, we pride ourselves on offering a personal, one-to-one service, 
                with each client receiving continuity of care from a trusted team member throughout 
                their property journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl mb-8 text-primary-950 animate-fade-in">
            About Us
          </h2>
          <div className="max-w-4xl space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 animate-slide-up">
              Foundry Estates was founded by industry veterans with an expansive range of experience 
              in the luxury residential property market. Our team devotes their time to finding and 
              selling properties that realise our clients' property ambitions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 animate-slide-up">
              Our leadership has enjoyed a varied and diverse career in the property industry, with 
              extensive experience advising buyers, sellers, and developers in prime luxury markets. 
              We have also served as global wealth ambassadors, advising high-net-worth clients 
              seeking to invest in premium real estate.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </Layout>
  );
};

export default HomePage;

