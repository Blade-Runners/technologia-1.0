import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import DownloadPage from './pages/DownloadPage'; // Import the new Download page

// You can remove the default './App.css' import if you are only using Tailwind CSS.
// import './App.css' 

function App() {
  // This state determines which page is currently shown to the user.
  const [page, setPage] = useState('home');
  
  // This state is used to create a fade-in effect when changing pages.
  const [show, setShow] = useState(false);

  useEffect(() => {
    // When the 'page' state changes, this triggers the fade-in animation.
    setShow(false);
    const timer = setTimeout(() => {
      setShow(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, [page]);

  // This function decides which page component to render based on the 'page' state.
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'project':
        return <ProjectPage />;
      case 'about':
        return <AboutPage />;
      case 'download': // Add the case for the new Download page
        return <DownloadPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      {/* This div creates the subtle grid background pattern inspired by the reference site */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* The Header is always visible at the top */}
      <Header setPage={setPage} />

      {/* The main content area where the current page is rendered */}
      <main className="container mx-auto px-6 pt-28 pb-12 relative z-10">
         <div className={`transition-opacity duration-500 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}>
            {renderPage()}
         </div>
      </main>

      {/* The Footer is always visible at the bottom */}
      <Footer />
    </div>
  );
}

export default App;