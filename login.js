var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".login-form");
var login = popup.querySelector("[name=login]");
var pass = popup.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";

    try {
        storage = localStorage.getItem("login");
    } catch (err) {
        isStorageSupport = false;
    }

        link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
    if (isStorageSupport) {
        localStorage.setItem("login", login.value);
}   else {
        login.focus();
        }
    })

        close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    })

        form.addEventListener("submit", function(evt){
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
    if (isStorageSupport) {
        localStorage.setItem("login", login.value);
    }
    }
})