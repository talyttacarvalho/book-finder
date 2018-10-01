function showListBooks() {
  return `
  <!-- Mostra os livros -->
  <section id="book-store">
    <div id="bagSale"></div>
    <div id="showBooks"></div>
  </section>
    `
}

function findBook() {

  const key = "AIzaSyC2SPPOKqcmj51YuOnV3LNr7We8ErQKKKo";

  let api = `https://www.googleapis.com/books/v1/volumes?key=${key}&q=${search()}`;

  $("#showBooks").empty();

  $.get(api, loadBooks);

}

function loadBooks(data) {
  data.items.map((item) => {

      let book = {};
      book.id = item.id;
      book.title = item.volumeInfo.title;
      book.authors = (item.volumeInfo.authors) ? item.volumeInfo.authors : "";
      book.description = (item.volumeInfo.description) ? item.volumeInfo.description : "";
      book.pages = item.volumeInfo.pageCount;
      book.publisher = (item.volumeInfo.publisher) ? item.volumeInfo.publisher : "";
      book.publishedDate = item.volumeInfo.publishedDate;
      book.buyLink = item.saleInfo.buyLink;
      book.imageLinks = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.smallThumbnail : "";
      book.price = (item.saleInfo.saleability === "FOR_SALE") ? item.saleInfo.listPrice.amount : "unavailable";

      showBooks(book);
  });
}

function showBooks(book) {
  let html = `
          <hr>
          <p>${book.title}</p>
          <p>${book.description}</p>
          <p>${book.authors.toString()}</p>
          <p>${book.publisher}</p>
          <p>${book.publishedDate}</p>
          <p>${book.pages}</p>
          <p>${book.price}</p>
          <img src="${book.imageLinks}">
          <p><button data-title="${book.title}" data-price="${book.price}" onclick="addBag(event)">Buy</button></p>
          <hr>
      `;

  $("#showBooks").append(html);
}
