const expect = require('expect');

var {isRealString} =require('./validation');

  describe('isRealString', () => {
    it('should reject non-strings', () => {
      expect(isRealString({name: 'Jimmy'})).toBeFalsy();
    });

    it('should reject empty strings', () => {
      expect(isRealString('    ')).toBeFalsy();
    });

    it('should allow valid strings', () => {
      expect(isRealString('  Jimmy ')).toBeTruthy();
    });


  });
