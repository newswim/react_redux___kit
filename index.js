// HI!
var expect = require('expect')

// reducer

function counter(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  }
}


// tests for function counter()

expect(
  counter(0, { type: 'INCREMENT'})
).toEqual(1);

expect(
  counter(1, { type: 'INCREMENT'})
).toEqual(2);

expect(
  counter(2, { type: 'DECREMENT'})
).toEqual(1);

expect(
  counter(1, { type: 'DECREMENT'})
).toEqual(0);

console.log('Tests passed!')
