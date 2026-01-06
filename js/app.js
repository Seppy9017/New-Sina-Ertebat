// ===============================
// انتخاب عناصر DOM
// ===============================
const slider = document.querySelector(".poster-box");
const slides = slider.children;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const nextIcon = nextBtn.children[0];
const prevIcon = prevBtn.children[0];
const dots = document.querySelector(".dot-box").children;

// ===============================
// متغیرهای کنترلی
// ===============================
let index = 0;
const lastSlide = slides.length - 1;

// ===============================
// مدیریت اسلایدر خودکار
// ===============================
let autoSlide;
const autoSlideDelay = 3500;

function startAutoSlide() {
  autoSlide = setInterval(() => {
    if (index < lastSlide) {
      goToSlide(index + 1); // حرکت خالص بدون ریست
    } else {
      goToSlide(0);
    }
  }, autoSlideDelay);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// ===============================
// دات‌ها
// ===============================
function setActiveDot(i) {
  for (let dot of dots) {
    dot.src = "images/inactive-dot.png";
  }
  dots[i].src = "images/active-dot.png";
}

// ===============================
// نمایش اسلاید
// ===============================
function showSlide(i) {
  // مخفی‌کردن همه
  for (let slide of slides) {
    slide.style.display = "none";
  }

  // نمایش اسلاید انتخاب‌شده
  slides[i].style.display = "flex";

  // دات فعال
  setActiveDot(i);

  // دکمه‌های قبلی/بعدی
  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === lastSlide;

  prevIcon.style.cursor = prevBtn.disabled ? "unset" : "pointer";
  nextIcon.style.cursor = nextBtn.disabled ? "unset" : "pointer";

  prevIcon.src = prevBtn.disabled
    ? "images/previous-arrow-inactive.png"
    : "images/previous-arrow.png";

  nextIcon.src = nextBtn.disabled
    ? "images/next-arrow-inactive.png"
    : "images/next-arrow.png";
}

// ===============================
// حرکت ساده بدون ریست (برای AutoSlide)
// ===============================
function goToSlide(i) {
  index = i;
  showSlide(i);
}

// ===============================
// حرکت معمولی با ریست (برای کاربر)
// ===============================
function nextPhoto() {
  if (index < lastSlide) {
    goToSlide(index + 1);
  }
}

function previousPhoto() {
  if (index > 0) {
    goToSlide(index - 1);
  }
}

// ===============================
// رویدادهای دات‌ها
// ===============================
dots[0].addEventListener("click", () => {
  goToSlide(0);
  resetAutoSlide();
});

dots[1].addEventListener("click", () => {
  goToSlide(1);
  resetAutoSlide();
});

dots[2].addEventListener("click", () => {
  goToSlide(2);
  resetAutoSlide();
});

// ===============================
// رویدادهای دکمه‌ها
// ===============================
nextBtn.addEventListener("click", () => {
  nextPhoto();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  previousPhoto();
  resetAutoSlide();
});

// ===============================
// سوایپ لمسی
// ===============================
let startX = 0;
let endX = 0;
const swipeThreshold = 30;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  const diff = endX - startX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff < 0 && index < lastSlide) {
      nextPhoto();
      resetAutoSlide();
    } else if (diff > 0 && index > 0) {
      previousPhoto();
      resetAutoSlide();
    }
  }

  startX = 0;
  endX = 0;
});

// ===============================
// اجرای اولیه
// ===============================
showSlide(index);
startAutoSlide();

// ===============================
// Lazy Load برای تمام پاراگراف‌ها
// ===============================

// تمام p ها را انتخاب کن
const paragraphs = document.querySelectorAll("p , img");

// کلاس اولیه برای مخفی بودن
paragraphs.forEach((p) => p.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active"); // ظاهر شدن
        obs.unobserve(entry.target); // دیگر لازم نیست بار دوم چک شود
      }
    });
  },
  { threshold: 0.2 }
); // وقتی ۲۰٪ پاراگراف دیده شودreveal-active

paragraphs.forEach((p) => observer.observe(p));
// reveal - active;
