import React, { useState, useEffect } from 'react';

import ShieldCheckIcon from '../components/ShieldCheckIcon';





const HighlightedPoint = ({ text }) => {

    

    const highlights = {

        green: ['automated', 'securely', 'protects', 'prevents', 'proactive', 'efficiently', 'continuously', 'secure', 'confidential', 'actionable insights', 'always', 'instantly', 'real-time', 'integrated', 'holistic', 'active defense'],

        red: ['vulnerabilities', 'tampering', 'harmful', 'unauthorized access', 'threats', 'manual audits', 'error-prone', 'slow', 'time-consuming', 'manpower', 'fragmented', 'disjointed', 'passive reporting', 'data overload', 'alert fatigue'],

    };



    

    const createMarkup = () => {

        let highlightedHtml = text;

        

        highlights.green.forEach(word => {

            const regex = new RegExp(`\\b(${word})\\b`, 'gi');

            highlightedHtml = highlightedHtml.replace(regex, `<span class="font-semibold text-green-400">$1</span>`);

        });



        highlights.red.forEach(word => {

            const regex = new RegExp(`\\b(${word})\\b`, 'gi');

            highlightedHtml = highlightedHtml.replace(regex, `<span class="font-semibold text-red-400">$1</span>`);

        });

        

        return { __html: highlightedHtml };

    };



    return <li className="pl-2" dangerouslySetInnerHTML={createMarkup()} />;

};





const problemData = {

    title: "The Core Security Challenge",

    points: [

        "Manual audits are slow, time-consuming, and require significant manpower, making them expensive and inefficient.",

        "Cybersecurity threats evolve daily, and manual checks often fail to keep pace, leaving systems exposed to new vulnerabilities.",

        "Maintaining consistent compliance across multiple systems and platforms is complex and error-prone.",

        "Privilege persistence after a user session ends is a major risk factor for unauthorized access."

    ]

};





const solutionData = {

    title: "The Auditron Solution",

    points: [

        "Auditron provides a vigilant, automated guardian that continuously monitors your systems, freeing up your team.",

        "It offers proactive threat management by isolating harmful processes and applying patches before they can be exploited.",

        "Our platform ensures streamlined, consistent CIS compliance across your entire IT infrastructure.",

        "The Secure Sign-Out protocol instantly resets permissions, eliminating risks from lingering user privileges."

    ]

};





const featuresInDepthData = [

    {

        icon: <ShieldCheckIcon />,

        title: "Automated Auditing Engine",

        description: "The core of Auditron is its relentless, automated script that runs continuously in the background. It meticulously checks your system configurations against the official Center for Internet Security (CIS) benchmarks, the gold standard for secure system setup.",

        benefits: [

            "Eliminates the need for slow, error-prone, and expensive manual audits.",

            "Provides compliance status, so you are always aware of your security posture.",

            "Frees up your security team to focus on strategic initiatives instead of repetitive manual checks."

        ]

    },

    {

        icon: <ShieldCheckIcon />,

        title: "Dynamic Permission Control",

        description: "Auditron features an intelligent and adaptive permission management system. It goes beyond static roles by dynamically adjusting file and folder access rights based on the user's current role, ongoing activities, and security context.",

        benefits: [

            "Prevents unauthorized access to sensitive data by ensuring privileges are granted only when necessary.",

            "Adapts to your team's workflow without compromising on security.",

            "A core component for maintaining a zero-trust security posture across your organization."

        ]

    },

    {

        icon: <ShieldCheckIcon />,

        title: "Proactive Process Isolation",

        description: "This is Auditron's active defense mechanism. Operating with elevated privileges, the script can identify and isolate suspicious or harmful processes in real-time, preventing them from causing damage or escalating their privileges.",

        benefits: [

            "Actively prevents tampering and stops attacks before they can spread.",

            "Protects against emerging threats with automated, secure patching capabilities.",

            "Safeguards your system's integrity by stopping vulnerabilities at the source."

        ]

    },

    {

        icon: <ShieldCheckIcon />,

        title: "Tailored Security Advice",

        description: "Auditron doesn't just identify problems; it helps you solve them. Instead of generic pass/fail reports, our system provides clear, tailored recommendations based on your specific compliance data.",

        benefits: [

            "Turns complex security data into simple, actionable insights for your team.",

            "Helps you efficiently prioritize and address the most critical security gaps first.",

            "Empowers your team to improve their security knowledge and practices over time."

        ]

    },

    {

        icon: <ShieldCheckIcon />,

        title: "Intuitive Reporting WebUI",

        description: "All of this power is managed through a clean, intuitive Graphical User Interface. The dashboard is designed to be accessible for everyone, from highly technical security engineers to non-technical stakeholders.",

        benefits: [

            "Delivers clear, real-time compliance data with easy-to-understand visualizations.",

            "Allows for one-click report generation, live system monitoring, and seamless update management.",

            "Promotes a culture of security awareness across the entire organization."

        ]

    }

];





