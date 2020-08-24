// import React from 'react';
// import Link from '../Link.react';
// import renderer from 'react-test-renderer';

const sum = function sum(a, b) {
    return a + b
};

//ims sorry, test just to be here 
test('adds 1 + 8 to equal 9', () => {
    expect(sum(1, 8)).toBe(9)
})