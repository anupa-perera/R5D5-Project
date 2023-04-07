function pad(number) {
  var r = String(number);
  if ( r.length === 1 ) {
    r = '0' + r;
  }
  return r;
}

module.exports = toISOString
function toISOString(date) {
  if (date.toISOString) return date.toISOString()
  // Stolen from <http://stackoverflow.com/a/12907891/5304>
  return date.getUTCFullYear()
    + '-' + pad( date.getUTCMonth() + 1 )
    + '-' + pad( date.getUTCDate() )
    + 'T' + pad( date.getUTCHours() )
    + ':' + pad( date.getUTCMinutes() )
    + ':' + pad( date.getUTCSeconds() )
    + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
    + 'Z';
}