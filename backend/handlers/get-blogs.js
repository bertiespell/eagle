'use strict';

const handler = async () => {
  console.log('2');
  console.log('awd')
  return [
    {
      title: 'test',
      content: 'test',
      createdAt: '23432341221',
    },
    {
      title: 'test1',
      content: 'test',
      createdAt: '23432341221',
    },
    {
      title: 'test2',
      content: 'test',
      createdAt: '23432341221',
    }
  ]  
};


module.exports = {
  handler,
};
