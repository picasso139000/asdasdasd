// Step 1 (GET)
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const mountains_front = document.getElementById('mountains_front');
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// Step 2 (Event)
window.addEventListener('scroll' , function(){
  let value = window.scrollY;

  // Step 3 (Motion)
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
}) 

// Add scroll event listener
// window.addEventListener('scroll', function() {
  // Get the current scroll position
  // let value = window.scrollY;
  
  // Update element styles based on scroll position
//   stars.style.left = value * 0.25 + 'px';
//   moon.style.top = value * 1.05 + 'px';
//   mountains_behind.style.top = value * 0.5 + 'px';
//   mountains_front.style.top = value * 0 + 'px';
//   text.style.marginRight = value * 4 + 'px';
//   text.style.marginTop = value * 1.5 + 'px';
//   btn.style.marginTop = value * 1.5 + 'px';
//   header.style.top = value * 0.5 + 'px';
// });