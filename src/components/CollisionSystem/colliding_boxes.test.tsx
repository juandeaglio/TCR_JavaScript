import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from '../../MyComponent';
import '@testing-library/jest-dom';

test('renders MyComponent correctly', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
});