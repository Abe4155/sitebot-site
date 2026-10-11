// Behavior for the shared header. The links themselves are plain HTML in each page;
// this only opens the mobile menu and closes the Tools dropdown.
(function () {
  var toggle = document.querySelector('#psp-nav .psp-toggle');
  var menu = document.getElementById('psp-mobile');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
  }
  // Close the Tools dropdown on outside click / Escape.
  var details = document.querySelector('#psp-nav details');
  if (details) {
    document.addEventListener('click', function (e) { if (!details.contains(e.target)) details.open = false; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') details.open = false; });
  }
})();
