export const flatItems = [
  {
    text: 'Copy',
    name: 'copy'
  },
  {
    text: 'Cut',
    name: 'cut'
  },
  {
    text: 'Rename',
    name: 'rename'
  },
  {
    text: 'Delete',
    name: 'delete'
  }
];
export const deepItems = [
  {
    text: 'Find',
    name: 'find',
    items: [{
      name: 'find-by-name',
      text: 'By name',
      items: [{
        text: 'First',
        name: 'find-by-name-first'
      },
      {
        text: 'All',
        name: 'find-by-name-first'
      }]
    },
    {
      text: 'By id',
      name: 'find-by-id'
    }]
  },
  {
    text: 'Replace',
    name: 'replace',
    items: [{
      name: 'replace-first',
      text: 'First'
    },
    {
      name: 'replace-all',
      text: 'All'
    }]
  }
];