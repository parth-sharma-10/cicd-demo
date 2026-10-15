'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateTotal } = require('../src/bill');

test('bill without discount adds 5% tax', () => {
  assert.deepEqual(calculateTotal(1000, 0, 5),
    { discount: 0, tax: 50, total: 1050 });
});

test('10% discount is applied before tax', () => {
  assert.deepEqual(calculateTotal(1000, 10, 5),
    { discount: 100, tax: 45, total: 945 });
});

test('discount above 100% is rejected', () => {
  assert.throws(() => calculateTotal(1000, 150, 5), RangeError);
});
