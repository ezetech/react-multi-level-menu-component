import React from 'react';
import MenuList from '../menu-list';
class MenuItem extends React.Component {
  renderInnerList() {
    const {items, open: innerListShown} = this.props;
    if (items) {
      return (
        <MenuList 
          show={innerListShown} 
          items={items} />
        )
    } else {
      return null;
    }
  }
  handleClick(e) {
    e.stopPropagation();
    if (this.props.items) {
      this.props.toggleInnerList();
    }
  }
  render() {
    return (
      <div onClick={(e) => this.handleClick(e)}>
        {this.props.title + ' ' + this.props.number} 
        {this.renderInnerList()}
      </div>
      )
  }
}

MenuItem.propTypes = {
  items: React.PropTypes.array,
  open: React.PropTypes.bool
};

export default MenuItem;