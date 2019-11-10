
console.clear()

function c(msg) 
{
  console.log(msg)
  return 'hello'
}
/*
var arr1 = [ 1, 2, 3]
var arr2 = [ 1, "word", 3]
var arr3 = [ "hello", "world", [1,2,3] ]
c(arr1)

function print(x)  {
  console.log(x)
}

arr1.forEach( print )
arr1.forEach( console.log )
//arr1.forEach( function(x) { alert(x) } )
arr1.forEach( function(x) { console.warn(x) } )
arr1.forEach( (x) => { console.warn(x) } )
*/

function add() {
  //c(arguments[0] + arguments[1])
  var sum = 0
  for (var i = 0 ; i < arguments.length; i++)
  	sum = sum + arguments[i]
  c(typeof arguments)
  c(sum)
}

add(2, 5, 7, 8)

function f(f1) {
  console.log(f1)
  f1()
}
f( () => {console.log('hello')} )

var person = {
  name : "danny",
  age : 30,
  numbers : [1,2,3],
  address : {
  	city : "Tel aviv",
  	country : "ISRAEL"
	},
  // this is danger!
  printaddress : function () { c (this.address)  }
}
c(person)
c(person.name)
c(person["name"])
c(person.address.city)

var danny = {
  name : "danni2"
}
danny.printaddress = person.printaddress
danny.printaddress()
var point1 = {
  x : 5,
  y : 10
}
var point2 = {
  x : 5,
  y : 10
}

for (var n in point1) {
  console.log(` ${n} : ${point1[n]}`)
}

var p3 = {
  x : 3, 
  y : 10,
  print () {
    c(x, y)
  }
}
var x = 2
var y = 12
var p4 = {
  //x : x,
  //y : y
  x, 
  y
}

for (var n in point1) {
  console.log(` ${n} : ${point1[n]}`)
}

function printMembers(o) {
  // will print all members and values
}
function create_person(name, age) {
  // 1
  var result = {
    name, 
    age, 
    printName() { console.log(this.name) }
  }
  return result

  // 1.1
  return {
    name, 
    age, 
    printName() { console.log(this.name) }
  }
  
  // 2
  result = { } // or: result = new Object()
  result.name = name
  result.age = age
  result.printName = function() { console.log(this.name) }
  return result
  
}
danny = create_person("danny", 18)
// danny = {name : "danny", age : 18}
danny.printName() // will print - danny

var sima = create_person("sima", 22)
// simma = {name : "sima", age : 22}
sima.printName() // will print - sima

delete sima.age

function Person(name, age) {
  //this = { } // or: result = new Object() -- auto when using new
  this.name = name
  this.age = age
  this.printName = function() { console.log(this.name) }
  //return this -- auto when using new
}
var moshe = new Person("Moshe", 33) // new = ctor mode will add method name to description

