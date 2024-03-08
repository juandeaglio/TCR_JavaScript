import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './testStyles.css';
import TestApp2 from './testIndex2';
import TestApp from './testApp';
import './defaultTestSizes';


const router = createBrowserRouter([
    {
        path: "/",
        element: <TestApp />
    },
    {
        path: "test_2/",
        element: <TestApp2 />
    }
])
const portalDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(portalDiv);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);