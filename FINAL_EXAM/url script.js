document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/' + url;

    fetch(proxyUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            console.log('Parsed XML:', xml);  // Log parsed XML for debugging
            const items = xml.querySelectorAll('ochre > items > spatialUnit');
            console.log('Items:', items);  // Log items for debugging

            if (items.length === 0) {
                throw new Error('No items found in XML');
            }

            const itemList = document.getElementById('item-list');
            const itemTable = document.getElementById('item-table');

            items.forEach(item => {
                const label = item.querySelector('identification > label')?.textContent || 'N/A';

                // Create and append list item
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = label;
                itemList.appendChild(listItem);

                // Create and append table row
                const row = document.createElement('tr');
                const properties = item.querySelectorAll('properties > property > value');

                row.innerHTML = `
                    <td>${label}</td>
                    <td>${properties[0]?.textContent || 'N/A'}</td>
                    <td>${properties[1]?.textContent || 'N/A'}</td>
                    <td>${properties[2]?.textContent || 'N/A'}</td>
                `;
                itemTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching or processing XML:', error);
        });
});
