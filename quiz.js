function checkAnswer() {
    // Correct answer
    let correctAnswer = "4";

    // Get the user's selected answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Handle case where no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        document.getElementById("feedback").style.color = "#dc3545"; // red
        return;
    }

    let userAnswer = selectedOption.value;

    // Compare answers and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "#28a745"; // green
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "#dc3545"; // red
    }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
