import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MenuList from './menu-list.jsx';
import { flatItems } from './spec-helpers/items-config-mock.js';

describe('Menu List Component', () => {
  it( 'should be empty when items were not passed', () => {
    const listClass = 'someClass';
    const wrapper = shallow(<MenuList items={flatItems} listClass={listClass} />);
    expect(wrapper.find('listClass').isEmpty()).to.be.true;
  });
  it( 'should be empty when items were not passed', () => {
    const listClass = 'someClass';
    const wrapper = shallow(<MenuList show={true} listClass={listClass} />);
    expect(wrapper.find('listClass').isEmpty()).to.be.true;
  });
  it( 'should have inner div conainer when items were passed', () => {
    const wrapper = shallow(<MenuList show="true" items={flatItems} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it( 'should have inner div conainer with class which was passed', () => {
    const classToCheck = 'someClass';
    const wrapper = shallow(<MenuList show="true" items={flatItems} listClass={classToCheck} />);
    expect(wrapper.find('div').hasClass(classToCheck)).to.be.true;
  });
  it( 'should have inner div conainer with the same amount of items as were passed', () => {
    const itemsNumber = flatItems.length;
    const wrapper = mount(<MenuList show="true" items={flatItems} />);
    expect(wrapper.find('MenuItem').length).to.equal(itemsNumber);
  });
});