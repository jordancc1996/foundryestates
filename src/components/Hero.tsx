import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury_real_estate_photography_1.jpg"
          alt="Luxury Property"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in">
            Bespoke property services
            <br />
            <span className="font-normal">with a personal touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            A boutique property consultancy specializing in luxury real estate
          </p>
          
          <Link
            href="#about"
            className="inline-flex items-center px-8 py-4 bg-white/90 text-primary-950 font-semibold rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 animate-slide-up"
          >
            Find out more
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-80">Scroll to explore</span>
          <div className="w-px h-8 bg-white/60"></div>
        </div>
      </div>
    </section>
  );
};

