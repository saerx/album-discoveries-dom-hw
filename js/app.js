document.addEventListener('DOMContentLoaded', () => {
    const albumForm = document.querySelector('#album-form');
    albumForm.addEventListener('submit', handleAlbumFormSubmit);









});

const handleAlbumFormSubmit = function (event) {
    event.preventDefault();

    const albumListItem = createAlbumListItem(event.target);
    const albumList = document.querySelector("#album-list");
    albumList.appendChild(albumListItem);

    event.target.reset();
}

const createAlbumListItem = function (form) {
    const albumListItem = document.createElement('li');
    albumListItem.classList.add('album-list-item');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    albumListItem.appendChild(title); 

    const artist = document.createElement('h3');
    artist.textContent = form.artist.value;
    albumListItem.appendChild(artist);

    const year = document.createElement('p');
    year.textContent = form.year.value;
    albumListItem.appendChild(year);

    return albumListItem;
}