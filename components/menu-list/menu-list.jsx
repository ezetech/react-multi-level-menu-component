import React from 'react';
import MenuItem from '../menu-item';

class MenuList extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      openItem: null
    }
  }
  componentWillReceiveProps(nextProps) {

  }
  renderItems() {
    return this.props.items.map((item, i) => {
      return (
        <MenuItem 
          key={i}
          open = { this.state.openItem === i }
          number = {i}
          toggleInnerList={this.getItemListHandler(i)} 
          {...item}/>
      )
    });
  }
  toggleItemsList(index) {
    if (index === this.state.openItem) {
      this.setState({
        openItem: null
      });
    } else {
      this.setState({
        openItem: index
      });
    }
    
  }
  getItemListHandler(index) {
    return () => this.toggleItemsList(index);
  }
  getStyle() {
    const { position } = this.props;
    if (position) {
      const { position: { top, left } } = this.props;
      return { position: 'absolute', top, left };
    } else {
      return null;
    }
  }
  render() {
    if (!this.props.show) {
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