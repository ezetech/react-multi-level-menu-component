import React from 'react'
import MenuItem from '../menu-item'

class MenuList extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      openItem: null,
      openItemPosition: null
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.show) {
      this.setState({
        openItem: null,
        openItemPosition: null
      })
    }
  }

  renderItems () {
    const {listClass, itemClass, items, clickItemCallback, triangleClassName} = this.props

    return items.map((item, i) => {
      return (
        <MenuItem
            key={i}
            open={this.state.openItem === i}
            innerListPosition={this.state.openItemsListPosition}
            number={i}
            clickItemCallback={clickItemCallback}
            triangleClassName={triangleClassName}
            itemClass={itemClass}
            listClass={listClass}
            text={item.text}
            mouseOutHandler={this.getItemListHider(i)}
            mouseOverHandler={this.getItemListShower(i)}
            {...item}/>
      )
    })
  }

  hideItemsList (index) {
    if (index === this.state.openItem) {
      this.setState({
        openItem: null,
        openItemsListPosition: null
      })
    }
  }

  showItemsList (index, element) {
    this.setState({
      openItem: index,
      openItemsListPosition: this.calculateItemsListPosition(element)
    })
  }

  getItemListShower (index) {
    return (element) => this.showItemsList(index, element)
  }

  getItemListHider (index) {
    return (element) => this.hideItemsList(index, element)
  }

  calculateItemsListPosition (element) {
    const top = element.offsetTop
    const left = element.offsetWidth

    return {top, left}
  }

  getStyle () {
    const {position} = this.props
    if (position) {
      const {position: {top, left}} = this.props
      return {top, left}
    } else {
      return null
    }
  }

  render () {
    const {listClass, items, show} = this.props
    if (!show || !items) {
      return null
    }
    return (
      <div
          style={this.getStyle()}
          className={listClass}>
        {this.renderItems()}
      </div>
    )
  }
}

MenuList.propTypes = {
  items: React.PropTypes.array,
  show: React.PropTypes.bool,
  triangleClassName: React.PropTypes.string,
  position: React.PropTypes.shape({
    top: React.PropTypes.number,
    left: React.PropTypes.number
  }),
  clickItemCallback: React.PropTypes.func,
  listClass: React.PropTypes.string,
  itemClass: React.PropTypes.string
}

export default MenuList
