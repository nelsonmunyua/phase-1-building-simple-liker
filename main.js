// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
const heart = document.getElementsByClassName("like-glyph")[0];

// Your JavaScript code goes here!

heart.addEventListener("click", () => {
  mimicServerCall()
    .then(function () {
      if (heart.innerHtml === EMPTY_HEART) {
        heart.innerHtml = FULL_HEART;
        heart.classList.add("activated-heart")
      } else {
        heart.innerHtml = EMPTY_HEART;
        heart.classList.add("activated-heart")
      }
    })

    .catch(function (error) {
      console.error("Error:", error);
      const errorModal = document.getElementById("modal");
      errorModal.classList.remove("hidden");
      errorModal.querySelector("P").textContent = error;

      sertimeoUt(() => errorModal.classList.add("hidden"), 3000);
    });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}