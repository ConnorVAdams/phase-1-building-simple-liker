// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Initialize variables for DOM elements that will need to be manipulated.
const likeGlyphs = [...document.querySelectorAll('.like-glyph')]
const errorBanner = document.querySelector('#modal')

//Adds an event listener that sends an HTTP request when the like button is clicked.
// likeGlyphs.forEach((element) => {
//   element.addEventListener('click', () => {
//     console.log('pinging server')
//   })
// })

//Adds an event listener that changes the text and class of the heart.
likeGlyphs.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.target.textContent === FULL_HEART ? e.target.textContent = EMPTY_HEART : e.target.textContent = FULL_HEART;
  })
})

//Defines behavior for when user clicks on heart (using .toggle()), dependent on whether or not it's already been liked.
// const changeGlyph = ('click', (e) => {
//   //If the heart class is activated, remove that class and change the glpyh.
//   console.log(e.target)
//   //Else add that class and change the glyph.
// })

//Added to heart buttons w/ an event listener. Pings the server and changes the content of the span w/ class 'like-glyph'
const addLike = () => {
  //Invoke mimicServerCall to attempt to fetch a response from server.

  //If successful, change 'like-glyph' text content.

    //Then add .activated-heart CSS class to make it red.

  //If unsuccessful, display error modal.

    //Make modal hidden again after 3 seconds.
}

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
