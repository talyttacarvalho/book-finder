page("/", pageIndex);
page("/books", pageBooks);
page("/bag", pageBag);
page();

function pageIndex() {
    $("main").empty();
    $("main").html(showIndex());
}

function pageBooks() {
    $("main").empty();
    $("main").html(showIndex());
    initBag();
    $("#totalSale").html(sumTotalSale());
    findBook();
}

function pageBag() {
    $("main").empty();
    $("main").html(showBag());
    listBag();
}
