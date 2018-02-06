const expect = require('expect');

var {Users} =require('./users');

  describe('Users', () => {
    var testUsers;

    beforeEach(() => {
      testUsers = new Users();
      testUsers.users = [{
        id: '12',
        name: 'Kirk',
        room: 'Star Trek'
      },{
        id: '13',
        name: 'Luke',
        room: 'Star Wars'
      },{
        id: '14',
        name: 'Bones',
        room: 'Star Trek'
      }];
    });

    it('should add new user', () => {
      var users = new Users();
      var user = {
        id: '122345',
        name: 'Jimmy',
        room: 'Star Trek'
      };

      var resUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
      var targ = testUsers.removeUser('13');
      expect(targ).toEqual({
        id: '13',
        name: 'Luke',
        room: 'Star Wars'
      });
      expect(testUsers.users.length).toBe(2);
    });

    it('should NOT remove a user', () => {
      var targ = testUsers.removeUser('99');
      expect(targ).toNotExist();
      expect(testUsers.users.length).toBe(3);
    });

    it('should get a user', () => {
      var targ = testUsers.getUser('13');
      expect(targ).toEqual({
        id: '13',
        name: 'Luke',
        room: 'Star Wars'
      });

    });

    it('should NOT get a user', () => {
      var targ = testUsers.removeUser('99');
      expect(targ).toNotExist();
    });

    it('should return names for Trek', () => {
      var userList = testUsers.getUserList('Star Trek');
      expect(userList).toEqual(['Kirk','Bones']);
    });

    it('should return names for StarWars', () => {
      var userList = testUsers.getUserList('Star Wars');
      expect(userList).toEqual(['Luke']);
    });


  });
