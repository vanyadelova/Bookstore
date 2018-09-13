let bookDB;

getData();

function getData() {
    fetch("https://api.myjson.com/bins/8zpvs")

        .then(response => response.json())

        .then((jsonData) => {
            bookDB = jsonData.books;
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


function doSearch(e){
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('books');
    filter = document.getElementById("search").value.toUpperCase();
    console.log(filter);
    
    let res = bookDB.filter((book)=>{return JSON.stringify(book).toUpperCase().includes(filter) >0})
    console.log(res);
    
    printBooks(res)
    

}
    


