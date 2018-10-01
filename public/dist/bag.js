function showBag() {
  return `
  <div class="set-home"><a href="/books" class="btn btn-warning">Home</a></div>
  <div>
      <div id="showBag"></div>
      <span id="totalSaleBag"></span>
  </div>
  `
}

let bag = [];

function initBag() {
  let bagLocal = JSON.parse(localStorage.getItem("bagItems"));
  if (!bagLocal) {
      localStorage.setItem("bagItems", JSON.stringify(bag));
  }
}

function addBag(event) {
  let book = event.target.dataset;

  bag = JSON.parse(localStorage.getItem("bagItems"));
  book.id = bag.length;
  bag.push(book);

  localStorage.setItem("bagItems", JSON.stringify(bag));

  $("#totalSale").html(sumTotalSale());
}

function sumTotalSale() {
  let totalSale = 0;
  bag = JSON.parse(localStorage.getItem("bagItems"))

  if (bag) {
      bag.map((book) => {
          totalSale += parseFloat(book.price);
      });
  }
  return totalSale.toFixed(2);
}

function listBag() {

  $("#showBag").empty();

  let bag = JSON.parse(localStorage.getItem("bagItems"));

  bag.map((book) => {
      let html = `
          <p class="set-books">Name: ${book.title}</p>
          <p class="set-books">Price: R$${book.price}</p>
          <p><button type="button" class="btn btn-danger" onclick="removeFromBag(${book.id})">Remove</button></p>
      `;

      $("#showBag").append(html);
  });

  $("#totalSale").html(sumTotalSale());
  // $("#totalSaleBag").html(sumTotalSale());
}

function removeFromBag(bookId){
  console.log(bookId);
  bag = JSON.parse(localStorage.getItem("bagItems"));
  console.log(bag);
  bag = bag.filter((book) => {
    return book.id != bookId;
  });
  console.log(bag);

  localStorage.setItem("bagItems", JSON.stringify(bag));
  listBag();
}

