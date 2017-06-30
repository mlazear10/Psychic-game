//   User to make a choice
//   Computer to make a choice
//   Compare these choices
//   Compare these choices and determine a win or loss
//   Set a limit for guesses
//   Reset game when guesses limit is reached
//   Display the result to the user 
//   Display user guesses as game is played

     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     var wins = 0;
     var losses = 0;
     var clickCount = 0;
     var clickCountMax = 9;
     var showGuesses = [];
     var userguess = '';

     function display () {
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("losses").innerHTML = losses ;
      document.getElementById("guesses-left").innerHTML = clickCountMax;
      document.getElementById("user-guesses").innerHTML = showGuesses;

     }

      function reset () {
        clickCountMax = 9; losses = 0; showGuesses = []; wins = 0;

        display();
      }

      document.onkeyup = function() {
      var userguess = String.fromCharCode(event.keyCode).toLowerCase();

      console.log(userguess);

      var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];

      console.log(computerGuess);

      showGuesses.push(userguess);
      display();
      console.log(showGuesses);

      if ((userguess==computerGuess)) {
          wins++; 
          display();

      }

      if ((userguess!==computerGuess)) {
          losses++;
          display();

      }

      if  ((clickCount < clickCountMax)) {
        clickCountMax--; 

      }
          

     if  (clickCountMax==0) {
        reset (); 

      }
     


      }