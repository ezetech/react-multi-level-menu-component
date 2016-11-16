import React from 'react';
import MenuItem from '../menu-item';

class MenuList extends React.Component {
  constructor(...args) {
    super(...args);
    this.toggleItemsList = this.toggleItemsList.bind(this);
  }
  componentWillReceiveProps(nextProps) {

  }
  renderItems() {
    return this.props.items.map((item, i) => {
      return (
        <MenuItem 
          key={i}
          toggleInnerList={this.toggleItemsList} 
          {...item}/>
      )
    });
  }
  toggleItemsList() {

  }
  getStyle() {
    const { position, position: { top, left } } = this.props;

    if (position) {
      return { position: 'absolute', top, left }; 
    } else {
      return null;
    }
  }
  render() {
    if (this.props.show) {
      return null;
    }
    return (
      <div style={this.getStyle()}>
        {this.renderItems()}
      </div>
      )
  }
}

MenuList.propTypes = {
  items: React.PropTypes.array,
  show: React.PropTypes.bool,
  position: React.PropTypes.shape({
    top: React.PropTypes.number,
    left: React.PropTypes.number
  }),
};

export default MenuList;