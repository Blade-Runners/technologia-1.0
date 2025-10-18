import React, { useState, useEffect } from 'react';

const IconDeploy = () => (
    <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);
const IconMonitor = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);
const IconDefend = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);
const IconRemediate = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const IconSecure = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const SvgPatternDeploy = () => <><path d="M50 50 L10 10 M50 50 L90 10 M50 50 L10 90 M50 50 L90 90 M50 50 L50 0 M50 50 L100 50 M50 50 L50 100 M50 50 L0 50" stroke="url(#grad)" strokeWidth="2"/><circle cx="50" cy="50" r="4" fill="url(#grad)"/></>
const SvgPatternMonitor = () => <><circle cx="50" cy="50" r="45" stroke="url(#grad)" strokeWidth="1.5" fill="none" /><circle cx="50" cy="50" r="30" stroke="url(#grad)" strokeWidth="1.5" fill="none" /><path d="M50 50 L95 50" stroke="url(#grad)" strokeWidth="2"/><circle cx="75" cy="50" r="3" fill="url(#grad)"/></>
const SvgPatternDefend = () => <><path d="M10 20 L50 5 L90 20 L90 50 L50 95 L10 50 Z" stroke="url(#grad)" strokeWidth="2" fill="none"/><path d="M30 30 L70 70 M70 30 L30 70" stroke="url(#grad)" strokeWidth="1.5" /></>
const SvgPatternRemediate = () => <><path d="M10 20 L30 20 L30 40 L50 40 M10 80 L30 80 L30 60 L50 60" stroke="url(#grad)" strokeWidth="2" fill="none" /><path d="M60 40 L75 55 L90 40" stroke="url(#grad)" strokeWidth="2.5" fill="none" /></>
const SvgPatternSecure = () => <><rect x="10" y="10" width="80" height="80" stroke="url(#grad)" strokeWidth="2" fill="none"/><path d="M10 50 L90 50 M50 10 L50 90" stroke="url(#grad)" strokeWidth="1.5"/><rect x="40" y="40" width="20" height="20" fill="url(#grad)"/></>

const HighlightedPoint = ({ text }) => {
    const highlights = {
        green: ['Deploys', 'Fetches', 'Performs', 'secure', 'Continuously monitors', 'real-time', 'Detects', 'instantly', 'Engages', 'Isolates', 'block', 'Automatically', 'apply', 'Generates actionable reports', 'Triggers automatically', 'Instantly revokes', 'Resets', 'eliminating'],
        red: ['tampering', 'unauthorized', 'suspicious', 'non-compliant', 'harmful', 'damage', 'privilege persistence'],
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


const workflowSteps = [
    {
        step: 1,
        title: "Deploy & Establish Baseline",
        description: [
            "Deploys the Auditron script onto the target system (Windows or Linux).",
            "Fetches the latest official CIS benchmarks for the detected OS.",
            "Performs a comprehensive initial scan to establish a verified secure baseline."
        ],
        icon: <IconDeploy />,
        pattern: <SvgPatternDeploy />,
        color: "text-sky-400",
    },
    {
        step: 2,
        title: "Continuous Vigilance",
        description: [
            "Runs as a high-privilege, protected subprocess to prevent tampering.",
            "Continuously monitors the system in real-time against the secure baseline.",
            "Detects unauthorized file changes, suspicious processes, and non-compliant configurations."
        ],
        icon: <IconMonitor />,
        pattern: <SvgPatternMonitor />,
        color: "text-blue-400",
    },
    {
        step: 3,
        title: "Instant Threat Response",
        description: [
            "Engages the active defense mechanism instantly upon threat detection.",
            "Isolates harmful processes to prevent them from causing further damage.",
            "Dynamically adjusts permissions to block unauthorized access in real-time."
        ],
        icon: <IconDefend />,
        pattern: <SvgPatternDefend />,
        color: "text-red-400",
    },
    {
        step: 4,
        title: "Automated Remediation",
        description: [
            "Automatically switches to secure networks to apply critical security patches.",
            "Generates actionable reports for issues requiring manual review.",
            "Provides clear, tailored advice through the web GUI to guide remediation."
        ],
        icon: <IconRemediate />,
        pattern: <SvgPatternRemediate />,
        color: "text-green-400",
    },
    {
        step: 5,
        title: "Secure Session Completion",
        description: [
            "Triggers automatically the moment any user session is terminated.",
            "Instantly revokes all temporary permissions granted during the session.",
            "Resets all folder and file permissions to their strictest default settings, eliminating privilege persistence."
        ],
        icon: <IconSecure />,
        pattern: <SvgPatternSecure />,
        color: "text-teal-300",
    },
];

