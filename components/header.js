// PhoneShopPOS — shared header. Every page has
// <div id="site-header"></div> and <script src="/components/header.js"></script>.
(function () {
  const APP = 'https://app.phoneshoppos.com';
  const TOOLS = [
    ['/invoice-generator', 'Invoice'],
    ['/receipt-maker', 'Receipt'],
    ['/work-order-template', 'Work order'],
    ['/cash-receipt-template', 'Cash receipt'],
  ];
  const toolLinks = TOOLS.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('');

  const html = `
  <nav id="psp-nav" aria-label="Main">
    <div class="psp-nav-inner">
      <a class="psp-logo" href="/">PhoneShopPOS</a>
      <ul class="psp-links">
        <li class="psp-tools">
          <details>
            <summary>Tools</summary>
            <ul class="psp-tools-menu">${toolLinks}</ul>
          </details>
        </li>
        <li><a href="/#compare">Compare</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li><a href="${APP}/login">Log in</a></li>
      </ul>
      <button class="psp-toggle" type="button" aria-expanded="false" aria-controls="psp-mobile">Menu</button>
    </div>
    <div class="psp-mobile" id="psp-mobile" hidden>
      <p class="psp-mobile-label">Tools</p>
      <ul>${toolLinks}</ul>
      <ul>
        <li><a href="/#compare">Compare</a></li>
        <li><a href="/#pricing">Pricing</a></li>
        <li><a href="${APP}/login">Log in</a></li>
      </ul>
    </div>
  </nav>`;

  const style = `
  <style id="psp-nav-style">
    #psp-nav { background: #fff; border-bottom: 1px solid #e5e7eb; position: relative; z-index: 50;
      font-family: "Manrope", system-ui, -apple-system, "Segoe UI", Arial, sans-serif; }
    #psp-nav .psp-nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 20px; height: 64px;
      display: flex; align-items: center; justify-content: space-between; }
    #psp-nav a { color: #111827; text-decoration: none; }
    #psp-nav .psp-logo { font-size: 19px; font-weight: 800; letter-spacing: -0.01em; }
    #psp-nav .psp-links { display: flex; align-items: center; gap: 28px; list-style: none; margin: 0; padding: 0; }
    #psp-nav .psp-links > li > a, #psp-nav summary { font-size: 16px; font-weight: 600; color: #111827; cursor: pointer; }
    #psp-nav .psp-links a:hover, #psp-nav summary:hover { color: #1d4ed8; }
    #psp-nav details { position: relative; }
    #psp-nav summary { list-style: none; }
    #psp-nav summary::-webkit-details-marker { display: none; }
    #psp-nav summary::after { content: " \\25BE"; font-size: 12px; }
    #psp-nav .psp-tools-menu { position: absolute; top: 34px; left: -16px; min-width: 190px; list-style: none;
      margin: 0; padding: 8px 0; background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; }
    #psp-nav .psp-tools-menu a { display: block; padding: 8px 16px; font-weight: 600; }
    #psp-nav .psp-toggle { display: none; background: #fff; border: 1px solid #111827; border-radius: 8px;
      padding: 8px 14px; font: inherit; font-weight: 700; color: #111827; cursor: pointer; }
    #psp-nav .psp-mobile { border-top: 1px solid #e5e7eb; padding: 8px 20px 16px; }
    #psp-nav .psp-mobile ul { list-style: none; margin: 0; padding: 0; }
    #psp-nav .psp-mobile a { display: block; padding: 10px 0; font-size: 17px; font-weight: 600; }
    #psp-nav .psp-mobile-label { margin: 8px 0 0; font-size: 13px; font-weight: 700; color: #4b5563;
      text-transform: uppercase; letter-spacing: 0.06em; }
    @media (max-width: 760px) {
      #psp-nav .psp-links { display: none; }
      #psp-nav .psp-toggle { display: inline-block; }
    }
    @media (min-width: 761px) { #psp-nav .psp-mobile { display: none !important; } }
  </style>`;

  const target = document.getElementById('site-header');
  if (target) target.innerHTML = style + html;
  else document.body.insertAdjacentHTML('afterbegin', style + html);

  const toggle = document.querySelector('#psp-nav .psp-toggle');
  const menu = document.getElementById('psp-mobile');
  toggle.addEventListener('click', function () {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
  });
  // Close the Tools dropdown on outside click / Escape.
  const details = document.querySelector('#psp-nav details');
  document.addEventListener('click', function (e) { if (!details.contains(e.target)) details.open = false; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') details.open = false; });
})();
