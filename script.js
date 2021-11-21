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

function validateName () {
  const name = document.getElementById('name');
  const error = document.getElementById('error-name')
  const reg = /^[a-zA-Z ]{2,15}$/;


  if (reg.test(name.value) || name.value.length == 0) {
    error.classList.remove('error-show')
  }

  else if (!reg.test(name.value)) {
    error.classList.add('error-show')
  }

}

function validateEmail () {

  const email = document.getElementById('email');
  const error = document.getElementById('error-email')
  const reg = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;


  if (reg.test(email.value) || email.value.length == 0) {
    error.classList.remove('error-show')
  }

  else if (!reg.test(email.value)) {
    error.classList.add('error-show')
  }
}

function validateMessage () {
  const message = document.getElementById('message');
  const error = document.getElementById('error-message')
  const reg = /[a-zA-Z0-9 _?!'"()\.\/\-\:\;\,\n]$/;


  if (reg.test(message.value) || message.value.length == 0) {
    error.classList.remove('error-show')
  }

  else if (!reg.test(message.value)) {
    error.classList.add('error-show')
  }
}
