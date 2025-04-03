document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trivia-form");
    const questionContainer = document.getElementById("question-container");
    const newPlayerButton = document.getElementById("new-player");
    const usernameInput = document.getElementById("username");
    form.addEventListener("submit", handleFormSubmit);
    newPlayerButton.addEventListener("click", startNewPlayer);
});
    
    // Initialize the game
    fetchQuestions();
    displayScores();
 
    form.addEventListener("submit", handleFormSubmit);
    newPlayerButton.addEventListener("click", startNewPlayer);

    function fetchQuestions() {
        showLoading(true);
 
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then((response) => response.json())
            .then((data) => {
                displayQuestions(data.results);
                showLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
                showLoading(false);
            });
    }

    function showLoading(isLoading) {
        document.getElementById("loading-container").classList = isLoading ? "" : "hidden";
        document.getElementById("question-container").classList = isLoading ? "hidden" : "";
    }

    function displayQuestions(questions) {
        questionContainer.innerHTML = "";
        questions.forEach((question, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.innerHTML = `<p>${question.question}</p>`;
            questionContainer.appendChild(questionDiv);
        });
    }

    function createAnswerOptions(correctAnswer, incorrectAnswers, questionIndex) {
        const allAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);
        return allAnswers
            .map(
                (answer) => `
            <label>
                <input type="radio" name="answer${questionIndex}" value="${answer}" ${
                    answer === correctAnswer ? 'data-correct="true"' : ""
                }>
                ${answer}
            </label>
        `
            )
            .join("");
    }

    function fetchQuestions() {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results); // Temporary log
            })
            .catch((error) => console.error("Error fetching questions:", error));
    }