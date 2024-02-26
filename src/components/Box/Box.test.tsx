import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Box from './Box';
import React from 'react';

configure({ adapter: new Adapter() });
test('Create box in the center of screen', () => {
  const wrapper = shallow(<Box x={window.innerWidth/2} y={window.innerHeight/2} />);
  const box = wrapper.find('[role="box"]');
  expect(box.exists()).toBe(true);

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  expect(box.prop('x')).toEqual(centerX);
  expect(box.prop('y')).toEqual(centerY);
  //check for attribute data-collision-count
  expect(box.prop('data-collision-count')).toEqual(0);
});