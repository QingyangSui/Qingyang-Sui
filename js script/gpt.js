// Function to fetch data from OCHRE API
function fetchData(uuid) {
    return fetch(`https://ochre.lib.uchicago.edu/ochre?uuid=${uuid}`)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            return parser.parseFromString(data, "text/xml");
        });
}

// Function to display title and properties of the item
function displayItem1(xmlDoc) {
    const title = xmlDoc.querySelector("title").textContent;
    document.getElementById("title1").innerText = title;

    const properties = xmlDoc.querySelectorAll("property");
    let propertiesHTML = "";
    properties.forEach(property => {
        const name = property.querySelector("string").textContent;
        const value = property.querySelector("value").textContent;
        propertiesHTML += `<strong>${name}</strong>: ${value}<br>`;
    });
    document.getElementById("properties1").innerHTML = propertiesHTML;
}

// Function to display title and preview image of the item
function displayItem2(xmlDoc) {
    const title = xmlDoc.querySelector("title").textContent;
    document.getElementById("title2").innerText = title;

    const previewImageURL = xmlDoc.querySelector("preview_image").textContent;
    const imageElement = document.createElement("img");
    imageElement.src = previewImageURL;
    imageElement.alt = title;
    document.getElementById("previewImage").appendChild(imageElement);
}

// Call fetchData function for each item
fetchData("6f18e3a7-a396-46d9-85cb-92674c24cfc0").then(displayItem1);
fetchData("50f7b9a5-329a-49ab-85e2-f8fb4ee6e867").then(displayItem2);
