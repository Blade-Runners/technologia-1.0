import React from 'react';

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 text-center py-6 text-slate-400">
    <div className="container mx-auto px-6">
      <p>&copy; {new Date().getFullYear()} Blade Runners. All rights reserved.</p>
      <p className="text-sm mt-2">Automating Security with Precision.</p>
    </div>
  </footer>
);

export default Footer;