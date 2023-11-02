import {createBrowserRouter} from 'react-router-dom'
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { Booking } from '../pages/Booking';
import { Payment } from '../pages/Payment';
import { Register } from '../pages/Register';
import { PaymentSuccess } from '../pages/Payment-Success';
import { PaymentFailure } from '../pages/PaymentFailure';
import { Tickets } from '../pages/Tickets';
import { TicketDetails } from '../pages/TicketDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "",
                element: <Home/>
            },
            {
                path: "movie/:id",
                element: <MovieDetails/>
            },
            {
                path:"booking",
                element: <Booking/>
            },
            {
                path: "payment",
                element: <Payment/>
            },
            {
                path: "PaymentSuccess",
                element: <PaymentSuccess/>
            },
            {
                path: "PaymentFailure",
                element: <PaymentFailure/>
            },
            {
                path: "tickets",
                element: <Tickets/>
            },
            {
                path: "ticket/:id",
                element: <TicketDetails/>
            },
        ]
    },
    {
        path: "/*",
        element: <div>404</div>
    }
])