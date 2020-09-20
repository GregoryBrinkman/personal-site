// //calling all functions
// makeCopyrightDate();

// //functions
// function makeCopyrightDate() {
//   document.querySelector('#cr-date').innerHTML = (new Date()).getFullYear();
// }

// function projects() {
//   document.getElementById('projects').scrollIntoView({behavior:'smooth'});
// }


let currency = 0;

document.getElementById('click').addEventListener('click', click);

function click() {
  currency += 1;
  updateCurrencyUI();
}

function updateCurrencyUI() {
  document.getElementById('currency').innerText = currency;
}

updateCurrencyUI();

function move(event) {
  let elem = event.srcElement.parentElement.querySelector('.bar');
  let timeout = event.srcElement.parentElement.dataset.idleTimeout;
  let weight = event.srcElement.parentElement.dataset.idleWeight;
  let width = 1;
  let id = setInterval(frame, 10);
  function frame() {
    if ((width/timeout) >= 100) {
      clearInterval(id);
      currency += Number(weight);
      updateCurrencyUI();
      event.srcElement.click();
    } else {
      width++;
      elem.style.width = (width/timeout) + '%';
      elem.innerText = (width/timeout) + '%';
    }
  }
}

  document.getElementById('addIdle').addEventListener('click', createIdleThingy);
  
  let idleTimeout = 1;
  let idleWeight = 1;
  function createIdleThingy() {
    idleTimeout *=  2;
    idleWeight *=  2;
    let container = document.createElement('div');
    container.className = 'idle-container';
    container.dataset.idleTimeout = idleTimeout;
    container.dataset.idleWeight = idleWeight;

    let bar = document.createElement('div');
    bar.className = "bar";
    bar.innerText = '0%';

    let clicker = document.createElement('button');
    clicker.innerText = 'click me';
    clicker.addEventListener('click', move, true);

    container.appendChild(bar);
    container.appendChild(clicker);
    
    document.getElementById('idleOutlet').appendChild(container);

  }
