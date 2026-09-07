/* Prestron — minimal vanilla JS.
   Needed only for the mobile nav toggle and the mailto contact form. */
(function () {
  "use strict";

  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* Close the nav when a link inside it is chosen. */
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Mailto fallback for the contact form.
     Modern browsers treat form[action="mailto:"] inconsistently, so we
     assemble the mailto: URL explicitly and navigate to it. */
  var form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();

      if (!name || !email || !message) {
        return;
      }

      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        message;

      var href = "mailto:contact@prestron.com?subject=" +
        encodeURIComponent("Website contact — " + name) +
        "&body=" + encodeURIComponent(body);

      window.location.href = href;
    });
  }
})();