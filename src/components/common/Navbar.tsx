import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import { useWallet } from '../../contexts/WalletContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { account } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/80 backdrop-blur-md py-3' : 'bg-dark-900/30 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-16" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`m-auto transition-colors ${isActive('/') ? 'text-primary-400' : 'text-white hover:text-primary-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`m-auto transition-colors ${isActive('/about') ? 'text-primary-400' : 'text-white hover:text-primary-300'}`}
            >
              About
            </Link>
            <Link 
              to="/careers" 
              className={`m-auto transition-colors ${isActive('/careers') ? 'text-primary-400' : 'text-white hover:text-primary-300'}`}
            >
              Careers
            </Link>
            <Link 
              to={account ? "/presale" : "/connect"} 
              className="btn-primary px-4 py-2"
            >
              {account ? "Token Presale" : "Connect Wallet"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-dark-900/90 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-primary-400' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-primary-400' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/careers" 
                className={`transition-colors ${isActive('/careers') ? 'text-primary-400' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to={account ? "/presale" : "/connect"}
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {account ? "Token Presale" : "Connect Wallet"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 