// Typing Effect
const text = "Aku bikin ini bukan karena aku jago ngoding... tapi karena kamu spesial.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = function() {
  typeWriter();
  createPetals();
};

// Show confession
function showConfession() {
  document.getElementById("confession").classList.remove("hidden");
}

// Accepted
function accepted() {
  document.getElementById("result").innerHTML =
    "<h2>Yeay 💕</h2><p>Sekarang kita resmi yaa 🌷</p>";
  triggerConfetti();
}

// Tombol kabur
function moveButton(button) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  button.style.transform = `translate(${x}px, ${y}px)`;
}

// Kelopak bunga
function createPetals() {
  for (let i = 0; i < 20; i++) {
    let petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(petal);
  }
}

// Simple confetti effect
function triggerConfetti() {
  for (let i = 0; i < 30; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-10px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background = ["#ff69b4", "#ff1493", "#ffb6c1", "#ff69b4"][Math.floor(Math.random() * 4)];
    confetti.style.borderRadius = "50%";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "1000";
    document.body.appendChild(confetti);

    let duration = 2 + Math.random() * 1;
    let startTime = Date.now();

    function animate() {
      let elapsed = (Date.now() - startTime) / 1000;
      let progress = elapsed / duration;

      if (progress > 1) {
        confetti.remove();
        return;
      }

      confetti.style.top = (progress * 100) + "vh";
      confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() - 0.5) * 2) + "%";
      confetti.style.opacity = 1 - progress;

      requestAnimationFrame(animate);
    }
    animate();
  }
}