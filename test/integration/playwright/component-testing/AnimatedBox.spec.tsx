// @ts-check
import React, { useState, useEffect } from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

interface ElementEditorProps {
    numElements: number;
    elements: Element[];
    setElements: React.Dispatch<React.SetStateAction<Element[]>>;
    onCollision?: (collidedElements: Element[]) => void; // Optional onCollision prop
  }

const ElementEditor = ({numElements, elements, setElements, onCollision,}: ElementEditorProps) => {
    return(<></>);
}
const TestApp = () => {
    const [numElements, setNumElements] = useState<number>(2);
    const [elements, setElements] = useState<Element[]>([]);

    useEffect(() => {
        setNumElements(1);
    }, []);

    return(
        <div>
            <ElementEditor 
                numElements={numElements}
                elements={elements}
                setElements={setElements}
            />
        </div>
    );
}

test("Create an environment with a Box", async({ mount, page }) => {
    const component = await mount(<TestApp />);
});