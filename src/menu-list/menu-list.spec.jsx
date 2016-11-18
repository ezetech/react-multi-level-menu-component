import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MenuList from './menu-list.jsx';
import { flatItems } from './spec-helpers/items-config-mock.js';
import { deepItems } from './spec-helpers/items-config-mock.js';

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
describe('Menu List Component - Hover on item', () => {
    it( 'menu item which have it\'s own items should have inner list when hovered', () => {
      const itemClass = 'itemClass';
      const listClass = 'listClass';
      const itemSelector = '.' + itemClass;
      const listSelector = '.' + listClass;

      const wrapper = mount(<MenuList show="true" items={deepItems} listClass={listClass} itemClass={itemClass} />);
      wrapper.find(itemSelector).first().simulate('mouseover');
      expect(wrapper.find(itemSelector).first().find(listSelector).length).to.equal(1);
  });
  it( 'menu item which have not it\'s own items should not have inner list when hovered', () => {
      const itemClass = 'itemClass';
      const listClass = 'listClass';
      const itemSelector = '.' + itemClass;
      const listSelector = '.' + listClass;

      const wrapper = mount(<MenuList show="true" items={flatItems} listClass={listClass} itemClass={itemClass} />);
      wrapper.find(itemSelector).first().simulate('mouseover');
      expect(wrapper.find(itemSelector).first().find(listSelector).length).to.equal(0);
  });
});