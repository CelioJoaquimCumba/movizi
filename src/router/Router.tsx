import { ScrollRestoration, createBrowserRouter } from 'react-router-dom';

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
import { Admin } from '../pages/Admin/Admin';
import { AdminMovieDetails } from '../pages/Admin/MovieDetails';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'login',
        element: <><ScrollRestoration/><Login /></>
      },
      {
        path: 'register',
        element: <><ScrollRestoration/><Register /></>
      },
      {
        path: '',
        element: <><ScrollRestoration/><Home /></>
      },
      {
        path: 'movie/:id',
        element: <><ScrollRestoration/><MovieDetails /></>
      },
      {
        path: 'booking/:id',
        element: <><ScrollRestoration/><Booking /></>
      },
      {
        path: 'payment',
        element: <><ScrollRestoration/><Payment /></>
      },
      {
        path: 'payment-success/:id',
        element: <><ScrollRestoration/><PaymentSuccess /></>
      },
      {
        path: 'payment-failure',
        element: <><ScrollRestoration/><PaymentFailure /></>
      },
      {
        path: 'tickets',
        element: <><ScrollRestoration/><Tickets /></>
      },
      {
        path: 'ticket/:id',
        element: <><ScrollRestoration/><TicketDetails /></>
      },
    ]
  },
  {
        path: '/admin',
        children: [
          {
            path: '',
            element: <><ScrollRestoration/><Admin /></>
          },
          {
            path: 'movie',
            children: [
              {
                path: '',
                element: <><ScrollRestoration/><AdminMovieDetails /></>
              },
              {
                path: ':id',
                element: <><ScrollRestoration/><AdminMovieDetails /></>
              }
            ]
          },
        ]
  },
  {
    path: '/*',
    element: <div>404</div>
  }
]);

export { router };
