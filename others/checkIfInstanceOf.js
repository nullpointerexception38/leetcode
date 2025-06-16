function checkIfInstanceOf(obj, classFunction) {
  if (obj === null || typeof obj === 'undefined') {
    return false
  }
  if (classFunction === null || typeof classFunction === 'undefined') {
    return false
  }
  let proto = obj.__proto__
  while (proto) {
    if (proto === classFunction.prototype) {
      return true
    }
    proto = proto.__proto__
  }
  return false
}

console.log(checkIfInstanceOf(
  new Date(), Date
))

class Animal {}

class Dog extends Animal {}

console.log(checkIfInstanceOf(
  new Dog(), Animal
))

console.log(checkIfInstanceOf(
  Date, Date
))

console.log(checkIfInstanceOf(
  5, Number
))
