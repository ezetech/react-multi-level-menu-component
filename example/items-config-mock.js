export const flatItems = [
  {
    text: 'Item 1',
    name: 'item-1'
  },
  {
    text: 'Item 2',
    name: 'item-2'
  }
];
export const deepItems = [
  {
    text: 'Item 1',
    name: 'item-1',
    items: [{
      name: 'sub-item-11',
      text: 'SubItem 11',
      items: [{
        name: 'sub-item-111',
        text: 'SubItem 112'
      },
      {
        name: 'sub-item-121',
        text: 'SubItem 122'
      }]
    },
    {
      name: 'sub-item-12',
      text: 'SubItem 12'
    }]
  },
  {
    text: 'Item 2',
    name: 'item-2',
    items: [{
      name: 'sub-item-21',
      text: 'SubItem 21'
    },
    {
      name: 'sub-item-22',
      text: 'SubItem 22'
    }]
  }
];