// Define the correct answers for each question
const correctAnswers = {
  question1: "71",
  question2: "through neurons",
  question3: "no",
    question4: "natural selection",
    question5: "earth's rotation and orbit",
    question6: "scattering of sunlight by the atmosphere",
    question7: "raindrops refracting and reflecting light",
    question8: "evolving resistance and mutation",
    question9: "3.5 billion years",
    question10: "to melt the snow and prevent it from freezing",
    question11: "no",
    question12: "wind movement",
    question13: "yes",
    question14: "yes",
    question15: "no",
    question16: "moisture from warm air condensing",
    question17: "measuring the decay of radioactive carbon-14",
    question18: "melting in contact with fresh water",
    question19: "from underground aquifers",
    question20: "by condensation of water vapor",
    question21: "no",
    question22: "no",
    question23: "yes",
    question24: "near the speed of light",
    question25: "it can strike the same place multiple times",
    question26: "they provide a path of least resistance",
    question27: "the difference in electric potential",
    question28: "the current and resistance",
    question29: "historical reasons and convention",
    question30: "deoxyribonucleic acid",
    question31: "206",
    question32: "Isaac Newton",
    question33: "diamond",
    question34: "nitrogen",
    question35: "98%",
    question36: "nitrogen",
    question37: "8 minutes",
    question38: "Stephen Hawking",
    question39: "-40 degrees",
    question40: "Poland",
    question41: "Jupiter",
    question42: "atomic number",
    question43: "33",
    question44: "Sputnik 1",
    question45: "Hippocratic Oath",
    question46: "insulator",
    question47: "Apollo 15",
    question48: "32",
    question49: "mycology",
  question50: "3 brains, 1 heart"
};

// Handle the form submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get all the submitted answers
  const submittedAnswers = {};

  for (let i = 1; i <= 50; i++) {
    const question = "question" + i;
    const userAnswer = quizForm.elements[question].value.trim().toLowerCase();
    submittedAnswers[question] = userAnswer;
  }

  // Calculate the score and feedback
  let score = 0;
  let feedback = "";

  for (let question in submittedAnswers) {
    if (submittedAnswers.hasOwnProperty(question)) {
      const userAnswer = submittedAnswers[question];
      if (userAnswer === correctAnswers[question]) {
        score++;
        feedback += "Question " + question.slice(8) + ": Correct\n";
        showQuestionStatus(question, "correct");
      } else if (userAnswer === "") {
        feedback += "Question " + question.slice(8) + ": Not answered\n";
        showQuestionStatus(question, "not-answered");
      } else {
        feedback += "Question " + question.slice(8) + ": Incorrect\n";
        showQuestionStatus(question, "incorrect");
      }
    }
  }

  // Display the score and feedback
  const resultMessage = "You scored " + score + " out of 50.\n\n" + feedback;
  showAlert(resultMessage);
});

document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("zozanation");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form submission from reloading the page
    showAlert("Form submitted successfully!");
  });
});

document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Call a function to calculate and display the scores
  calculateScores();
});

function calculateScores() {
  // Get the form element
  const form = document.getElementById("quiz-form");

  // Get all the input elements inside the form
  const inputs = form.getElementsByTagName("input");

  // Initialize variables for score calculation
  const totalQuestions = 50;
  let correctAnswers = 0;

  // Loop through the inputs and check the answers
  for (let i = 0; i < inputs.length; i++) {
    const answer = inputs[i].value.trim().toLowerCase();
    const questionNumber = i + 1;

    // Check if the answer is correct and increment the score
    if (isAnswerCorrect(questionNumber, answer)) {
      correctAnswers++;
    }
  }

  // Calculate the percentage score
  const percentageScore = (correctAnswers / totalQuestions) * 100;

  // Display the scores
  const resultElement = document.createElement("p");
  resultElement.innerHTML = "Your score: " + correctAnswers + "/" + totalQuestions + " (" + percentageScore + "%)";
  form.appendChild(resultElement);
}

function isAnswerCorrect(questionNumber, answer) {
  const question = "question" + questionNumber;
  return answer === correctAnswers[question];
}

function showAlert(message) {
  alert(message);
}

function showQuestionStatus(question, status) {
  const questionElement = document.getElementById(question);
  questionElement.classList.add(status);
}
