var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(object, {[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { 
  var newObj = Object.assign({[key]:value}, object)
  console.log(object)
  console.log(newObj)
  return newObj
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
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

