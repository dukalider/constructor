import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Lovable AI</h1>
        <p className="text-lg md:text-xl mb-8">
          Potencialize seu marketing com inteligência artificial de forma simples e eficiente.
        </p>
        <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-md shadow">
          Comece Agora
        </button>
      </div>
    </section>
  );
}
