//alert(add(2, 3));
//alert(add("Jakob", "Stjernholm"));
//alert(superAdder(2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 21, 31232, 23));

//alert(add(6));
function add(a, b) {
    // kasta undantag om det inte är nummer
    return a + b;
}

function superAdder() {
    var tal = 0;
    for (var i = 0; i < arguments.length; i++) {
        tal += arguments[i];
    }
    return tal;
}
