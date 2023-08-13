'use strict';

function Person(name, pass) {
    this.name = name;
    this.pass = pass;

}

Person.prototype.name = ''

Person.prototype.getLevel = function () {
    return this.level;
}

Person.prototype.level = 'level'

function User(name) {
    this.name = name
}

User.prototype = new Person()

let persion = new Person('hello', '0123')

let user = new User('laa', '1223')

console.log(user.name)
console.log(user.getLevel())
console.log(user.pass)
//
console.log(persion.name)
console.log(persion.getLevel())
console.log(persion.pass)

class TestClass {
    TestClass(name, pass) {
        this._name = name;
        this._pass = pass;
    }

    get name() {
        return this._name;
    }
}

let test = new TestClass('teo', 'control');
console.log(test.name)