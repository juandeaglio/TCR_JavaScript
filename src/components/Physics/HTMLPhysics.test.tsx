import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Box from '../Box/Box';
import React from 'react';
import HTMLPhysics from './HTMLPhysics';
import Direction from '../../Direction';

configure({ adapter: new Adapter() });
test('Move a box to the right', () => {
    const wrapper = shallow(<Box windowWidth={window.innerWidth} windowHeight={window.innerHeight} />);
    const box = wrapper.find('[role="box"]');
    expect(box.exists()).toBe(true);
    const physics = new HTMLPhysics();
    const createdStyle = physics.createMove(Direction.Right, 10)
    const actualStyle: React.CSSProperties = {
        transform: 'translate(10px, 0px)'
    };
    expect(createdStyle).toEqual(actualStyle);
});