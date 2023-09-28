let username;

document.getElementById("mybutton").onclick = function() {
    username = document.getElementById("mytext").value;
    // alert(username);
    document.getElementById("mylabel").innerHTML = 'Hello ' + username + '!';
}

let age = window.prompt("Enter your age");
      age += 1;
      window.alert("Your age next year will be " + age);


      function sum(...numbers){
        let total = 0;
        for(let number of numbers){
            total += number;
        }
      }
