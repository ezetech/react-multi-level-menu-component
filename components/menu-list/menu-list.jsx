import React from 'react';
import MenuItem from '../menu-item';

class MenuList extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      openItem: null,
      openItemPosition: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) {
       this.setState({
         openItem: null,
         openItemPosition: null
       });
     }
  }
  renderItems() {
    return this.props.items.map((item, i) => {
      return (
        <MenuItem 
          key={i}
          open = { this.state.openItem === i }
          number = {i}
          innerListPosition = { this.state.openItemsListPosition }
          toggleInnerList={this.getItemListHandler(i)} 
          {...item}/>
      )
    });
  }
  toggleItemsList(index, element) {
    if (index === this.state.openItem) {
      this.setState({
        openItem: null,
        openItemsListPosition: null
      });
    } else {
      this.setState({
        openItem: index,
        openItemsListPosition: this.calculateItemsListPosition(element)
      });
    }
    
  }
  getItemListHandler(index) {
    return (element) => this.toggleItemsList(index, element);
  }
  calculateItemsListPosition(element) {
     const top = element.offsetTop;
     const left  = element.offsetWidth;
 
     return { top, left }
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