import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string; // emoji placeholder
}

const features: Feature[] = [
  {
    title: 'Automação Inteligente',
    description: 'Crie campanhas personalizadas com poucos cliques.',
    icon: '🤖',
  },
  {
    title: 'Análises Avançadas',
    description: 'Acompanhe métricas importantes em tempo real.',
    icon: '📊',
  },
  {
    title: 'Integração Fácil',
    description: 'Conecte suas ferramentas favoritas rapidamente.',
    icon: '🔌',
  },
  {
    title: 'Suporte Dedicado',
    description: 'Equipe pronta para auxiliar em qualquer etapa.',
    icon: '💬',
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div key={feat.title} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
