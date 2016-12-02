import React, { PropTypes as toBe } from 'react';
import MenuList from '../MenuList';

class MenuItem extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = { childHovered: false };

    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();

    const { name, clickItemCallback, items } = this.props;
    if (!items) { clickItemCallback(name); }
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
    const {
      itemClass,
      listClass,
      items,
      innerListPosition,
      open,
      clickItemCallback,
      triangleClassName,
      listHideDelay,
    } = this.props;

    return !items
      ? null
      : (
        <MenuList
          listClass={listClass}
          itemClass={itemClass}
          show={open}
          position={innerListPosition}
          clickItemCallback={clickItemCallback}
          triangleClassName={triangleClassName}
          listHideDelay={listHideDelay}
          items={items}
        />
      );
  }

  renderTriangle() {
    const { items, triangleClassName } = this.props;

    return !items
      ? null
      : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className={triangleClassName}
          viewBox="0 0 12 12"
        >
          <path d="M11 6L3.5 10.33L3.5 1.67z" fill="#000000" />
        </svg>
      );
  }

  render() {
    const { itemClass, text } = this.props;
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={itemClass}
      >
        { text }
        { this.renderTriangle() }
        { this.renderInnerList() }
      </div>
    );
  }
}

MenuItem.propTypes = {
  name: toBe.string,
  items: toBe.array,
  triangleClassName: toBe.string,
  open: toBe.bool,
  innerListPosition: toBe.shape({
    top: toBe.number,
    left: toBe.number,
  }),
  clickItemCallback: toBe.func,
  mouseOverHandler: toBe.func,
  mouseOutHandler: toBe.func,
  itemClass: toBe.string,
  listClass: toBe.string,
  text: toBe.string,
  listHideDelay: toBe.number,
};

export default MenuItem;
