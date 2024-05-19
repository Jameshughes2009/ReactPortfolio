import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Work from "./pages/Work.jsx";
import Resume from "./pages/Resume.jsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "/Work",
                element: <Work />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "Resume",
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)