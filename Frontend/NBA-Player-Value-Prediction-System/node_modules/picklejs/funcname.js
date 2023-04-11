module.exports = funcName
function funcName(fun){
  if (fun.name) return fun.name
  var m = String(fun).match(/^\s*function\s+([$a-zA-Z][a-zA-Z]*)/)
  if (m){
    return m[1]
  }else{
    return '(anonymous)'
  }
}