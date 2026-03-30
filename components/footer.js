// SiteBot — shared footer component
// Usage: add <div id="site-footer"></div> and <script src="/components/footer.js"></script> to every page

(function () {
  const year = new Date().getFullYear();

  const footer = `
  <footer id="sitebot-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="/" class="footer-logo">SiteBot</a>
        <p class="footer-tagline">Built by a real cell phone shop owner.<br>Tested at iMobile Repair Center, Detroit.</p>
      </div>
      <div class="footer-cols">
        <div class="footer-col">
          <div class="footer-col-heading">Product</div>
          <a href="/features/">Features</a>
          <a href="/demo/">Demo</a>
          <a href="/case-study/imobile/">Case Study</a>
          <a href="/">Join Waitlist</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-heading">Learn</div>
          <a href="/blog/how-to-get-more-customers-phone-repair/">Get More Customers</a>
          <a href="/blog/phone-repair-shop-website/">Shop Website Guide</a>
          <a href="/blog/how-to-rank-on-google-phone-repair/">Rank on Google</a>
          <a href="/blog/google-business-profile-phone-repair/">Google Business Profile</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-heading">Company</div>
          <a href="/about/">About</a>
          <a href="/terms/">Terms</a>
          <a href="/privacy/">Privacy</a>
          <a href="mailto:info@sitebot.tech">info@sitebot.tech</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${year} SiteBot. All rights reserved.</span>
    </div>
  </footer>`;

  const style = `
  <style id="sitebot-footer-style">
    #sitebot-footer {
      background: #000;
      border-top: 1px solid rgba(255,255,255,0.07);
      margin-top: 80px;
      font-family: -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
    }
    #sitebot-footer .footer-inner {
      max-width: 1060px; margin: 0 auto;
      padding: 56px 24px 40px;
      display: flex; gap: 60px; flex-wrap: wrap;
      justify-content: space-between;
    }
    #sitebot-footer .footer-brand { max-width: 220px; }
    #sitebot-footer .footer-logo {
      font-size: 17px; font-weight: 600;
      color: #fff; text-decoration: none;
      letter-spacing: -0.3px; display: block; margin-bottom: 12px;
    }
    #sitebot-footer .footer-tagline {
      font-size: 13px; color: rgba(255,255,255,0.35);
      line-height: 1.65; margin: 0;
    }
    #sitebot-footer .footer-cols {
      display: flex; gap: 48px; flex-wrap: wrap;
    }
    #sitebot-footer .footer-col {
      display: flex; flex-direction: column; gap: 10px; min-width: 140px;
    }
    #sitebot-footer .footer-col-heading {
      font-size: 11px; font-weight: 600;
      text-transform: uppercase; letter-spacing: .1em;
      color: rgba(255,255,255,0.3); margin-bottom: 4px;
    }
    #sitebot-footer .footer-col a {
      font-size: 14px; color: rgba(255,255,255,0.5);
      text-decoration: none; transition: color .15s;
    }
    #sitebot-footer .footer-col a:hover { color: #fff; }
    #sitebot-footer .footer-bottom {
      max-width: 1060px; margin: 0 auto;
      padding: 20px 24px 32px;
      border-top: 1px solid rgba(255,255,255,0.05);
      font-size: 12px; color: rgba(255,255,255,0.2);
    }
    @media (max-width: 600px) {
      #sitebot-footer .footer-inner { flex-direction: column; gap: 36px; }
      #sitebot-footer .footer-brand { max-width: 100%; }
      #sitebot-footer .footer-cols { gap: 28px; }
    }
  </style>`;

  const target = document.getElementById('site-footer');
  if (target) {
    target.innerHTML = style + footer;
  } else {
    document.body.insertAdjacentHTML('beforeend', style + footer);
  }
})();
