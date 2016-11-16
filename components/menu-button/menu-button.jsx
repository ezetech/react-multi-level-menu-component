import React from 'react';
import MenuList from '../../components/menu-list';
import items from '../../mock-items-config';

class MenuButton extends React.Component {
  constructor() {
    super();
    this.state = {
      menuShown: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({menuShown: !this.state.menuShown});
  }
  render() {
    return(
      <div>
        <button onClick={this.toggleMenu}>Toggle</button>
        <MenuList 
        position={{
          top: 50,
          left: 40
        }}
        show={this.state.menuShown} items={items} />
      </div>
    )
  }
}

export default MenuButton;