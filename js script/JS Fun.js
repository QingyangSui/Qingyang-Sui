// First function
function checkTriviaAnswer() {
    const answer = document.getElementById("triviaanswer").value.trim();
    const responseElement = document.getElementById("triviaresponse");
    const correctAnswer = "Paris";
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        responseElement.textContent = `Correct! Your answer "${answer}" is correct.`;
    } else {
        responseElement.textContent = `Incorrect! Your answer "${answer}" is incorrect. Try another one.`;
    }
}

// Second function
function checkNumber() {
    const numInput = document.getElementById('numberinput').value;
    const num = parseInt(numInput);
    const numberResponseElement = document.getElementById('numberresponse');
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
        const isEven = num % 2 === 0;
        numberResponseElement.innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;
    } else {
        numberResponseElement.innerText = "Please enter a valid 5-digit number.";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const triviaInput = document.getElementById("triviaanswer");
    triviaInput.addEventListener("keydown", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            checkTriviaAnswer();
        }
    });

    const numberInput = document.getElementById("numberinput");
    numberInput.addEventListener("keydown", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            checkNumber();
        }
    });

    const triviaSubmitButton = document.getElementById("triviasubmit");
    triviaSubmitButton.addEventListener("click", checkTriviaAnswer);

    const numberSubmitButton = document.getElementById("numbersubmit");
    numberSubmitButton.addEventListener("click", checkNumber);
});
