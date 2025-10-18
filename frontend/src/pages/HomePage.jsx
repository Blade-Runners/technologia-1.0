import React, { useState } from 'react';
import ShieldCheckIcon from '../components/ShieldCheckIcon';

const HomePage = ({ loggedIn }) => {
    
    const [selectedOS, setSelectedOS] = useState(null);
    
    const [notification, setNotification] = useState('');

    const handleRunAudit = async () => {
        if (!selectedOS) {
            showNotification("Please select an operating system first.");
            return;
        }
        
        showNotification(`Starting audit for ${selectedOS}...`);
        
        const auditScriptApiUrl = 'https://your-backend-api.com/run-audit';

        try{
            const response = await fetch(auditScriptApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ os: selectedOS }),
            });

            if (!response.ok) {
                throw new Error('Audit script failed to run on the server.');
            }

            const result = await response.json();
            
            console.log('Audit successful:', result);
            showNotification(`Audit for ${selectedOS} completed successfully!`);

        } catch (error) {
            console.error("Error running audit:", error);
            showNotification(`Error: Could not start the audit for ${selectedOS}.`);
        }
    };

    
    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification('');
        }, 3000); // Notification disappears after 3 seconds
    };
    
    // SVG icons for the OS selection cards
    const osIcons = {
        Windows: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                <path d="M3,12V3H12V12H3M3,21V13H12V21H3M13,3V12H21V3H13M13,21V13H21V21H13Z" />
            </svg>
        ),
        Linux: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                <path d="M14.5,13.23A3.18,3.18,0,0,1,12,14.73A3.18,3.18,0,0,1,9.5,13.23C9.5,11.73,12,6.27,12,6.27S14.5,11.73,14.5,13.23M12,2A10,10,0,0,0,2,12A10,10,0,0,0,12,22A10,10,0,0,0,22,12A10,10,0,0,0,12,2Z" />
            </svg>
        ),
    };

    return (
        <div>
            {/* Notification Area - appears when needed */}
            {notification && (
                <div className="fixed top-24 right-6 bg-slate-800 text-white py-2 px-5 rounded-lg shadow-lg border border-slate-700 z-50">
                    {notification}
                </div>
            )}
            
            {/* --- This is the main conditional rendering logic --- */}
            {loggedIn ? (
                // --- LOGGED-IN VIEW ---
                // Shows only the dashboard for selecting an OS and running an audit.
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                            Security Dashboard
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                        Select your operating system to begin a CIS compliance audit.
                    </p>

                    <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {['Windows', 'Linux'].map((os) => (
                            <div
                                key={os}
                                onClick={() => setSelectedOS(os)}
                                className={`p-6 bg-slate-800/50 rounded-2xl border-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center justify-center space-y-3
                                    ${selectedOS === os ? 'border-teal-400' : 'border-slate-700'}`
                                }
                            >
                                {osIcons[os]}
                                <span className="font-bold text-xl">{os}</span>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={handleRunAudit} 
                        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!selectedOS}
                    >
                        Run Audit
                    </button>
                </div>
            ) : (
                // --- LOGGED-OUT VIEW ---
                // Shows a welcome message and the "Why Choose Auditron" section.
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

                    {/* "Why Choose Auditron" Section */}
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
            )}
        </div>
    );
};

export default HomePage;


