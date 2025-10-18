import React from 'react';

const SignUpPage = ({ setPage, setLoggedIn }) => {
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Sign up successful (mock).");
        setLoggedIn(true);
        setPage('home');
    };

    return (
        <div className="max-w-md mx-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Create Account</h2>
            <form onSubmit={handleSignUp} className="space-y-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="name">Full Name</label>
                    <input type="text" id="name" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="email-signup">Email Address</label>
                    <input type="email" id="email-signup" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="password-signup">Password</label>
                    <input type="password" id="password-signup" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                    Sign Up
                </button>
            </form>
             <p className="text-center text-slate-400 mt-6">
                Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setPage('signin'); }} className="text-teal-400 hover:underline">Sign In</a>
            </p>
        </div>
    );
};

export default SignUpPage;
