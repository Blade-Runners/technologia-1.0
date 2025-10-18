import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';



function App() {
  
  const [page, setPage] = useState('home');
  
  
  const [loggedIn, setLoggedIn] = useState(false); 
  
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    
    setShow(false);
    const timer = setTimeout(() => {
      setShow(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, [page]);

  
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage loggedIn={loggedIn} />;
      case 'project':
        return <ProjectPage />;
      case 'about':
        return <AboutPage />;
      case 'signin':
        return <SignInPage setPage={setPage} setLoggedIn={setLoggedIn} />;
      case 'signup':
        return <SignUpPage setPage={setPage} setLoggedIn={setLoggedIn} />;
      default:
        return <HomePage loggedIn={loggedIn} />;
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      
      <Header setPage={setPage} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      
      <main className="container mx-auto px-6 pt-28 pb-12 relative z-10">
         <div className={`transition-opacity duration-500 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}>
            {renderPage()}
         </div>
      </main>

      
      <Footer />
    </div>
  );
}

export default App;
