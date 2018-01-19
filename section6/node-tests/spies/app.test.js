const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);


  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Mitchell', 25);
    expect(spy).toHaveBeenCalledWith('Mitchell', 25);
  });

  it('should call saveUser with user obj', () => {
    var email = 'mitchell.makos1@gmail.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });


});
