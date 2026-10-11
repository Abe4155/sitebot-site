// Sizes the embedded printer (/print/*, proxied from app.phoneshoppos.com by
// the vercel.json rewrite, so same-origin) to its content: no inner
// scrollbars. Also hides the printer's own header and title, since the tool
// page already has both. If the frame isn't readable (e.g. a local server
// without the proxy), it keeps its CSS min-height and scrolls.
(function () {
  var frame = document.querySelector('.tool-frame');
  if (!frame) return;
  var MIN = 900;
  var observer = null;

  // Measure the printer's <main>, not the document: the app's wrapper is
  // min-height 100vh, which inside the frame means "at least the frame",
  // so the document height could only ever grow.
  function fit(doc) {
    var main = doc.querySelector('main');
    var content = main
      ? Math.ceil(main.getBoundingClientRect().bottom + (doc.defaultView.scrollY || 0)) + 24
      : doc.documentElement.scrollHeight;
    frame.style.height = Math.max(MIN, content) + 'px';
  }

  function attach() {
    var doc;
    try { doc = frame.contentDocument; } catch (e) { return; }
    if (!doc || !doc.body) return;
    if (!doc.getElementById('psp-embed-style')) {
      var s = doc.createElement('style');
      s.id = 'psp-embed-style';
      s.textContent =
        'header{display:none!important}' +
        'main{padding-top:24px!important}' +
        'main>h1:first-child,main>h1:first-child+p{display:none!important}' +
        'html,body{overflow:hidden}';
      doc.head.appendChild(s);
    }
    frame.setAttribute('scrolling', 'no');
    fit(doc);
    if (observer) observer.disconnect();
    if (mutations) mutations.disconnect();
    if (poll) clearInterval(poll);
    // DOM changes (rows added, Receipt/Invoice toggle, printed notice) refit
    // even in a background tab, where resize callbacks are paused.
    var MO = doc.defaultView && doc.defaultView.MutationObserver;
    if (MO) {
      mutations = new MO(function () { fit(doc); });
      mutations.observe(doc.querySelector('main') || doc.body, { childList: true, subtree: true, attributes: true });
    }
    // The observer has to come from the frame's own window: one created
    // here doesn't see size changes inside another document.
    var RO = doc.defaultView && doc.defaultView.ResizeObserver;
    if (RO) {
      observer = new RO(function () { fit(doc); });
      observer.observe(doc.querySelector('main') || doc.body);
    } else {
      poll = setInterval(function () { fit(doc); }, 500);
    }
    window.addEventListener('resize', function () { fit(doc); });
  }

  var poll = null;
  var mutations = null;
  frame.addEventListener('load', attach);
  attach();
})();
