import React, { PropTypes as toBe } from 'react';
import MenuItem from '../MenuItem';

class MenuList extends React.Component {

  static calculateItemsListPosition(element) {
    const top = element.offsetTop;
    const left = element.offsetWidth;

    return { top, left };
  }

  constructor(...args) {
    super(...args);

    this.state = {
      openItem: null,
      openItemPosition: null,
      listHideTimeout: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) {
      this.setState({
        openItem: null,
        openItemPosition: null,
      });
    }
  }

  getItemListShower(index) {
    return element => this.showItemsList(index, element);
  }

  getItemListHider(index) {
    return element => this.hideItemsList(index, element);
  }

  getStyle() {
    const { position } = this.props;

    return position
      ? { top: position.top, left: position.left }
      : null;
  }

  showItemsList(index, element) {
    this.setState({
      openItem: index,
      openItemsListPosition: MenuList.calculateItemsListPosition(element),
    });
    clearTimeout(this.state.listHideTimeout);
  }

  hideItemsList(index) {
    const listHideTimeout = setTimeout(() => {
      if (index === this.state.openItem) {
        this.setState({
          openItem: null,
          openItemsListPosition: null,
        });
      }
    }, this.props.listHideDelay);
    this.setState({ listHideTimeout });
  }

  renderItems() {
    const {
      listClass,
      itemClass,
      items,
      clickItemCallback,
      triangleClassName,
      listHideDelay,
    } = this.props;

    return items.map((item, i) => (
      <MenuItem
        key={i}
        open={this.state.openItem === i}
        innerListPosition={this.state.openItemsListPosition}
        number={i}
        clickItemCallback={clickItemCallback}
        triangleClassName={triangleClassName}
        itemClass={itemClass}
        listClass={listClass}
        listHideDelay={listHideDelay}
        text={item.text}
        mouseOutHandler={this.getItemListHider(i)}
        mouseOverHandler={this.getItemListShower(i)}
        {...item}
      />
    ));
  }

  render() {
    const { listClass, items, show } = this.props;
    if (!show || !items) {
      return null;
    }
    return (
      <div
        style={this.getStyle()}
        className={listClass}
      >
        { this.renderItems() }
      </div>
    );
  }
}

MenuList.propTypes = {
  items: toBe.array,
  show: toBe.bool,
  triangleClassName: toBe.string,
  position: toBe.shape({
    top: toBe.number,
    left: toBe.number,
  }),
  clickItemCallback: toBe.func,
  listClass: toBe.string,
  itemClass: toBe.string,
  listHideDelay: toBe.number,
};

export default MenuList;
