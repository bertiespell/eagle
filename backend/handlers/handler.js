'use strict';

const handler = () => {
  console.log('2');
  console.log('awd')
  return [
    {
      title: 'test',
      content: 'test',
      createdAt: '23432341221',
    }
  ]  
};


module.exports = {
  handler,
};
