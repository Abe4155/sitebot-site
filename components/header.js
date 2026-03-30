// SiteBot — shared header component
// Usage: add <div id="site-header"></div> and <script src="/components/header.js"></script> to every page

(function () {
  const nav = `
  <nav id="sitebot-nav">
    <a class="nav-logo" href="/">SiteBot</a>
    <ul class="nav-links">
      <li><a href="/features/">Features</a></li>
      <li><a href="/demo/">Demo</a></li>
      <li><a href="/case-study/imobile/">Case Study</a></li>
      <li><a href="/blog/how-to-get-more-customers-phone-repair/">Blog</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/" class="nav-cta">Join the Waitlist</a></li>
    </ul>
    <button class="nav-mobile-toggle" aria-label="Open menu" onclick="toggleMobileMenu()">&#9776;</button>
  </nav>
  <div class="nav-mobile-menu" id="nav-mobile-menu">
    <a href="/features/">Features</a>
    <a href="/demo/">Demo</a>
    <a href="/case-study/imobile/">Case Study</a>
    <a href="/blog/how-to-get-more-customers-phone-repair/">Blog</a>
    <a href="/about/">About</a>
    <a href="/">Join the Waitlist</a>
  </div>`;

  const style = `
  <style id="sitebot-nav-style">
    #sitebot-nav {
      position: sticky; top: 0; z-index: 100;
      background: rgba(0,0,0,0.88);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 0 24px; height: 52px;
      display: flex; align-items: center; justify-content: space-between;
    }
    #sitebot-nav .nav-logo {
      font-size: 17px; font-weight: 600;
      color: #fff; text-decoration: none;
      letter-spacing: -0.3px;
      font-family: -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
    }
    #sitebot-nav .nav-links {
      display: flex; align-items: center;
      gap: 24px; list-style: none;
    }
    #sitebot-nav .nav-links a {
      font-size: 13px; color: rgba(255,255,255,0.7);
      text-decoration: none; transition: color .2s;
      font-family: -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
    }
    #sitebot-nav .nav-links a:hover { color: #fff; }
    #sitebot-nav .nav-cta {
      background: #fff; color: #000 !important;
      padding: 7px 16px; border-radius: 20px;
      font-weight: 500 !important; font-size: 13px !important;
      transition: opacity .2s;
    }
    #sitebot-nav .nav-cta:hover { opacity: 0.88; }
    #sitebot-nav .nav-mobile-toggle {
      display: none; background: none; border: none;
      color: rgba(255,255,255,0.7); font-size: 20px;
      cursor: pointer; padding: 4px 8px;
    }
    .nav-mobile-menu {
      display: none; flex-direction: column;
      background: #0a0a0a;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 12px 24px 20px;
      position: sticky; top: 52px; z-index: 99;
    }
    .nav-mobile-menu a {
      font-size: 15px; color: rgba(255,255,255,0.7);
      text-decoration: none; padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-family: -apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
    }
    .nav-mobile-menu a:last-child {
      border-bottom: none; color: #fff; font-weight: 500; padding-top: 14px;
    }
    .nav-mobile-menu.open { display: flex; }
    @media (max-width: 680px) {
      #sitebot-nav .nav-links { display: none; }
      #sitebot-nav .nav-mobile-toggle { display: block; }
    }
  </style>`;

  const target = document.getElementById('site-header');
  if (target) {
    target.innerHTML = style + nav;
  } else {
    document.body.insertAdjacentHTML('afterbegin', style + nav);
  }

  window.toggleMobileMenu = function () {
    const menu = document.getElementById('nav-mobile-menu');
    if (menu) menu.classList.toggle('open');
  };
})();
