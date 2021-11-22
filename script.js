// Scrolling with jQuery

$("#main-nav a, .hero-text a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      600
    );
  }
});

// Show on scroll animation

var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

/* Form validation */

document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('message').addEventListener('blur', validateMessage)
const fname = document.getElementById('name');
const nameerror = document.getElementById('error-name')
const email = document.getElementById('email');
const emailerror = document.getElementById('error-email')
const message = document.getElementById('message');
const msgerror = document.getElementById('error-message')

function validateName () {

  //Removing label showing on blurr event
  document.getElementById('name-label').classList.remove("label-show")

  const reg = /^[a-zA-Z ]{2,15}$/;

  if (reg.test(fname.value) || fname.value.length == 0) {
    nameerror.classList.remove('error-show');
  }

  else if (!reg.test(fname.value)) {
    nameerror.classList.add('error-show');
  }
}

function validateEmail () {

  //Removing label showing on blurr event
  document.getElementById('email-label').classList.remove("label-show")

  const reg = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

  if (reg.test(email.value) || email.value.length == 0) {
    emailerror.classList.remove('error-show')
  }

  else if (!reg.test(email.value)) {
    emailerror.classList.add('error-show')
  }
}

function validateMessage () {

  //Removing label showing on blurr event
  document.getElementById('msg-label').classList.remove("label-show")

  const reg = /[a-zA-Z0-9 _?!'"()\.\/\-\:\;\,\n]$/;

  if (reg.test(message.value) || message.value.length == 0) {
    msgerror.classList.remove('error-show')
  }

  else if (!reg.test(message.value)) {
    msgerror.classList.add('error-show')
  }
}

function validateSubmit () {

  const error = $('#error-submit');

  if (fname.value.length === 0 || email.value.length === 0 || message.value.length === 0 || nameerror.classList.contains('error-show') || emailerror.classList.contains('error-show') || msgerror.classList.contains('error-show')) 
  {
    error.addClass('error-show');
    setTimeout(function() {
      error.removeClass('error-show');
    }, 3000);

    return false  
  } 
  else {
    return true
  }
}

// Labels

document.getElementById('name').addEventListener('focus', showLabelName)
document.getElementById('email').addEventListener('focus', showLabelEmail)
document.getElementById('message').addEventListener('focus', showLabelMsg)

function showLabelName () {
  document.getElementById('name-label').classList.add("label-show")
}

function showLabelEmail() {
  document.getElementById('email-label').classList.add("label-show")
}

function showLabelMsg() {
  document.getElementById('msg-label').classList.add("label-show")
}