const assert = require('assert');

/* --------------------------------------------------------------- */
const P1 = require('./Level2/smallest_of_three');
it('1. returns smallest of three numbers', () => {
    assert.equal(P1.smallest_of_three(67,8,-12), -12);
})
it('1. returns undefined if not a number', () => {
    assert.equal(P1.smallest_of_three('a','c','e'), undefined);
})

/* --------------------------------------------------------------- */

const P2 = require('./Level2/spread_operator');

it('2. returns combined array', () => {
    let arr = P2.spread_operator([1], [2]);
    assert.equal(arr.length, 2);
    assert.equal(arr[0], 1);
    assert.equal(arr[1], 2);
});

it('2. returns undefined if not array', () => {
    assert.equal(P2.spread_operator(2,3), undefined);
})

/* --------------------------------------------------------------- */


const P3 = require('./Level2/rest_operator');

it('3. returns obj with rest of the properties', () => {
    assert.equal()
});