const uniqueFeaturesData = [

    {

        title: "From Detection to Remediation",

        argument: "Most security tools are limited to passive reporting. They'll tell you about hundreds of vulnerabilities but leave the critical, time-consuming task of patching and fixing them entirely up to your team.",

        unique_solution: "Auditron closes the remediation gap. We provide active defense by automatically applying necessary patches and isolating threats. We don't just find problems—we actively fix them, drastically reducing your system's window of exposure.",

        stat: "Studies from the Ponemon Institute show the average time to patch a critical vulnerability can be over 60 days, leaving a massive window for attackers."

    },

    {

        title: "From Data Overload to Actionable Intelligence",

        argument: "Competitors often overwhelm security teams with massive, jargon-filled reports. This leads to 'alert fatigue,' where important warnings are lost in the noise, and teams don't know where to start.",

        unique_solution: "Auditron is designed to provide intelligence, not just data. We deliver tailored, context-aware recommendations. Instead of just flagging an issue, we explain the risk and provide clear steps to resolve it, empowering your team to act decisively.",

        stat: "According to a 2023 survey, 45% of cybersecurity professionals say they are so inundated with alerts that they can't effectively prioritize them, leading to critical threats being missed."

    },

    {

        title: "Holistic Security Integration",

        argument: "Many organizations use fragmented tools: one for compliance, another for permissions, and a third for threat response. This disjointed approach creates security gaps and increases complexity.",

        unique_solution: "Auditron provides a truly integrated, holistic solution. Our features work in tandem, creating a unified defense that closes the gaps competitors' fragmented solutions leave open.",

        stat: "Gartner predicts that by 2025, organizations that adopt a cybersecurity mesh architecture to integrate their tools will reduce the financial impact of security incidents by an average of 90%."

    },

    {

        title: "Zero-Persistence Security Model",

        argument: "Many platforms fail to address the critical risk of privilege persistence. A compromised account with lingering permissions after a session ends can lead to catastrophic data breaches.",

        unique_solution: "Auditron is built on a zero-persistence model. The moment a session ends, all temporary privileges are revoked. This fundamental design principle is something most competitors treat as an afterthought.",

        stat: "According to Verizon's 2024 Data Breach Investigations Report, the use of stolen credentials remains one of the most common paths for attackers to gain initial access."

    }

];





const ProjectPage = () => {

    

    const [isVisible, setIsVisible] = useState(false);



    useEffect(() => {

        

        const timer = setTimeout(() => {

            setIsVisible(true);

        }, 100);

        return () => clearTimeout(timer);

    }, []);



    return (

        

        <div className="space-y-20">

            

            

            <div className="text-center">

                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">

                        About Auditron

                    </span>

                </h1>

                <p className="text-lg text-slate-300 max-w-3xl mx-auto">

                    A multi-layered defense system for modern IT infrastructure.

                </p>

            </div>



            

            <div className="grid md:grid-cols-2 gap-8 text-left">

                

                <div 

                    className={`bg-slate-800/50 p-8 rounded-2xl border border-slate-700 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}

                >

                    <h2 className="text-2xl font-bold text-red-400 mb-4">{problemData.title}</h2>

                    <ul className="space-y-3 list-disc list-inside text-slate-300 leading-relaxed">

                        {problemData.points.map((point, index) => (

                           <li key={index}>{point}</li>

                        ))}

                    </ul>

                </div>

                

                

                <div 

                    className={`bg-slate-800/50 p-8 rounded-2xl border border-slate-700 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} 

                    style={{ transitionDelay: '150ms' }}

                >

                    <h2 className="text-2xl font-bold text-teal-300 mb-4">{solutionData.title}</h2>

                    <ul className="space-y-3 list-disc list-inside text-slate-300 leading-relaxed">

                         {solutionData.points.map((point, index) => (

                           <li key={index}>{point}</li>

                        ))}

                    </ul>

                </div>

            </div>

            

            

            <div>

                <h2 className="text-3xl font-bold text-center mb-12 text-white">Features In-Depth</h2>

                <div className="grid grid-cols-1 gap-12">

                    {featuresInDepthData.map((feature, index) => (

                        <div

                            key={feature.title}

                            className={`bg-slate-800/60 p-8 rounded-2xl border border-slate-700 transition-all duration-500 ease-out hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/10 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}

                            style={{ transitionDelay: `${200 + index * 100}ms` }}

                        >

                            <div className="flex items-center mb-5">

                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/50 border border-slate-600 mr-4">

                                    <div className="w-7 h-7 text-teal-400">{feature.icon}</div>

                                </div>

                                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>

                            </div>

                            <p className="mb-5 text-slate-300 leading-relaxed">{feature.description}</p>

                            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">

                                 <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>

                                <ul className="space-y-3 list-disc list-inside text-slate-300 leading-relaxed">

                                    {feature.benefits.map((point, i) => (

                                        <HighlightedPoint key={i} text={point} />

                                    ))}

                                </ul>

                            </div>

                        </div>

                    ))}

                </div>

            </div>



            

            <div>

                <h2 className="text-3xl font-bold text-center mb-12 text-white">

                    What Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Auditron</span> Unique?

                </h2>

                <div className="grid grid-cols-1 gap-12">

                     {uniqueFeaturesData.map((feature, index) => (

                        <div

                            key={feature.title}

                            className={`bg-slate-800/60 p-8 rounded-2xl border-2 border-teal-500/30 transition-all duration-500 ease-out hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/20 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}

                            style={{ transitionDelay: `${800 + index * 100}ms` }}

                        >

                            <h3 className="text-2xl font-bold text-center text-white mb-6">{feature.title}</h3>

                            <div className="grid md:grid-cols-2 gap-8">

                                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">

                                    <h4 className="font-semibold text-red-400 mb-2">The Market Gap</h4>

                                    <p className="text-slate-400">{feature.argument}</p>

                                </div>

                                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">

                                    <h4 className="font-semibold text-green-400 mb-2">The Auditron Advantage</h4>

                                    <p className="text-slate-400">{feature.unique_solution}</p>

                                </div>

                            </div>

                            <div className="mt-6 text-center bg-slate-700/50 p-4 rounded-lg">

                                <p className="text-slate-300 italic"><span className="font-bold text-teal-400">By the numbers:</span> {feature.stat}</p>

                            </div>

                        </div>

                     ))}

                </div>

            </div>

        </div>

    );

};



export default ProjectPage;
