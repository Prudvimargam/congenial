const assert = require('assert');


let P1 = require('./Level1/add_two_number');
it('1 .adds two number', () => {
    assert.equal(P1.addTwoNum(3,4), 7);
})


let P2 = require('./Level1/add_array');
it('2. adds an array of number', () => {
    assert.equal(P2.addArray([1,2,3]), 6)
})

it('2. returns undefined if not array', () => {
    assert.equal(P2.addArray(34), undefined);
})

it('2. returns undefined if array contains something that is not number', () => {
    assert.equal(P2.addArray(['a', 'b']), undefined);
})

const P3 = require('./Level1/reverse_string');
it('3. reverses a given string', () => {
    assert.equal(P3.reverseString('asdf'), 'fdsa');
})
it('3. returns undefined if not a string', () => {
    assert.equal(P3.reverseString([]), undefined);
})

const P4 = require('./Level1/object_prop_addition');
it('4. Adds all numerical properties of a given object', () => {
    let obj = {a: 3, b: 5, c: 5, d: '1'};
    assert.equal(P4.object_prop_addition(obj), 13);
})

it('4: returns undefined in other cases', () => {
    assert.equal(P4.object_prop_addition(4), undefined);
    assert.equal(P4.object_prop_addition({a: '3', b: '4'}), undefined);

})

