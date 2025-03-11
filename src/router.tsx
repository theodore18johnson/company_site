import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingContainer from './containers/LandingContainer';
import AboutContainer from './containers/AboutContainer';
import CareerContainer from './containers/CareerContainer';
import PresaleContainer from './containers/PresaleContainer';

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
        path: 'presale',
        element: <PresaleContainer />,
      },
    ],
  },
]);

export default router; 