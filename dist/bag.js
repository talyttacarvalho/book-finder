function showBag() {
  return `
  <a href="/books">Home</a>
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
          <p>${book.title}</p>
          <p>${book.price}</p>
          <p><button onclick="removeFromBag(${book.id})">Remove</button></p>
      `;

      $("#showBag").append(html);
  });

  $("#totalSale").html(sumTotalSale());
  $("#totalSaleBag").html(sumTotalSale());
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
