//calling all functions
makeCopyrightDate();

//functions
function makeCopyrightDate() {
  let el = document.querySelector('#cr-date');
  el.innerHTML = (new Date()).getFullYear();
}
