// script.js

function searchArtist() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === '') {
        alert('Please enter an artist name');
        return;
    }

    const baseURL = 'https://musicbrainz.org/ws/2/artist/?query=';
    const format = '&fmt=json';
    const url = baseURL + encodeURIComponent(searchInput) + format;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (data.artists && data.artists.length > 0) {
        const artists = data.artists;
        const resultList = document.createElement('ul');

        artists.forEach(artist => {
            const listItem = document.createElement('li');
            const artistLink = document.createElement('a');
            artistLink.href = '#';
            artistLink.textContent = artist.name;
            artistLink.onclick = () => searchAlbums(artist.id);
            listItem.appendChild(artistLink);
            resultList.appendChild(listItem);
        });

        searchResults.appendChild(resultList);
    } else {
        searchResults.textContent = 'No artists found';
    }
}

function searchAlbums(artistId) {
    const baseURL = 'https://musicbrainz.org/ws/2/release/?artist=';
    const format = '&fmt=json';
    const url = baseURL + artistId + format;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayAlbums(data))
        .catch(error => console.error('Error:', error));
}

function displayAlbums(data) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (data.releases && data.releases.length > 0) {
        const releases = data.releases;
        const table = document.createElement('table');
        const headerRow = table.insertRow(0);
        const header1 = document.createElement('th');
        header1.textContent = 'Release Date';
        const header2 = document.createElement('th');
        header2.textContent = 'Album Name';
        headerRow.appendChild(header1);
        headerRow.appendChild(header2);

        releases.forEach(release => {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            cell1.textContent = release.date;
            const cell2 = row.insertCell(1);
            cell2.textContent = release.title;
        });

        searchResults.appendChild(table);
    } else {
        searchResults.textContent = 'Not Found';
    }
}
