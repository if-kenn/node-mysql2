var common = require('../../common');
var connection = common.createConnection();
var assert = require('assert');

var rows, fields;
connection.execute('SELECT ? AS result', [{ a: 1, b: true, c: ["foo"] }], function(err, _rows, _fields) {
  if (err) {
    throw err;
  }
  rows = _rows;
  fields = _fields;
  connection.end();
});

process.on('exit', function() {
  assert.deepEqual(rows, [{ result: { a: 1, b: true, c: ["foo"] } }]);
});
