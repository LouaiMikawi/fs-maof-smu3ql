//https://getbootstrap.com/docs/4.4/components/forms/
let currentID = 0;
let Users = []
function nextUserId() {
  currentID++;
  return currentID;
}


// user class
function User(currentID , username , email , password ) {
  this.userid = currentID;
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.show = function()  {
  return `(user ID: ${this.userid}) name: ${this.username} password: ${this.password}`
}

window.onload = () => {
  document.querySelector('#save').addEventListener('click' , SaveUser);
  document.querySelector('#get').addEventListener('click' , getUser);  
  document.querySelector('#clear').addEventListener('click' , clearAll);    
}

function SaveUser() {
  let user = new User(nextUserId(), 'aaaa', 'bbbbb', 'pass')
  Users.push(user);
  //window.localStorage.setItem(user.userid , JSON.stringify(user))
}
                      
function getUser() {
  //let row = window.localStorage.getItem(currentID)
 // let item = JSON.parse(row)
 // let user = new User()
  alert(Users[0].show())
}

function clearAll() {
        let user = window.localStorage.clear();
}

exports.show = function() {
  alert('ok');
}


                      