import React from 'react';
import MenuList from '../menu-list';

class MenuItem extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      childHovered: false,
    };
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();

    const { name, clickItemCallback, items } = this.props;
    if (!items) {
      clickItemCallback(name);
    }
  }
  handleMouseEnter(e) {
    this.props.mouseOverHandler(e.currentTarget);
  }
  handleMouseLeave(e) {
    const currentTarget = e.currentTarget;
    const { mouseOutHandler } = this.props;
    mouseOutHandler(currentTarget);
  }
  renderInnerList() {
    let result;
    const {
      itemClass,
      listClass,
      items,
      innerListPosition,
      open,
      clickItemCallback,
      triangleClassName,
      listHideDelay } = this.props;

    if (items) {
      result = (
        <MenuList
          listClass={listClass}
          itemClass={itemClass}
          show={open}
          position={innerListPosition}
          clickItemCallback={clickItemCallback}
          triangleClassName={triangleClassName}
          listHideDelay={listHideDelay}
          items={items} />
      );
    } else {
      result = null;
    }
    return result;
  }
  renderTriangle() {
    let result;
    const { items, triangleClassName } = this.props;

    if (items) {
      result = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className={triangleClassName}
          viewBox="0 0 12 12">
          <path d="M11 6L3.5 10.33L3.5 1.67z" fill="#000000" />
        </svg>
      );
    } else {
      result = null;
    }
    return result;
  }
  render() {
    const { itemClass, text } = this.props;
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
    );
  }
}

MenuItem.propTypes = {
  name: React.PropTypes.string,
  items: React.PropTypes.array,
  triangleClassName: React.PropTypes.string,
  open: React.PropTypes.bool,
  innerListPosition: React.PropTypes.shape({
    top: React.PropTypes.number,
    left: React.PropTypes.number,
  }),
  clickItemCallback: React.PropTypes.func,
  mouseOverHandler: React.PropTypes.func,
  mouseOutHandler: React.PropTypes.func,
  itemClass: React.PropTypes.string,
  listClass: React.PropTypes.string,
  text: React.PropTypes.string,
  listHideDelay: React.PropTypes.number,
};

export default MenuItem;
