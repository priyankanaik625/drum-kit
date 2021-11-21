// MY SOLUTION

// const keys = document.querySelectorAll(".key"); //thids givs us NodeList of array elements
// const audios = document.querySelectorAll("audio");
// document.addEventListener("keydown", (event) => {
//   keys.forEach((key) => {
//     const keyName = key.querySelector(".key__name").textContent.toLowerCase();
//     if (event.key === keyName) {
//       for (const audio of audios) {
//         if (key.dataset.key === audio.dataset.key) {
//           audio.play();
//         }
//       }
//     }
//   });
// });

//WESBOSS SOLUTION
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
