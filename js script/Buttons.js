//Greet Button
function greetUser(){
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >5 && hour < 11){
        greeting = "Good morning";
    } else if (hour >=12 && hour < 18){
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    alert(greeting);
}

//Sumbit Button
function changeButtonTextAndclass(){
    let button = document.getElementById("submit");
    console.log("Before change:", button.textContent, button.className);

    button.textContent = "Done";
    button.className = "btn btn-success";

    console.log("After change:", button.textContent, button.className);
}

//Add event listeners
document.getElementById("greet").addEventListener("click", greetUser);
document.getElementById("submit").addEventListener("click",changeButtonTextAndclass);