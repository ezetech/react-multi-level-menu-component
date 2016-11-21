import React from 'react';
import ReactDOM from 'react-dom';
import { default as chai, expect } from 'chai';
import spies from 'chai-spies';
import { shallow, mount } from 'enzyme';
import MenuList from '../src/menu-list';
import flatItems from './fixtures/flat-items.json';
import deepItems from './fixtures/deep-items.json';

chai.use(spies);
chai.should();

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
describe('Menu List Component - Hover on item: ', () => {
    it( 'menu item which has it\'s own items should have inner list when hovered', () => {
      const itemClass = 'itemClass';
      const listClass = 'listClass';
      const itemSelector = '.' + itemClass;
      const listSelector = '.' + listClass;

      const wrapper = mount(<MenuList show="true" items={deepItems} listClass={listClass} itemClass={itemClass} />);
      wrapper.find(itemSelector).first().simulate('mouseenter');
      console.log(wrapper.find(itemSelector).first().find(listSelector));
      expect(wrapper.find(itemSelector).first().find(listSelector).length).to.equal(1);
  });
  it( 'menu item which has not it\'s own items should not have inner list when hovered', () => {
      const itemClass = 'itemClass';
      const listClass = 'listClass';
      const itemSelector = '.' + itemClass;
      const listSelector = '.' + listClass;

      const wrapper = mount(<MenuList show="true" items={flatItems} listClass={listClass} itemClass={itemClass} />);
      wrapper.find(itemSelector).first().simulate('mouseover');
      expect(wrapper.find(itemSelector).first().find(listSelector).length).to.equal(0);
  });
});
describe('Menu List Component - Click on item:', () => {
  it( 'menu item which has it\'s own items should not trigger callback passed to component with item\'s name', () => {
      const itemClass = 'itemClass';
      const listClass = 'listClass';
      const itemSelector = '.' + itemClass;
      const listSelector = '.' + listClass;
      const clickItemCallback = function (itemName) {}
      const spy = chai.spy(clickItemCallback);


      const wrapper = mount(<MenuList 
        show="true" items={deepItems} 
        clickItemCallback={clickItemCallback}
        listClass={listClass} itemClass={itemClass} />);

      wrapper.find(itemSelector).first().simulate('click');
      spy.should.not.have.been.called();
  });
  it( 'menu item which has not it\'s own items should trigger callback passed to component with item\'s name', () => {
      const itemClass = 'itemClass';
      const listClass = 'listClass';
      const itemSelector = '.' + itemClass;
      const listSelector = '.' + listClass;
      const clickItemCallback = function (itemName) {}
      const spy = chai.spy(clickItemCallback);


      const wrapper = mount(<MenuList 
        show="true" items={flatItems} 
        clickItemCallback={spy}
        listClass={listClass} itemClass={itemClass} />);

      wrapper.find(itemSelector).first().simulate('click');
      spy.should.have.been.called.with(flatItems[0].name);
  });
});