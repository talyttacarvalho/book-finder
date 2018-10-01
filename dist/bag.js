function showBag() {
  return `
  <a href="/">Home</a>
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
  bag.push(book);

  localStorage.setItem("bagItems", JSON.stringify(bag));

  $("#totalSale").html(sumTotalSale());

}

function sumTotalSale() {
  let totalSale = 0;
  let bag = JSON.parse(localStorage.getItem("bagItems"))

  if (bag) {
      bag.map((book) => {
          totalSale += parseFloat(book.price);
      });
  }
  return totalSale;
}

function listBag() {

  $("#showBag").empty();

  let bag = JSON.parse(localStorage.getItem("bagItems"));

  bag.map((book) => {
      let html = `
          <p>${book.title}</p>
          <p>${book.price}</p>
      `;

      $("#showBag").append(html);
  });

  $("#totalSaleBag").html(sumTotalSale());
}
