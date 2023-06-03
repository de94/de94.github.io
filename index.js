//image slider
const slides = document.querySelectorAll('.slideshow-container .slide');
const prevButton = document.querySelector('.slideshow-container .prev');
const nextButton = document.querySelector('.slideshow-container .next');
const navLabels = document.querySelectorAll('.slideshow-container .slider-nav label');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  updateNavButtons();
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  updateNavButtons();
}

function updateNavButtons() {
  navLabels.forEach((label, i) => {
    if (i === currentIndex) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  goToPrevSlide();
});

nextButton.addEventListener('click', () => {
  goToNextSlide();
});

navLabels.forEach((label, i) => {
  label.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
    updateNavButtons();
  });
});

//contact us validation
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true;

  if (nameValue === "") {
    nameInput.classList.add("invalid");
    nameError.textContent = "This field is required";
    isValid = false;
  } else {
    nameInput.classList.remove("invalid");
    nameError.textContent = "";
  }

  if (emailValue === "") {
    emailInput.classList.add("invalid");
    emailError.textContent = "Invalid email address";
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    emailInput.classList.add("invalid");
    emailError.textContent = "Invalid email address";
    isValid = false;
  } else {
    emailInput.classList.remove("invalid");
    emailError.textContent = "";
  }

  if (messageValue === "") {
    messageInput.classList.add("invalid");
    messageError.textContent = "This field is required";
    isValid = false;
  } else {
    messageInput.classList.remove("invalid");
    messageError.textContent = "";
  }

  if (!isValid) {
    return;
  }

  contactForm.reset();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
