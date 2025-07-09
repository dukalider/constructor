import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-gray-300 text-center">
      <p className="text-sm">© {new Date().getFullYear()} Lovable AI. Todos os direitos reservados.</p>
    </footer>
  );
}
