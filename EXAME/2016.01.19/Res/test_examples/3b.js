let password = document.querySelector("#register input[type='password']");
password.addEventListener('blur', function() {
  if(!/\W{1,}/.test(password.value) || password.value.length < 8)
    password.style.borderColor = "red";
  else password.style.borderColor = "initial";
});

let form = document.querySelector('body form#register');
let username = form.children.username;
form.onsubmit = function(e){
    let request = new XMLHttpRequest();
    request.open('POST', 'verifyusername.php', false);
    let reply = false;
    request.onload = function(data){
        reply = JSON.parse(data.target.response).valid == "true";
        if(reply)
          username.style.borderColor = "initial";
        else
          username.style.borderColor = "red";
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send('username=' + username.value);
    return reply;
};