import React from 'react';
import {createRoot} from 'react-dom/client';

const MAX_WIDTH: number = 1024;
const MAX_HEIGHT: number = 1024;

const ProdApp = () => (
    <div>
        Hello, World!
    </div>
);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<ProdApp />);

export default {MAX_WIDTH, MAX_HEIGHT};