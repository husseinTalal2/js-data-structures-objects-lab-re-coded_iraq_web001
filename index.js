// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(obj, key, value){
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key){
  remove obj[key];
}
