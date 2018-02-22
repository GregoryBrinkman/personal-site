//calling all functions
makeCopyrightDate();

//functions
function makeCopyrightDate() {
  let el = document.querySelector('#cr-date');
  el.innerHTML = (new Date()).getFullYear();
}

function projects() {
  document.getElementById('projects').scrollIntoView({behavior:'smooth'});
}
