const assert = require('assert');

/* --------------------------------------------------------------- */
const P1 = require('./Level2/smallest_of_three');
it('1. returns smallest of three numbers', () => {
    assert.equal(P1.smallest_of_three(67, 8, -12), -12);
})
it('1. returns undefined if not a number', () => {
    assert.equal(P1.smallest_of_three('a', 'c', 'e'), undefined);
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
    assert.equal(P2.spread_operator(2, 3), undefined);
})

/* --------------------------------------------------------------- */


const P3 = require('./Level2/rest_operator');

it('3. returns obj with rest of the properties (Object.keys)', () => {
    let obj2 = P3.normal_method({ a: 1, b: 1, cdfgret: 1 }, 'a');
    let cond = typeof obj2 === 'object' && obj2.b && obj2.cdfgret && !obj2.a;
    assert.equal(cond, true);
});

it('3. returns obj with rest of the properties (rest operator)', () => {
    let obj2 = P3.normal_method({ a: 1, b: 1, cdfgretuihds: 1 }, 'a');
    let cond = typeof obj2 === 'object' && obj2.b && obj2.cdfgretuihds && !obj2.a;
    assert.equal(cond, true);
});

/* --------------------------------------------------------------- */

const P4 = require('./Level2/flatten_array');
it('4. returns a flattened array', () => {
    let arr = [[[[[[4]]]]], 5, [[[[[6], [7, 8]]], 9]], 10];
    let arr2 = P4.flatten_arr(arr);
    let cond = Array.isArray(arr2)
        && arr2[0] === 4
        && arr2[1] === 5
        && arr2[2] === 6
        && arr2[3] === 7
        && arr2[4] === 8
        && arr2[5] === 9
        && arr2[6] === 10;

    assert.equal(cond, true);
});

/* --------------------------------------------------------------- */

const P5 = require('./Level2/swap_two_variable');

it('5. returns swapped values of variables', () => {
    let { x, y } = P5.swap_number(23, 56);

    assert.equal(x, 56);
    assert.equal(y, 23);
});