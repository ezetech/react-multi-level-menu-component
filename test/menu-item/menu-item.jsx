import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import MenuItem from '../../src/menu-item'

describe('Menu Item Component', function () {
  it('should has same text as passed', function () {
    const textToCheck = 'some text'
    const wrapper = shallow(<MenuItem text={textToCheck}/>)
    expect(wrapper.find('div').text()).to.equal(textToCheck)
  })

  it('should has same class as passed', function () {
    const classToCheck = 'someClass'
    const wrapper = shallow(<MenuItem itemClass={classToCheck}/>)
    expect(wrapper.find('div').hasClass(classToCheck)).to.be.true
  })
})
