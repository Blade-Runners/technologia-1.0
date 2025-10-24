import React from 'react';
import ShieldCheckIcon from '../components/ShieldCheckIcon';

const HomePage = () => {
    return (
        <div className="space-y-16">
            <div className="text-center pt-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                        Welcome to Auditron
                    </span>
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    Automated security auditing and compliance monitoring to protect your IT infrastructure from vulnerabilities.
                </p>
            </div>

            
            <div>
                <h2 className="text-3xl font-bold text-center mb-10 text-white">Why Choose Auditron?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Automated Auditing", description: "Continuously monitors for CIS compliance across operating systems." },
                        { title: "Dynamic Permissions", description: "Adjusts access rights based on user roles and real-time activities." },
                        { title: "Process Isolation", description: "Isolates dangerous processes and applies patches automatically." },
                        { title: "Secure Sign-Out", description: "Folder permissions reset to the strictest setting upon user sign-out." },
                        { title: "Tailored Advice", description: "Provides recommendations based on real-time compliance data." },
                        { title: "Intuitive GUI", description: "Easy-to-use interface for reporting, updates, and live monitoring." }
                    ].map(feature => (
                        <div key={feature.title} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10">
                            <div className="flex items-center mb-3">
                                <ShieldCheckIcon className="w-7 h-7 text-teal-400 mr-3" />
                                <h3 className="font-bold text-xl text-white">{feature.title}</h3>
                            </div>
                            <p className="text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;


