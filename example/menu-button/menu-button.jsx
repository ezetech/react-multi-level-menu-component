import React from 'react';
import MenuList from '../../src/menu-list';
import styles from './menu-button.scss';
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
      <div>
        <button onClick={this.toggleMenu}>Toggle</button>
        <MenuList
          listClass={styles['context-menu'] + ' '  + styles['dark-transparent']}
          itemClass={styles['context-menu-item']}
          position={{
            top: 50,
            left: 40
          }}
          clickItemCallback={this.clickItemCallback}
          show={this.state.menuShown} items={flatItems} />
      </div>
    )
  }
}

export default MenuButton;