









function validateEmail() {
  const emailField = document.getElementById('email');
  const email = emailField.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
      document.getElementById('password').disabled = false;
      document.getElementById('confirm-password').disabled = false;
  } else {
      alert('Please enter a valid email address.');
      emailField.focus();
  }
}


//script sa register
function handleRegister(event) {
  event.preventDefault();
  alert('You have successfully filled up!');
  window.location.href = 'index.html'; 
}

// Script for handling the form message
function handleMessage(event) {
  event.preventDefault();

 // Get form input values
 const name = event.target.name.value;
 const email = event.target.email.value;
 const phone = event.target.phone.value;
 const message = event.target.message.value;

 // Load existing messages or initialize an empty array
 const existingMessages = JSON.parse(localStorage.getItem("messagesData")) || [];

 // Add new message to the array
 existingMessages.push({ name, email, phone, message });

 // Save updated messages back to local storage
 localStorage.setItem("messagesData", JSON.stringify(existingMessages));

 alert("Message saved successfully!");

 // Clear form fields
 event.target.reset();
}

// Optional: Load and display saved messages in the console on page load
window.onload = function () {
 const savedMessages = JSON.parse(localStorage.getItem("messagesData")) || [];
 if (savedMessages.length) {
   console.log("Saved Messages:", savedMessages);
 }
};

$(document).ready(function(){

  $(".ham-burger, .nav ul li a").click(function(){
   
    $(".nav").toggleClass("open")
  
    $(".ham-burger").toggleClass("active");
  })      
  $(".accordian-container").click(function(){
    $(".accordian-container").children(".body").slideUp();
    $(".accordian-container").removeClass("active")
    $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
    $(this).children(".body").slideDown();
    $(this).addClass("active")
    $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
  })
  
   $(".nav ul li a, .go-down").click(function(event){
   if(this.hash !== ""){
  
    event.preventDefault();
  
    var hash=this.hash; 
  
    $('html,body').animate({
      scrollTop:$(hash).offset().top
    },800 , function(){
     window.location.hash=hash;
    });
  
    // add active class in navigation
    $(".nav ul li a").removeClass("active")
    $(this).addClass("active")
   }
  })
  })

document.getElementById("generateQuoteBtn1").addEventListener("click", function () {
  this.classList.add("clicked");

  setTimeout(() => {
    this.classList.remove("clicked");
  }, 150);
});





const slider = document.getElementById('slider');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
const slides = document.querySelectorAll('#slider .box');
const totalSlides = slides.length;

function updateSlide() {
  const slideWidth = slides[0].offsetWidth;
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function goNext() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function goPrev() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

nextButton.addEventListener('click', goNext);
prevButton.addEventListener('click', goPrev);

window.addEventListener('resize', updateSlide);

//=========================================================================================================================












// Add event listener for scroll
window.addEventListener("scroll", function () {
  const homeSection = document.querySelector(".home");
  const welcomeText = document.querySelector(".welcome-text");

  // Get the position of the home section
  const homeSectionTop = homeSection.getBoundingClientRect().top;

  // Trigger zoom-out animation when scrolling down
  if (homeSectionTop < -50) {
    welcomeText.classList.add("zoom-out");
  } else {
    welcomeText.classList.remove("zoom-out");
  }
});

// Array of Bible Quote Images
const bibleQuoteImages = [
  "images/bv1.jpg",
  "images/bv2.jpg",
  "images/bv3.jpg",
  "images/bv4.jpg",
  "images/bv5.jpg",
  "images/bv6.jpg",
  "images/bv7.jpg",
  "images/bv8.jpg",
  "images/bv9.jpg",
  "images/bv10.jpg",
  "images/bv11.jpg",
  "images/bv12.jpg",
  "images/bv13.jpg",
  "images/bv14.jpg",
  "images/bv15.jpg",
];

// Function to Display Random Quote Image
function displayRandomQuoteImage() {
  const randomIndex = Math.floor(Math.random() * bibleQuoteImages.length); // Random index
  const randomImage = bibleQuoteImages[randomIndex]; // Get random image path
  document.getElementById("quoteImage").src = randomImage; // Set image source
}

// Add Event Listener to Button
document.getElementById("generateQuoteBtn1").addEventListener("click", displayRandomQuoteImage);

// Display a random quote image on page load
displayRandomQuoteImage();


// Array of Bible Quotes
// const bibleQuotes = [
//   "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
//   "I can do all this through him who gives me strength. - Philippians 4:13",
//   "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
//   "The Lord is my shepherd, I lack nothing. - Psalm 23:1",
//   "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
//   "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33",
//   "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
//   "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
//   "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
//   "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
// ];

// // Function to Generate Random Quote
// function generateRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * bibleQuotes.length); // Random index
//   const quote = bibleQuotes[randomIndex]; // Get random quote
//   document.getElementById("quoteDisplay").textContent = quote; // Display quote
// }

// // Add Event Listener to Button
// document.getElementById("generateQuoteBtn").addEventListener("click", generateRandomQuote);

// // Generate a quote on page load
// generateRandomQuote();

// Get the button
const goTopBtn = document.getElementById("goTopBtn");

// Show the button when the user scrolls down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTopBtn.classList.add("show"); // Show the button
  } else {
    goTopBtn.classList.remove("show"); // Hide the button
  }
};

// Scroll to the top when the button is clicked
goTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll
  });
});
function toggleAudio() {
  const audio = document.getElementById("backgroundAudio");
  const button = document.querySelector(".audio-control");
  if (audio.paused) {
    audio.play();
    button.textContent = "Pause Music";
  } else {
    audio.pause();
    button.textContent = "Play Music";
  }
}

wow = new WOW(
  {
    animateClass: 'animated',
    offset:       0,
  }
  );
  wow.init();


// This script loads Instagram embeds asynchronously
window.addEventListener('load', function () {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  });

function playAudio() {
  var audio = document.getElementById("backgroundAudio");
  
  // Play or pause the audio depending on its current state
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


// Load Instagram Embed Script
(function () {
  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
})();

