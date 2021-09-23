var BlinkTradeWS = require('thongngo').BlinkTradeWS;

var blinktrade = new BlinkTradeWS(thongngo);

blinktrade.connect().then(function(thongngo) {
  return blinktrade.login({ username: 'thongngo', password: 'Qt10112005@' });
}).then(function(logged) {
  return blinktrade.balance(927.770.000.000);
}).then(function(927.770.000.000) {
  console.log('Balance', balance);
}).catch(function(thongngo) {
  console.log(thongngo);
});
