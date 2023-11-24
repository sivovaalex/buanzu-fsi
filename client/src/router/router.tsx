import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Landings from "../pages/Landings";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'landings',
                element: <Landings />
            },
            {
                path: 'auth',
                element: <Auth />
            }
        ]
    },
])