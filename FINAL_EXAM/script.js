document.addEventListener('DOMContentLoaded', () => {
    fetchXMLData();
});

function fetchXMLData() {
    fetch('xmlSample.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            displayData(xmlDoc);
        })
        .catch(error => {
            console.error('Error fetching the XML file:', error);
        });
}

function displayData(xmlDoc) {
    const spatialUnits = xmlDoc.getElementsByTagName('spatialUnit');
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    for (let i = 0; i < spatialUnits.length; i++) {
        const spatialUnit = spatialUnits[i];
        const n = spatialUnit.getAttribute('n');

        if (n === "0") {
            const identification = spatialUnit.getElementsByTagName('identification')[0].textContent;
            const properties = spatialUnit.getElementsByTagName('property');
            let parish = '';

            for (let j = 0; j < properties.length; j++) {
                const label = properties[j].getElementsByTagName('label')[0].textContent;
                if (label.includes('Belongs to parish')) {
                    parish = properties[j].getElementsByTagName('value')[0].textContent;
                    break;
                }
            }

            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const parishCell = document.createElement('td');

            idCell.textContent = identification;
            parishCell.textContent = parish;

            row.appendChild(idCell);
            row.appendChild(parishCell);
            tableBody.appendChild(row);
        }
    }
}
