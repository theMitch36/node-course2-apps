const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
  });


  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should async square two numbers', (done) => {
    utils.asyncSquare(4, (sum) => {
      expect(sum).toBe(16).toBeA('number');
      done();
    });
  });

  it('should square to numbers', () => {
    var res = utils.square(9);
    expect(res).toBe(81).toBeA('number');
  });
});



it('should set firstName and lastName', () => {
  var user = {location: 'Lansing', age: 25};
  var res = utils.setName(user, 'Mitchell Makos');

  expect(res).toInclude({
    firstName: 'Mitchell',
    lastName: 'Makos'
  });
});
