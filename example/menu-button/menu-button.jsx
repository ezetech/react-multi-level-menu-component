import React from 'react';
import MenuList from '../../src/menu-list';
import { deepItems, flatItems } from '../items-config-mock';

class MenuButton extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      menuShown: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({menuShown: !this.state.menuShown});
  }
  clickItemCallback(itemName) {
    console.log(itemName);
  }
  render() {
    return(
      <div className="example-buttonContainer">
        <button className="example-button" onClick={this.toggleMenu}>Toggle</button>
        <MenuList
          listClass={'context-menu dark-transparent'}
          itemClass={'context-menu-item'}
          triangleClassName={'context-menu-item-triangle'}
          listHideDelay={500}
          clickItemCallback={this.clickItemCallback}
          show={this.state.menuShown} items={deepItems} />
      </div>
    )
  }
}

export default MenuButton;