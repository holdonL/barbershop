var button = document.querySelector(".js-show-map");
var map = document.querySelector(".modal-map");
var closemap = map.querySelector(".modal-close");

    button.addEventListener("click", function(evt) {
        evt.preventDefault();
        map.classList.add("modal-show");
})

    closemap.addEventListener("click", function(evt) {
        evt.preventDefault();
        map.classList.remove("modal-show");
    })