// find smallest of three numbers using if/else statement

const smallest_of_three = (a, b, c) => {
    if(typeof a!== 'number' && typeof b!== 'number' && typeof c !== 'number'){
        return undefined;
    }else{
    if(a < b && a < c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else{
        return c;
    }
  }
}

module.exports = { smallest_of_three }