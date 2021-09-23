var BlinkTradeWS = require('blinktrade').BlinkTradeWS;

var blinktrade = new BlinkTradeWS();

blinktrade.connect().then(function() {
  return blinktrade.login({ username: 'thongngo', password: 'Qt10112005@' });
}).then(function(logged) {
  console.log(logged);
}).catch(function(err) {
  console.log(err);
});
