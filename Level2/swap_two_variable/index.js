// swap values of given 2 number variables without using a third variable;

const swap_number = (a, b) => {
    let x = a, y = b;
    x = x + y;
    y = x - y;
    x = x-y;
    console.log(x,y);
    return { x, y }
}

module.exports = { swap_number };