// =====================================================
// CUSTOMIZE YOUR BIRTHDAY WEBSITE HERE
// =====================================================

const CONFIG = {
  husbandName: "My Love Abhi",

  wishTitle: "Happy Birthday, My Love Abhii❤️",
  wishText:
    "Today is all about celebrating the most special person in my life. " +
    "I feel so lucky to have you beside me. Every moment with you is something I treasure.",

  photos: [
    { src: "assets/photos/photo1.jpg", caption: "Our beautiful memories ❤️" },
    { src: "assets/photos/photo2.jpg", caption: "Every moment with you is special." },
    { src: "assets/photos/photo3.jpg", caption: "My favorite person." },
    { src: "assets/photos/photo4.jpg", caption: "You + Me = My favorite story ❤️" }
  ],

  balloonMessages: [
    "Abhi, may you always be happy and blessed. ❤️",

    "May all your dreams come true, Abhi. ✨",

    "Abhi, may God always protect and guide you. 🙏❤️",

    "You are my greatest blessing, Abhi. 💕",

    "Abhi, after all the words, all the memories and everything I feel for you... there is only one thing left to say — I LOVE YOU. ❤️"
 ],
  loveLetter:
`My Love Abhi,

On your birthday, I just want you to know how grateful I am to have you in my life.

You are not just my husband, but my best friend, my safe place and the person who makes my life more beautiful.

Thank you for every smile, every little moment, every memory and every time you have stood beside me.

I hope this birthday brings you all the happiness you deserve.

No matter where life takes us, I want to keep making beautiful memories with you.

Happy Birthday Abhii,

Forever yours ❤️`,

  signature: "Namuu ❤️",

  finalTitle: "Thank You For Being Mine ❤️",
  finalText:
    "Happy Birthday, My Love Abhii. Here is to us, to our memories, " +
    "and to all the beautiful moments still waiting for us.",
  forever: "Namrata ❤️"
};

// =====================================================
// WEBSITE LOGIC — normally you don't need to edit below
// =====================================================

const stages = [...document.querySelectorAll(".stage")];
const showStage = (number) => {
  stages.forEach((stage, index) => stage.classList.toggle("active", index === number - 1));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const $ = (id) => document.getElementById(id);

$("wishTitle").textContent = CONFIG.wishTitle;
$("wishText").textContent = CONFIG.wishText;
$("letterText").textContent = CONFIG.loveLetter;
$("signature").textContent = CONFIG.signature;
$("finalTitle").textContent = CONFIG.finalTitle;
$("finalText").textContent = CONFIG.finalText;
$("foreverText").textContent = CONFIG.forever;

// Gift
$("giftBtn").addEventListener("click", () => {
  const gift = $("giftBtn");
  gift.classList.add("open");
  burstHearts(22);
  setTimeout(() => showStage(2), 850);
});

// Birthday wish
$("toPhotos").addEventListener("click", () => {
  currentPhoto = 0;
  renderPhoto();
  showStage(3);
});

// Photos
let currentPhoto = 0;

function renderPhoto() {
  const img = $("slideImage");
  const placeholder = $("photoPlaceholder");
  const photo = CONFIG.photos[currentPhoto];

  $("photoCounter").textContent = `${currentPhoto + 1} / ${CONFIG.photos.length}`;
  $("slideCaption").textContent = photo?.caption || "";

  if (!photo?.src) {
    img.style.display = "none";
    placeholder.style.display = "grid";
    return;
  }

  img.style.display = "block";
  placeholder.style.display = "none";
  img.style.opacity = "0";

  const temp = new Image();
  temp.onload = () => {
    img.src = photo.src;
    img.alt = photo.caption || "Our memory";
    requestAnimationFrame(() => (img.style.opacity = "1"));
  };
  temp.onerror = () => {
    img.style.display = "none";
    placeholder.style.display = "grid";
  };
  temp.src = photo.src;

  $("toBalloons").classList.toggle("hidden", CONFIG.photos.length === 0);
}

$("prevPhoto").addEventListener("click", () => {
  if (!CONFIG.photos.length) return;
  currentPhoto = (currentPhoto - 1 + CONFIG.photos.length) % CONFIG.photos.length;
  renderPhoto();
});

$("nextPhoto").addEventListener("click", () => {
  if (!CONFIG.photos.length) return;
  currentPhoto = (currentPhoto + 1) % CONFIG.photos.length;
  renderPhoto();
});

$("toBalloons").addEventListener("click", () => {
  buildBalloons();
  showStage(4);
});

// Balloons
let poppedCount = 0;

function buildBalloons() {
  const area = $("balloonArea");
  area.innerHTML = "";
  $("balloonMessage").textContent = "";
  $("balloonComplete").classList.add("hidden");
  poppedCount = 0;

  CONFIG.balloonMessages.forEach((message, index) => {
    const balloon = document.createElement("button");
    balloon.className = "balloon";
    balloon.type = "button";
    balloon.setAttribute("aria-label", `Balloon ${index + 1}`);
    balloon.style.background = `hsl(${340 + (index * 12) % 45} 55% ${62 + (index % 2) * 8}%)`;
    balloon.addEventListener("click", () => {
      if (balloon.classList.contains("popped")) return;

      $("balloonMessage").textContent = message;
      balloon.classList.add("popped");
      poppedCount++;
      burstHearts(5);

      if (poppedCount === CONFIG.balloonMessages.length) {
        setTimeout(() => $("balloonComplete").classList.remove("hidden"), 450);
      }
    });
    area.appendChild(balloon);
  });
}

$("openLetter").addEventListener("click", () => {
  showStage(5);
  setTimeout(() => {
    $("envelope").classList.add("open");
    burstHearts(30);
  }, 300);
  setTimeout(() => $("finishLetter").classList.remove("hidden"), 2400);
});

$("finishLetter").addEventListener("click", () => {
  showStage(6);
  burstHearts(35);
});

$("restart").addEventListener("click", () => {
  $("giftBtn").classList.remove("open");
  $("envelope").classList.remove("open");
  $("finishLetter").classList.add("hidden");
  showStage(1);
});

// Music
const music = $("birthdayMusic");
let musicPlaying = false;

$("musicBtn").addEventListener("click", async () => {
  if (!musicPlaying) {
    try {
      await music.play();
      musicPlaying = true;
      $("musicBtn").textContent = "⏸ Pause Music";
    } catch {
      $("musicBtn").textContent = "🎵 Add Music File";
    }
  } else {
    music.pause();
    musicPlaying = false;
    $("musicBtn").textContent = "🎵 Play Music";
  }
});

// Ambient hearts
function burstHearts(count = 10) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = Math.random() > 0.25 ? "♥" : "✦";
    heart.style.left = `${35 + Math.random() * 30}%`;
    heart.style.bottom = `${20 + Math.random() * 15}%`;
    heart.style.setProperty("--drift", `${-100 + Math.random() * 200}px`);
    heart.style.animationDuration = `${2 + Math.random() * 2.5}s`;
    $("ambient").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

setInterval(() => {
  if (document.visibilityState === "visible") {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = Math.random() > 0.35 ? "♥" : "✦";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = "-20px";
    heart.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    heart.style.animationDuration = `${7 + Math.random() * 5}s`;
    $("ambient").appendChild(heart);
    setTimeout(() => heart.remove(), 13000);
  }
}, 900);

// Initial photo render
renderPhoto();
