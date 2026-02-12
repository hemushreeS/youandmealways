// Scroll animation (keep existing)
const items = document.querySelectorAll(".timeline-item");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();


// FINAL BUTTON LOGIC
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const buttonArea = document.querySelector(".final-buttons");

// YES → show popup
yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

const noMessage = document.getElementById("noMessage");

const cuteMessages = [
  "Please don't click that 😢",
  "Nooo, that's illegal 💔",
  "I won’t accept this 😭",
  "Be kind, press YES 💖",
  "Heyyy... why NO? 🥺"
];

// NO button runs away
function moveNoButton() {
  const areaRect = buttonArea.getBoundingClientRect();

  const maxX = areaRect.width - noBtn.offsetWidth;
  const maxY = areaRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Show random cute message
  const randomText = cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
  noMessage.textContent = randomText;
  noMessage.style.left = `${randomX}px`;
  noMessage.style.top = `${randomY - 25}px`;
  noMessage.style.opacity = "1";

  // Hide after 1 second
  setTimeout(() => {
    noMessage.style.opacity = "0";
  }, 1000);
}

// Desktop + mobile support
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
