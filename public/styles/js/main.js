//calling all functions
makeCopyrightDate();

//functions
function makeCopyrightDate() {
  document.querySelector('#cr-date').innerHTML = (new Date()).getFullYear();
}

function projects() {
  document.getElementById('projects').scrollIntoView({behavior:'smooth'});
}
