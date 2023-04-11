module.exports = bind
function bind(fn, ctx){
  if (fn.bind) return fn.bind(ctx)
  return function(){
    return fn.apply(ctx, arguments)
  }
}