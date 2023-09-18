// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Initialize variables for DOM elements that will need to be manipulated.
const likeGlyphs = [...document.querySelectorAll('.like-glyph')];
const errorBanner = document.querySelector('#modal');

//Adds an event listener that sends an HTTP request when the like button is clicked.
// likeGlyphs.forEach((element) => {
//   element.addEventListener('click', () => {
//     console.log('pinging server')
//   })
// })

// TODO Can the first line of this callback function be refactored to use .toggle()?
//Adds an event listener to like-glyph that changes the text and class of the heart.
likeGlyphs.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.target.textContent === FULL_HEART ? e.target.textContent = EMPTY_HEART : e.target.textContent = FULL_HEART; //Toggles heart between empty and full.
    e.target.classList.toggle('activated-heart') //Toggles heart between red and not red.
  });
});

//Adds an event listener to the error modal which toggles show/hide and removes it after 3 seconds if shown.
const toggleErrorModal = () => {
  errorBanner.toggle('hidden')
}

errorBanner.setTimeOut

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
