import React from 'react'
import MenuList from '../menu-list'

class MenuItem extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      childHovered: false
    }
    this.handleMouseLeave = (e) => this._handleMouseLeave(e)
    this.handleMouseEnter = (e) => this._handleMouseEnter(e)
    this.handleClick = (e) => this._handleClick(e)
  }

  renderInnerList () {
    const {itemClass, listClass, items, innerListPosition, open: innerListShown, clickItemCallback, triangleClassName} = this.props
    if (items) {
      return (
        <MenuList
            listClass={listClass}
            itemClass={itemClass}
            show={innerListShown}
            position={innerListPosition}
            clickItemCallback={clickItemCallback}
            triangleClassName={triangleClassName}
            items={items}/>
      )
    } else {
      return null
    }
  }

  renderTriangle () {
    const {items, triangleClassName} = this.props
    if (items) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className={triangleClassName}
            viewBox="0 0 12 12">
          <path d="M11 6L3.5 10.33L3.5 1.67z" fill="#000000"/>
        </svg>
      )
    } else {
      return null
    }
  }
  _handleClick (e) {
    e.stopPropagation()

    const {name, clickItemCallback, items} = this.props
    if (!items) {
      clickItemCallback(name)
    }
  }
  _handleMouseEnter (e) {
    this.props.mouseOverHandler(e.currentTarget)
  }
  _handleMouseLeave (e) {
    const currentTarget = e.currentTarget
    const {mouseOutHandler} = this.props
    setTimeout(() => {
      mouseOutHandler(currentTarget)
    }, 500)
  }

  render () {
    const {itemClass, text} = this.props
    return (
      <div
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className={itemClass}>
        {text}
        {this.renderTriangle()}
        {this.renderInnerList()}
      </div>
    )
  }
}

MenuItem.propTypes = {
  name: React.PropTypes.string,
  items: React.PropTypes.array,
  triangleClassName: React.PropTypes.string,
  open: React.PropTypes.bool,
  innerListPosition: React.PropTypes.shape({
    top: React.PropTypes.number,
    left: React.PropTypes.number
  }),
  clickItemCallback: React.PropTypes.func,
  mouseOverHandler: React.PropTypes.func,
  mouseOutHandler: React.PropTypes.func,
  itemClass: React.PropTypes.string,
  listClass: React.PropTypes.string,
  text: React.PropTypes.string
}

export default MenuItem
