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