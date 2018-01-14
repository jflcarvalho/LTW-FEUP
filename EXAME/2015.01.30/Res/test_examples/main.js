let guess = document.querySelector('input[name="guess"]');
let guessButton = document.querySelector('input#guess[type="button"]');
guessButton.addEventListener('click', function (event){
	tries++;
	if(guess.value > secret){
  	alert("go down");
  } else if(guess.value < secret){
  	alert("go up");
  } else {
  	correct();
  }
});

function correct(){
	alert("correct");
  let request = new XMLHttpRequest();
  let username = document.querySelector('input[name="username"]').value;
  let requestString = "username=" + username + "&tries=" + tries;
  request.open('GET', 'save_score.php?' + requestString);
  request.onload = function(data){
  	if(data.target.status == 200)
        alert('success');
    else
        alert('unsuccess');
  };
  request.send();
}