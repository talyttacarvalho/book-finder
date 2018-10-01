function showIndex() {
  return `
  <!-- Tela principal -->
  <section id="main-screen">
    <div class="title-screen">
      <h1 class="icon-book-open text-warning d-flex flex-row"></h1>
      <h1 id="title" class="set-font text-warning d-flex flex-row config-title pt-3">Book Finder</h1>
    </div>
  </section>

  <!-- Buscador de livros -->
  <section id="book-search">
    <input id="inputSearchBooks" type="text" placeholder="Search Books">
    <button type="button" id="btnFindBook" class="btn btn-warning">Find</button>
  </section>

  <!-- Mensagem da página -->
  <section>
    <div>
      <div class="text-screen">
        <h3 class="d-flex flex-column align-items-center pt-3 pb-3">Find your favorite books here</h3>
        <h3 class="d-flex flex-column align-items-center pt-3">And have a good reading!!!</h3>
      </div>
      <img src="/dist/image/book-harry-potter.jpg" />
    </div>
  </section>

  <!-- Mostra os livros -->
  <section id="book-store">
    <div id="bagSale"></div>
    <div id="showBooks"></div>
  </section>
    `
}



    // <input id="inputSearchBooks" type="text" placeholder="Search Books">
    // <a href="/books">Find</a>
    // <div>Total: <span id="totalSale"></span> <a href="/bag">Show Your Bag</a></div>
    // <div id="showBooks"></div>
