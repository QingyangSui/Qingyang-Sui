// First JS Function
function lastItem(fruits, outputId) {
    fruits.sort((a, b) => a.localeCompare(b));
    const lastAlphabetical = fruits[fruits.length - 1];
    const outputDiv = document.getElementById(outputId);
    if (!outputDiv.innerHTML) {
        outputDiv.innerHTML = `Fruits sorted: ${fruits.join(', ')}<br>Last Alphabetical Item: ${lastAlphabetical}`;
    }
    toggleVisibility(outputId); // Assuming toggleVisibility is defined elsewhere
}

// Second JS Function
function getAndSort() {
    let numberOfCategories = parseInt(prompt("How many categories would you like to enter? (2-4)"));

    while (isNaN(numberOfCategories) || numberOfCategories < 2 || numberOfCategories > 4) {
        numberOfCategories = parseInt(prompt("Invalid. Please enter a valid number between 2 and 4."));
    }

    let categories = [];
    let items = [];
    let sortedItems = [];

    for (let i = 0; i < numberOfCategories; i++) {
        categories.push(prompt(`Enter category ${i + 1} of ${numberOfCategories}:`));
    }

    for (let category of categories) {
        let item = prompt(`Enter one ${category}:`);
        items.push(item);
        sortedItems.push(item);
    }

    sortedItems.sort();

    let displayArea = document.getElementById('displayArea');

    displayArea.innerHTML = `Entered:<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    displayArea.innerHTML += `Sorted:<ul>${sortedItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// Assuming toggleVisibility is defined elsewhere
document.getElementById('sortButton').addEventListener('click', getAndSort);
