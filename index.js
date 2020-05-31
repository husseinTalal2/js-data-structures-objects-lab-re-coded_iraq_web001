// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  let newObj = {...obj};
  newObj[key] = value;
  return newObj;
}
