import React from 'react';
import MenuList from '../menu-list';

class MenuItem extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      childHovered: false
    }
    this.handleMouseLeave = (e) => this._handleMouseLeave(e);
    this.handleMouseEnter = (e) => this._handleMouseEnter(e);
    this.handleClick = (e) => this._handleClick(e);
  }
  renderInnerList() {
    const { itemClass, listClass, items, innerListPosition, open: innerListShown, clickItemCallback } = this.props;
    if (items) {
      return (
        <MenuList
          listClass = {listClass}
          itemClass = {itemClass}
          show = {innerListShown}
          position = {innerListPosition}
          clickItemCallback = {clickItemCallback}
          items = { items } />
        )
    } else {
      return null;
    }
  }
  _handleClick(e) {
    e.stopPropagation();

    const { name, clickItemCallback, items } = this.props;
    if (!items) {
      clickItemCallback(name);
    }
  }
  _handleMouseEnter(e) {
    this.props.mouseOverHandler(e.currentTarget);
  }
  _handleMouseLeave(e) {
    const currentTarget = e.currentTarget;
    const { items, mouseOutHandler } = this.props;
    setTimeout(() => {
      if (items) {
        mouseOutHandler(currentTarget);
      }
    }, 500);
  }
  render() {
    const { itemClass, text } = this.props;
    return (
      <div 
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className = {itemClass}>
        {text}
        {this.renderInnerList()}
      </div>
      )
  }
}

MenuItem.propTypes = {
  items: React.PropTypes.array,
  open: React.PropTypes.bool,
  innerListPosition: React.PropTypes.shape({
    top: React.PropTypes.number,
    left: React.PropTypes.number
  }),
  clickItemCallback: React.PropTypes.func,
  itemClass: React.PropTypes.string,
  listClass: React.PropTypes.string,
  text: React.PropTypes.string
};

export default MenuItem;