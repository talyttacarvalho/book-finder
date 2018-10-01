function showIndex(){
  $("#initializing").delay("3000").fadeToggle("slow");
  $("#main-screen").delay("3000").fadeIn("slow");
  $("#book-search").delay("3000").fadeIn("slow");
  $("#config-image").delay("3000").fadeIn("slow");
  $("footer").delay("3000").fadeIn("slow");
}

function showHome(){
  return `
  <!-- Mensagem da página -->
  <section id="config-image">
    <div class="config-image">
      <div class="text-screen">
        <h3 class="d-flex flex-column align-items-center pt-3 pb-3">Find your favorite books here</h3>
        <h3 class="d-flex flex-column align-items-center pt-3">And have a good reading!!!</h3>
      </div>
      <img src="/dist/image/book-harry-potter.jpg" />
    </div>
  </section>
  `;
}

function search() {
  return $("#inputSearchBooks").val();
}



    // <input id="inputSearchBooks" type="text" placeholder="Search Books">
    // <a href="/books">Find</a>
    // <div>Total: <span id="totalSale"></span> <a href="/bag">Show Your Bag</a></div>
    // <div id="showBooks"></div>
