getData();

function getData() {
    fetch("https://api.myjson.com/bins/8zpvs")

        .then(response => response.json())

        .then((jsonData) => {

            var data = jsonData;

            printBooks(data.books);
        });
}


function printBooks(data) {

    console.log(data);
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].title)
    }

    document.getElementById("books").innerHTML = "";
    var template = "";

    data.forEach(function (book) {

        template += `

        <div class = "flip-container" ontouchstart="this.classList.toggle('hover');">
            <div class = "flipper">
                <div class = "front">
                    <img src = "${book.cover}" alt="${book.title}">
                </div>
                <div class="back container">
                    <h2>${book.title}</h2>
                    <span>${book.description}</span>
                    <a data-fancybox="gallery" href="${book.detail}"><button class="btn">More Info</button></a>
                </div>
            </div>
        </div>
        `;



    })
    document.getElementById("books").innerHTML = template;
}
