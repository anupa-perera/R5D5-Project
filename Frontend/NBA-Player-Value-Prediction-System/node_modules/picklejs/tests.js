mocha.setup('tdd')
var assert = require('assert')
var pickle = require('./pickle')

function Person(name){
  this.name = name
}

Person.prototype.sayName = function(){
  console.log('Hi I am', this.name)
}
window.Person = Person

test('object constructor', function(){
  assert.equal({}.constructor, Object)
  var bob = new Person
  assert.equal(bob.constructor, Person)
})

test('simple class', function(){
  assert.equal(
    pickle.dump(new Person('bob')),
    '{"name":"bob","type":"Person"}')
  
  var back = pickle.load('{"name":"bob","type":"Person"}')
  assert(back instanceof Person)
  assert.equal(back.name, 'bob')

  var bob = new Person('bob')
  bob.children = [
    new Person('tom'),
    new Person('sara')
  ]
  var rt = pickle.load(pickle.dump(bob))
  assert.equal(rt.children.length, 2)
  assert(rt.children[0] instanceof Person)
  assert.equal(rt.children[0].name, 'tom')
  assert.equal(rt.children[1].name, 'sara')
  
})

test('date', function(){
  var str = pickle.dump(new Date("2013-08-23T02:02:54.868Z"))
  console.log(str)
  console.log(new Date().getUTCMonth())
  
  assert.equal(str, '{"type":"Date","repr":"2013-08-23T02:02:54.868Z"}')
  var dt = pickle.load(str)
  assert.equal(dt.toISOString(), "2013-08-23T02:02:54.868Z")
})

test('regex', function(){
  var str = pickle.dump(/abc/)
  assert.equal(str, '{"type":"RegExp","repr":"abc"}')
  var re = pickle.load(str)
  assert.equal(re.source, "abc")
})
