import React from 'react';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { shallow } from 'enzyme';
import MenuItem from '../../src/MenuItem';
import flatItems from '../fixtures/flat-items.json';

chai.use(spies);
chai.should();

describe('Menu Item Component', function () {
  it('should have same text as passed', function () {
    const textToCheck = 'some text';
    const wrapper = shallow(<MenuItem text={textToCheck} />);
    expect(wrapper.find('div').text()).to.equal(textToCheck);
  });

  it('should have same class as passed', function () {
    const classToCheck = 'someClass';
    const wrapper = shallow(<MenuItem itemClass={classToCheck} />);
    expect(wrapper.find('div').hasClass(classToCheck)).to.be.true;
  });

  it('should have an svg triangle when items were passed', function () {
    const wrapper = shallow(<MenuItem items={flatItems} />);
    expect(wrapper.find('svg').length).to.equal(1);
  });

  it('should have an triangle with the same class as passed when items were passed', function () {
    const classToCheck = 'someClass';
    const wrapper = shallow(<MenuItem triangleClassName={classToCheck} items={flatItems} />);
    expect(wrapper.find('svg').hasClass(classToCheck)).to.be.true;
  });

  it('should call mouse over callback when mouseenter', function () {
    const mouseOverHandler = function () {};
    const spy = chai.spy(mouseOverHandler);
    const wrapper = shallow(<MenuItem mouseOverHandler={spy} />);

    wrapper.find('div').first().simulate('mouseenter', { currentTarget: {} });
    spy.should.have.been.called.once();
  });

  it('should call mouse out callback in 500ms when mouseleave', (done) => {
    const mouseOutHandler = function () {};
    const menuHideDelay = 500;
    const spy = chai.spy(mouseOutHandler);
    const wrapper = shallow(<MenuItem mouseOutHandler={spy} />);

    wrapper.find('div').first().simulate('mouseleave', { currentTarget: {} });
    setTimeout(function () {
      spy.should.have.been.called.once();
      done();
    }, menuHideDelay);
  });
});
