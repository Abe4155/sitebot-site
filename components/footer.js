// PhoneShopPOS — shared footer. Every page has
// <div id="site-footer"></div> and <script src="/components/footer.js"></script>.
(function () {
  const APP = 'https://app.phoneshoppos.com';
  const year = new Date().getFullYear();
  const html = `
  <footer id="psp-footer">
    <div class="psp-footer-inner">
      <div>
        <p class="psp-footer-head">Tools</p>
        <ul>
          <li><a href="/invoice-generator">Invoice generator</a></li>
          <li><a href="/receipt-maker">Receipt maker</a></li>
          <li><a href="/receipt-template">Receipt template</a></li>
          <li><a href="/work-order-template">Work order template</a></li>
          <li><a href="/cash-receipt-template">Cash receipt template</a></li>
          <li><a href="/auto-repair-work-order">Auto repair work order</a></li>
        </ul>
      </div>
      <div>
        <p class="psp-footer-head">Compare</p>
        <ul>
          <li><a href="/vs-repairdesk">vs RepairDesk</a></li>
          <li><a href="/vs-r3up">vs R3UP</a></li>
          <li><a href="/vs-wix">vs Wix</a></li>
        </ul>
      </div>
      <div>
        <p class="psp-footer-head">PhoneShopPOS</p>
        <ul>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="${APP}/login">Log in</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="mailto:info@phoneshoppos.com">info@phoneshoppos.com</a></li>
          <li><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></li>
        </ul>
      </div>
    </div>
    <p class="psp-copy">&copy; ${year} Sell N Buy Wireless LLC</p>
  </footer>`;
  const style = `
  <style id="psp-footer-style">
    #psp-footer { background: #fff; border-top: 1px solid #e5e7eb; margin-top: 56px; color: #111827;
      font-family: "Manrope", system-ui, -apple-system, "Segoe UI", Arial, sans-serif; font-size: 15px; }
    #psp-footer .psp-footer-inner { max-width: 1100px; margin: 0 auto; padding: 40px 20px 8px;
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    #psp-footer .psp-footer-head { font-weight: 800; margin: 0 0 8px; }
    #psp-footer ul { list-style: none; margin: 0; padding: 0; }
    #psp-footer li { margin-bottom: 6px; }
    #psp-footer a { color: #374151; text-decoration: none; }
    #psp-footer a:hover { color: #1d4ed8; text-decoration: underline; }
    #psp-footer .psp-copy { max-width: 1100px; margin: 0 auto; padding: 16px 20px 32px; color: #4b5563; }
    @media (max-width: 760px) { #psp-footer .psp-footer-inner { grid-template-columns: 1fr; } }
  </style>`;
  const target = document.getElementById('site-footer');
  if (target) target.innerHTML = style + html;
  else document.body.insertAdjacentHTML('beforeend', style + html);
})();
