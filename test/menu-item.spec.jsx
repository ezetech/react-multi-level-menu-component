import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MenuItem from '../src/menu-item';

describe('Menu Item Component', () => {
  it( 'should has same text as passed', () => {
    const textToCheck = 'some text';
    const wrapper = shallow(<MenuItem text={textToCheck} />);
    expect(wrapper.find('div').text()).to.equal(textToCheck);
  });
  it( 'should has same class as passed', () => {
    const classToCheck = 'someClass';
    const wrapper = shallow(<MenuItem itemClass={classToCheck} />);
    expect(wrapper.find('div').hasClass(classToCheck)).to.be.true;
  });
});