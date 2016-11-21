import React from 'react'
import {default as chai, expect} from 'chai'
import spies from 'chai-spies'
import {shallow, mount} from 'enzyme'
import MenuList from '../../src/menu-list'
import flatItems from '../fixtures/flat-items.json'
import deepItems from '../fixtures/deep-items.json'

chai.use(spies)
chai.should()

describe('Menu List Component', function () {
  it('should be empty when items were not passed', function () {
    const listClass = 'someClass'
    const wrapper = shallow(<MenuList items={flatItems} listClass={listClass}/>)
    expect(wrapper.find('listClass').isEmpty()).to.be.true
  })

  it('should be empty when items were not passed', function () {
    const listClass = 'someClass'
    const wrapper = shallow(<MenuList show listClass={listClass}/>)
    expect(wrapper.find('listClass').isEmpty()).to.be.true
  })

  it('should have inner div conainer when items were passed', function () {
    const wrapper = shallow(<MenuList show items={flatItems}/>)
    expect(wrapper.find('div')).to.have.length(1)
  })

  it('should have inner div conainer with class which was passed', function () {
    const classToCheck = 'someClass'
    const wrapper = shallow(<MenuList show items={flatItems} listClass={classToCheck}/>)
    expect(wrapper.find('div').hasClass(classToCheck)).to.be.true
  })

  it('should have inner div conainer with the same amount of items as were passed', function () {
    const itemsNumber = flatItems.length
    const wrapper = mount(<MenuList show items={flatItems}/>)
    expect(wrapper.find('MenuItem').length).to.equal(itemsNumber)
  })
})

describe('Menu List Component - Hover on item: ', function () {
  it('menu item which has it\'s own items should have inner list when hovered', function () {
    const itemClass = 'itemClass'
    const listClass = 'listClass'
    const itemSelector = '.' + itemClass
    const listSelector = '.' + listClass
    const wrapper = mount(<MenuList show items={deepItems} listClass={listClass} itemClass={itemClass}/>)
    wrapper.find(itemSelector).first().simulate('mouseenter')
    expect(wrapper.find(itemSelector).first().find(listSelector).length).to.equal(1)
  })

  it('menu item which has not it\'s own items should not have inner list when hovered', function () {
    const itemClass = 'itemClass'
    const listClass = 'listClass'
    const itemSelector = '.' + itemClass
    const listSelector = '.' + listClass

    const wrapper = mount(<MenuList show items={flatItems} listClass={listClass} itemClass={itemClass}/>)
    wrapper.find(itemSelector).first().simulate('mouseover')
    expect(wrapper.find(itemSelector).first().find(listSelector).length).to.equal(0)
  })
})

describe('Menu List Component - Click on item:', function () {
  it('menu item which has it\'s own items should not trigger callback passed to component with item\'s name', function () {
    const itemClass = 'itemClass'
    const listClass = 'listClass'
    const itemSelector = '.' + itemClass
    const clickItemCallback = (itemName) => {}
    const spy = chai.spy(clickItemCallback)

    const wrapper = mount(<MenuList
        show items={deepItems}
        clickItemCallback={clickItemCallback}
        listClass={listClass} itemClass={itemClass}/>)

    wrapper.find(itemSelector).first().simulate('click')
    spy.should.not.have.been.called()
  })

  it('menu item which has not it\'s own items should trigger callback passed to component with item\'s name', function () {
    const itemClass = 'itemClass'
    const listClass = 'listClass'
    const itemSelector = '.' + itemClass
    const clickItemCallback = (itemName) => {}
    const spy = chai.spy(clickItemCallback)

    const wrapper = mount(<MenuList
        show items={flatItems}
        clickItemCallback={spy}
        listClass={listClass} itemClass={itemClass}/>)

    wrapper.find(itemSelector).first().simulate('click')
    spy.should.have.been.called.with(flatItems[0].name)
  })
})
