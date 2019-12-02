// reverse a given string

const reverseString = (str) => {
    if(typeof str == 'string'){
        let a = str.split("");
        let b = a.reverse();
        let c = b.join("");
        return c;
    }
    else{
        return null;
    }

}

module.exports = { reverseString };