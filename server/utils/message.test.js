const expect = require('expect');

var {generateMessage, generateLocationMessage} =require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Camp';
    var lat = 47.608027;
    var lon = -116.238053;

    var msg = generateLocationMessage(from, lat, lon);
    expect(msg.from).toBe(from);
    expect(msg.url).toMatch(`${lat},${lon}`);
    expect(msg.createdAt).toBeA('number');
  });

});
