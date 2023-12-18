import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Landings, { landingLoader, landingsAction } from "../pages/Landings";
import Auth from "../pages/Auth";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Tutorial from "../pages/Tutorial";
import ShowLanding from "../pages/ShowLanding";

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
                path: 'tutorial',
                element: (<ProtectedRoute><Tutorial /></ProtectedRoute>)
            },
            {
                path: 'landings',
                action: landingsAction,
                loader: landingLoader,
                //добавлен защищённый роут, тк только зареганные могут иметь доступ к лендингам
                element: (<ProtectedRoute><Landings /></ProtectedRoute>)
            },
            {
                path: 'landings/show',
                element: (<ProtectedRoute><ShowLanding /></ProtectedRoute>)
            },
            {
                path: 'auth',
                element: <Auth />
            }
        ]
    },
])