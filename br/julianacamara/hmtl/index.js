function displayItem() {
    const el = document.querySelectorAll("h3");
    const p = document.querySelector("p");
    p.innerText = el[2].innerHTML;
}