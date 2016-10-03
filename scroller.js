// scroller.js

if (!!localStorage.scroll) {
  window.scrollTo(0, localStorage.scroll);
}

window.addEventListener('scroll', function(e) {
  localStorage.scroll = window.scrollY;
});
