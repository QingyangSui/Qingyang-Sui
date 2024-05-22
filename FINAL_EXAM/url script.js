document.addEventListener('DOMContentLoaded', () => {
    fetch('https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'application/xml');
            displayData(xmlDoc);
        })
        .catch(error => console.error('Error fetching XML:', error));
});

function displayData(xml) {
    const items = xml.getElementsByTagName('spatialUnit');
    const itemList = document.getElementById('item-list');
    const itemTable = document.getElementById('item-table');

    for (let i = 0; i < items.length; i++) {
        const label = items[i].getElementsByTagName('label')[0].textContent;
        const properties = items[i].getElementsByTagName('property');

        // Create list item
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = label;
        itemList.appendChild(listItem);

        // Create table row
        const row = document.createElement('tr');
        const labelCell = document.createElement('td');
        labelCell.textContent = label;
        row.appendChild(labelCell);

        for (let j = 0; j < 3; j++) {
            const propertyCell = document.createElement('td');
            propertyCell.textContent = properties[j] ? properties[j].getElementsByTagName('value')[0].textContent : '';
            row.appendChild(propertyCell);
        }

        itemTable.appendChild(row);
    }
}


