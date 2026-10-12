// Buttons that open the free printers in the app (a[data-print-cta]): send a
// Vercel Web Analytics custom event "print_click" with the page path and the
// app screen it opens.
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[data-print-cta]') : null;
    if (!a || typeof window.va !== 'function') return;
    var screen = '';
    try { screen = new URL(a.href).pathname; } catch (err) {}
    window.va('event', { name: 'print_click', data: { path: window.location.pathname, screen: screen } });
  });
})();
