import { createBrowserRouter } from "react-router-dom"
import LayOut from "../Components/Block/LayOut"
import LandingPage from "../Pages/LandingPage"
import AboutPage from "../Pages/AboutPage"

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            }
        ]
    }
])
