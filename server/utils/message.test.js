const expect = require('expect');

var {generateMessage} =require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jimmy';
    var text = 'sample chat text';

    var msg = generateMessage(from, text);
    expect(msg.from).toBe(from);
    expect(msg.text).toBe(text);
    expect(msg.createdAt).toBeA('number');
  });
});
