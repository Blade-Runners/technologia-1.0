import React from 'react';

const DownloadPage = () => {
    
    const downloadLinks = {
        Windows: '/audit-script-windows.ps1', 
        Linux: '/audit-script-linux.sh',   
    };

    return (
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                    Get Started with Auditron
                </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
                Download the script for your operating system and start securing your infrastructure today.
            </p>

            <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Windows Download Card */}
                <a 
                    href={downloadLinks.Windows} 
                    download
                    className="group p-8 bg-slate-800/50 rounded-2xl border-2 border-slate-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 flex flex-col items-center justify-center space-y-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                        <path d="M3,12V3H12V12H3M3,21V13H12V21H3M13,3V12H21V3H13M13,21V13H21V21H13Z" />
                    </svg>
                    <span className="font-bold text-2xl text-white">Download for Windows</span>
                    <span className="text-slate-400">(.ps1 script)</span>
                </a>
                {/* Linux Download Card */}
                <a 
                    href={downloadLinks.Linux} 
                    download
                    className="group p-8 bg-slate-800/50 rounded-2xl border-2 border-slate-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-yellow-400 flex flex-col items-center justify-center space-y-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">
                        <path d="M14.5,13.23A3.18,3.18,0,0,1,12,14.73A3.18,3.18,0,0,1,9.5,13.23C9.5,11.73,12,6.27,12,6.27S14.5,11.73,14.5,13.23M12,2A10,10,0,0,0,2,12A10,10,0,0,0,12,22A10,10,0,0,0,22,12A10,10,0,0,0,12,2Z" />
                    </svg>
                    <span className="font-bold text-2xl text-white">Download for Linux</span>
                    <span className="text-slate-400">(.sh script)</span>
                </a>
            </div>
        </div>
    );
};

export default DownloadPage;