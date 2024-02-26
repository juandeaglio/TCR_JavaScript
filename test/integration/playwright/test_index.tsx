import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BoxWithPhysics } from '../../../src/components/Box/BoxWithPhysics'
import { HTMLPhysics } from '../../../src/components/Physics/HTMLPhysics'
import Direction from '../../../src/Direction';
import './testStyles.css'
import TestApp2 from './test_index2'

const physics: HTMLPhysics = new HTMLPhysics();
const MAX_WIDTH: number = 1024;
const MAX_HEIGHT: number = 1024;

const TestApp = () => (
    <div>
        <svg width={MAX_WIDTH} height={MAX_HEIGHT}>
            <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} />
        </svg>
    </div>
);

// ReactDOM.render(<TestApp />, document.getElementById('root'));


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


export default {MAX_WIDTH, MAX_HEIGHT};