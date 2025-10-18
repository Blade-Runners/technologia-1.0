import React from 'react';

const Header = ({ setPage, loggedIn, setLoggedIn }) => {

    const handleSignOut = () => {
        
        setLoggedIn(false);
        setPage('home'); 
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-800">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                
                <div className="flex-1">
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="text-2xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                            Auditron
                        </span>
                    </a>
                </div>
                
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="text-slate-300 hover:text-teal-300 transition-colors">Home</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('project'); }} className="text-slate-300 hover:text-teal-300 transition-colors">About Auditron</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }} className="text-slate-300 hover:text-teal-300 transition-colors">How It Works</a>
                </div>
                
                
                <div className="flex-1 flex justify-end">
                    {loggedIn ? (
                         <button onClick={handleSignOut} className="bg-red-500/20 text-red-300 font-semibold py-2 px-4 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-colors">
                            Sign Out
                        </button>
                    ) : (
                        <button onClick={() => setPage('signin')} className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                            Sign In
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;