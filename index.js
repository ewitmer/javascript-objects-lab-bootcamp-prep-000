var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, {[key]: value})
  console.log(object)
  console.log(newObj)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { 
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

var obj = { prop: 1 }
destructivelyUpdateObjectWithKeyAndValue(obj, 'props', 2)

