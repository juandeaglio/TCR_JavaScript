import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Box from '../../src/components/Box/Box';
import React from 'react';

configure({ adapter: new Adapter() });
test('Create box in the center of screen', () => {
  const wrapper = shallow(<Box windowWidth={window.innerWidth} windowHeight={window.innerHeight} />);
  const box = wrapper.find('[role="box"]');
  expect(box.exists()).toBe(true);

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  expect(box.prop('x')).toEqual(centerX);
  expect(box.prop('y')).toEqual(centerY);
});