var funcName = require('./funcname')

test('function parsing', function(){
  var f = function one(){ return 1 }
  assert.equal(pickle.funcName(f), 'one')
  var datefun = Date + ''
  assert.equal(pickle.funcName(Date), 'Date')
})