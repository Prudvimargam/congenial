// read about rest operator first.
// you will be given an object and 1 of its property key.
// create another object -> object2 which contains all the other properties

// eg. obj1 = { a:1, b:2, c:3, d:3, e:3 ...} and propertyKey = 'b', result => obj2 = {a:1, c:3, d:3, e:3 ...}

// do it by using Object.keys first then by rest operator



const normal_method = ( obj, propertyKey ) => {
    if(typeof obj === 'object'){
        let obj2 ={};
        let arr = Object.keys(obj);
            for(let key of arr){
               if (key !== propertyKey){
                    obj2[key] = obj[key]
            
               } 
            }
            return obj2;
        }
}

const rest_method = ( obj, propertyKey ) => {
    if(typeof obj === 'object'){
        const {a, ...obj2} = obj;
        console.log(obj2);
        return obj2;
    }
    return null;
}

module.exports = { normal_method, rest_method };