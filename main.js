

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
    mimicServerCall();
})



function likeButton(event) {
  console.log(event.target)
  let error = document.getElementByID("modal-message")
  error.hidden = true
}


// fetch("http://mimicServer.example.com")
// .then(resp => resp.json())
// .then(data => {
//   console.log(data)
//   let error = document.getElementByID("modal-message")
//   error.hidden = true
//   document
// })

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
