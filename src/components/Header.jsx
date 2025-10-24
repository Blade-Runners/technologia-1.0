import React from 'react';

const Header = ({ setPage }) => {

    return (
        <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-800">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="text-2xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 font-mono">
                        Auditron
                    </span>
                </a>
                
                
                <div className="hidden md:flex items-center space-x-6 mr-24">
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="text-slate-300 hover:text-teal-300 transition-colors">Dashboard</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('project'); }} className="text-slate-300 hover:text-teal-300 transition-colors">About Auditron</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }} className="text-slate-300 hover:text-teal-300 transition-colors">How It Works</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('download'); }} className="text-slate-300 hover:text-teal-300 transition-colors">Download</a>
                </div>

                <div className="flex items-center">
                    
                </div>
            </nav>
        </header>
    );
};

export default Header;