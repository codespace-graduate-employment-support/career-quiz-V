function submitAnswers() {
  var totalQuestions = 10;
  var score = 0;

  // Disable the submit button to prevent multiple submissions
  var submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;

  // Check form validity before proceeding with submission
  if (!document.getElementById('quizForm').checkValidity()) {
      // Enable the submit button again
      submitButton.disabled = false;
      return;
  }

  // Get the user's name
  var userName = document.getElementsByName('user_name')[0].value;

  for (var i = 1; i <= totalQuestions; i++) {
      var radios = document.getElementsByName('q' + i);
      var selectedAnswer = null;

      for (var j = 0; j < radios.length; j++) {
          if (radios[j].checked) {
              selectedAnswer = radios[j].value;
              break;
          }
      }

      // Check the correct answer
      if (selectedAnswer === getCorrectAnswer(i)) {
          score++;
      }
  }

  // Now, you can send the score to the backend or perform other actions
  submitResults(userName, score);
}

function getCorrectAnswer(questionNumber) {
  // Define correct answers for each question
  var correctAnswers = {
      1: 'B',
      2: 'C',
      3: 'B',
      4: 'D',
      5: 'C',
      6: 'C',
      7: 'C',
      8: 'C',
      9: 'C',
      10: 'C',
      // Add correct answers for other questions
  };

  return correctAnswers[questionNumber];
}