// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

let newObj = updateDriverWithKeyAndValue(driver, "name", "hossien");
console.log(newObj.name);