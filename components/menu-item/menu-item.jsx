import React from 'react';
import MenuList from '../menu-list';
class MenuItem extends React.Component {
  constructor() {
    super();
    this.renderInnerList = this.renderInnerList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  renderInnerList() {
    if (this.props.items) {
      return (
        <MenuList 
          shown={this.props.innerListShown} 
          items={this.props.items} />
        )
    } else {
      return null;
    }
  }
  handleClick() {
    if (this.props.items) {
      this.toggleInnerList();
      this.props.toggleInnerList();
    }
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.title}
        {this.renderInnerList()}
      </div>
      )
  }
}

export default MenuItem;