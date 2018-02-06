[{
  id: 'asdfsfaa',
  name: 'Jimmy',
  room: 'Course'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// ES6 class syntax

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var targ;
    this.users = this.users.filter((user) => {
      if (user.id === id) {
        targ = user;
        return false;
      } else {
        return true;
      }
    });
    return targ;
  }

  getUser (id) {
    var allMatch = this.users.filter((user) => user.id === id);
    return allMatch[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDesc() {
//     return `${this.name} is ${this.age} year(s) old`;
//   }
//
// }
//
// var me = new Person('Jimmy', 52);
//
// var desc = me.getUserDesc();
// console.log(desc);
