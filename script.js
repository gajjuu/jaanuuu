const heartEmojis = ["💓", "💕", "💗", "💞", "❤️", "💖", "💘"];
const container = document.createElement("div");
container.id = "hearts-container";
document.body.appendChild(container);

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  container.appendChild(heart);

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Random size
  heart.style.fontSize = (Math.random() * 2 + 1) + "rem";

  // Random animation duration & delay
  const duration = Math.random() * 3 + 4; // 4–7s
  const delay = Math.random() * 5; // 0–5s
  heart.style.animation = `floatHearts ${duration}s linear ${delay}s forwards`;

  // Remove after animation ends
  setTimeout(() => heart.remove(), (duration + delay) * 1000);
}

// Generate hearts continuously
setInterval(createFloatingHeart, 300);

// Move-random button trick
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}
