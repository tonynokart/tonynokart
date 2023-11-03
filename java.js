//work in progress

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

const arrow1 = document.querySelector('.arrow.one');
const arrow2 = document.querySelector('.arrow.two')

//when arrow1 is clicked the screen scrolls down
arrow1.addEventListener('click', () => {
    window.scrollTo(0, 740) //needs fixing, moves to px coordinates not with screen size
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("header").style.background = "white";
  } else {
    document.querySelector("header").style.background = "unset";
  }
}
