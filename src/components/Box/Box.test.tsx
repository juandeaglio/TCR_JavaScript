import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Box from './Box';
import React from 'react';

configure({ adapter: new Adapter() });
test('Create box in the center of screen', () => {
  const wrapper = shallow(<Box/>);
  const box = wrapper.find('[role="box"]');
  expect(box.exists()).toBe(true);

});