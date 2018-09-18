var button = document.querySelector(".js-show-map");
var button2 = document.querySelector(".js-show-map2");
var map = document.querySelector(".modal-map");
var closemap = map.querySelector(".modal-close");

    button.addEventListener("click", function(evt) {
        evt.preventDefault();
        map.classList.add("modal-show");
})

    button2.addEventListener("click", function(evt) {
        evt.preventDefault();
        map.classList.add("modal-show");
})

    closemap.addEventListener("click", function(evt) {
        evt.preventDefault();
        map.classList.remove("modal-show");
    })