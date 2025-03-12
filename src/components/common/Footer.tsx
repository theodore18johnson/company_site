import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-900/80 backdrop-blur-md py-12 border-t border-primary-900/30 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold gradient-text">KingOverRoad</span>
            </Link>
            <p className="text-gray-400 mb-4">
              The future of metaverse gaming powered by DWAT token and the Zeus AI engine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/presale" className="text-gray-400 hover:text-white transition-colors">Token Presale</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest news about KingOverRoad</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-dark-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KingOverRoad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 