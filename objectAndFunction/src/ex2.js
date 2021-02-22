/**Requirements:
Write a simple User function constructor that creates an user object with private name */

function User(name){
    this.getName = function () {
        return name;}
    this.setName = function (newName) {
        name = newName;}
      
    
}

const user = new User('Anh');
console.log(Object.keys(user))
console.log(user.getName())
user.setName('Anh Nguyen')
console.log(user.getName())

