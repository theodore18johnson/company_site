import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import LandingContainer from './containers/LandingContainer';
import AboutContainer from './containers/AboutContainer';
import CareerContainer from './containers/CareerContainer';
import PresaleContainer from './containers/PresaleContainer';
import WalletConnect from './pages/WalletConnect';
import { useWallet } from './contexts/WalletContext';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { account } = useWallet();
  
  if (!account) {
    return <Navigate to="/connect" replace />;
  }
  
  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingContainer />,
      },
      {
        path: 'about',
        element: <AboutContainer />,
      },
      {
        path: 'careers',
        element: <CareerContainer />,
      },
      {
        path: 'connect',
        element: <WalletConnect />,
      },
      {
        path: 'presale',
        element: (
          <ProtectedRoute>
            <PresaleContainer />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router; 