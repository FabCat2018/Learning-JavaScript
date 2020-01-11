let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

let btn = document.querySelector('button');
btn.addEventListener('click', buttonHandler);
let overlay = document.querySelector('.overlay');

for (let i = 1; i <= 5; i++) {
  let newImage = document.createElement('img');
  let path = 'images/pic' + i + '.jpg';
  newImage.setAttribute('src', path);
  newImage.addEventListener('click', imageHandler);
  thumbBar.appendChild(newImage);
}

function imageHandler(event) {
  let source = event.target.getAttribute('src');
  displayedImage.setAttribute('src', source);
}

function buttonHandler() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}