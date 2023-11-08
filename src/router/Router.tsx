import { createBrowserRouter } from 'react-router-dom';

// Import your page components
import { 
  Login, 
  Home, 
  MovieDetails, 
  Booking, 
  Payment, 
  Register, 
  PaymentSuccess, 
  PaymentFailure, 
  Tickets, 
  TicketDetails 
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '',
        element: <Home />
      },
      {
        path: 'movie/:id',
        element: <MovieDetails />
      },
      {
        path: 'booking/:id',
        element: <Booking />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'payment-success/:id',
        element: <PaymentSuccess />
      },
      {
        path: 'payment-failure',
        element: <PaymentFailure />
      },
      {
        path: 'tickets',
        element: <Tickets />
      },
      {
        path: 'ticket/:id',
        element: <TicketDetails />
      },
    ]
  },
  {
    path: '/*',
    element: <div>404</div>
  }
]);

export { router };
