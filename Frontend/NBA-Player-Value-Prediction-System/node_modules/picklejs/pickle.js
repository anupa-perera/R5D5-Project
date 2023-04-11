var funcName = require('./funcname')
var toISOString = require('./isodate')
var bind = require('./bind')

var pickle = {
  dump: function(obj){
    var dateToJSON = Date.prototype.toJSON
    Date.prototype.toJSON = null
    var self = this
    var ret = JSON.stringify(obj, bind(this.replacer, this))
    Date.prototype.toJSON = dateToJSON
    return ret
  },
  replacer: function(key, value){
    var type = funcName(value.constructor)
    if (type !== 'Object'){
      value['type'] = type
      if (this.repr[type]){
        value.repr = this.repr[type](value)
      }
      return value
    }else{
      return value
    }
  },
  load: function(str){
    var self = this
    return JSON.parse(str, bind(this.reviver, this))
  },
  reviver: function(key, value){
    var type
    if (type = value['type']){
      var ctr = window[type]
      if (this.repr[type]){
        return new ctr(value.repr)
      }
      var ret = new ctr
      for (var k in value){
        ret[k] = value[k]
      }
      return ret
    }else{
      return value
    }
  },
  repr: {
    "Date": function(date){
      return toISOString(date)
    },
    "RegExp": function(re){
      return re.source
    }
  }
}

module.exports = pickle