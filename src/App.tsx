import { Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import "@fontsource/cinzel-decorative";
import { WalletProvider } from './contexts/WalletContext';

function App() {
  return (
    <WalletProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;
