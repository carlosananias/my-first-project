(function () {
    getPhotos();
})();

function getPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((res) => {
            handlePhotos(res);
        })
        .catch((err) => console.error(err));
}

function handlePhotos(photos) {
    let section = document.querySelector(".photos");
    let html = "";

    for (const photo of photos) {
        html += `
            <div>
                <h1>${photo.title}</h1> 
                <img src="${photo.thumbnailUrl}" />
            </div>
        `;
    }

    section.innerHTML = html;
}
