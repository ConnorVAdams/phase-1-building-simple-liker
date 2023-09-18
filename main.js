// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Initialize variables for DOM elements that will need to be manipulated.
const likeGlyphs = [...document.querySelectorAll('.like-glyph')];
const errorBanner = document.querySelector('#modal');

//Adds an event listener to manage heart styling and success/failure of HTTP requests.
likeGlyphs.forEach((glyph) => { //Iterate through the array of glyphs.
  glyph.addEventListener('click', (e) => { //Attach an event listener to each.
    mimicServerCall() //This takes the place of a fetch request for this lab.
    .then(() => { //Receives a promise and executes the following function if the Promise is successful.
      e.target.textContent === FULL_HEART ? e.target.textContent = EMPTY_HEART : e.target.textContent = FULL_HEART; //Toggles the heart between empty and full.
      e.target.classList.toggle('activated-heart'); //Toggles the heart between red and greyscale.
    })
    .catch(() => { //Receives a promise and defines behavior in the event of an unsuccessful response.
      errorBanner.classList.remove('hidden'); //Shows error banner.
      setTimeout(() => { //Hides error banner after 3 seconds.
        errorBanner.classList.add('hidden')
        }, 3000);
    })
  });
});

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
