import React from 'react';
import MenuList from '../menu-list';
import styles from './menu-item.scss';

class MenuItem extends React.Component {
  renderInnerList() {
    const { itemClass, listClass, items, innerListPosition, open: innerListShown } = this.props;
    if (items) {
      return (
        <MenuList 
          listClass = { listClass }
          itemClass = { itemClass }
          show = { innerListShown }
          position = { innerListPosition }
          items = { items } />
        )
    } else {
      return null;
    }
  }
  handleClick(e) {
    e.stopPropagation();
    if (this.props.items) {
      this.props.toggleInnerList(e.currentTarget);
    }
  }
  render() {
    const { itemClass, title } = this.props;
    return (
      <div onClick={ (e) => this.handleClick(e) } className = { itemClass }>
        { title }
        { this.renderInnerList() }
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
  itemClass: React.PropTypes.string,
  listClass: React.PropTypes.string
};

export default MenuItem;