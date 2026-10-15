'use strict';

function round2(value) {
  return Math.round(value * 100) / 100;
}

// Returns discount, tax and total for a bill. Tax is charged after discount.
function calculateTotal(subtotal, discountPercent, taxPercent) {
  if (subtotal < 0) {
    throw new RangeError('subtotal must not be negative');
  }
  if (discountPercent < 0 || discountPercent > 100) {
    throw new RangeError('discountPercent must be between 0 and 100');
  }
  const discount = round2(subtotal * discountPercent / 100);
  const tax = round2((subtotal - discount) * taxPercent / 100);
  const total = round2(subtotal - discount + tax);
  return { discount, tax, total };
}

module.exports = { calculateTotal };
