document.addEventListener('DOMContentLoaded', function () {
    fetch('sample-1.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const items = xml.querySelectorAll('ochre > items > spatialUnit');

            const itemList = document.getElementById('item-list');
            const itemTable = document.getElementById('item-table');

            items.forEach(item => {
                const label = item.querySelector('identification > label').textContent;
                const properties = item.querySelectorAll('properties > property > value');

                // Create list item for unordered list
                const listItem = document.createElement('li');
                listItem.textContent = label;
                itemList.appendChild(listItem);

                // Create table row for table
                const tableRow = document.createElement('tr');
                const labelCell = document.createElement('td');
                labelCell.textContent = label;
                tableRow.appendChild(labelCell);

                // Add properties to table row
                properties.forEach((property, index) => {
                    if (index < 3) { // Only taking first three properties for this example
                        const propertyCell = document.createElement('td');
                        propertyCell.textContent = property.textContent;
                        tableRow.appendChild(propertyCell);
                    }
                });

                itemTable.appendChild(tableRow);
            });
        })
        .catch(error => console.error('Error fetching XML:', error));
});
