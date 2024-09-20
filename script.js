const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const button = document.getElementById('button');
// Add click event listener to toggle the open class
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');

});
button.addEventListener('click',()=>{
  location.reload();
});