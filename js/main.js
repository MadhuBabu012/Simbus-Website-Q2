/* ================================================================
   SIMBUS TECHNOLOGIES — SHARED JAVASCRIPT
   js/main.js · All pages · Version 2.0
================================================================ */

(function () {
  'use strict';

  /* ── 1. NAV INJECTION ────────────────────────────────────────
     Single source of truth for navigation.
     Edit here — applies to all 9 pages automatically.
  ──────────────────────────────────────────────────────────── */
  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = `
      <a href="index.html" class="nav-logo">
        <img src="assets/images/shared/simbus-technologies.webp" alt="Simbus Technologies" style="height:48px;width:auto;object-fit:contain;">
      </a>
      <ul class="nav-links" id="navlinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">Who We Are</a></li>
        <li class="nav-dropdown">
          <a href="services.html">Services <span class="nav-arr"></span></a>
          <ul class="nav-submenu">
            <li><a href="kinaxis.html"><span class="nav-sub-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z"></path></svg></span>Kinaxis Maestro</a></li>
            <li><a href="Kinaxis Planning One Page.html"><span class="nav-sub-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="16" height="16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.75 3.75H2.25c-0.82843 0 -1.5 0.67157 -1.5 1.5v16.5c0 0.8284 0.67157 1.5 1.5 1.5h19.5c0.8284 0 1.5 -0.6716 1.5 -1.5V5.25c0 -0.82843 -0.6716 -1.5 -1.5 -1.5Z" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M0.75 9.75h22.5" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.75 6V0.75" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.25 6V0.75" stroke-width="1.5"/><path stroke="currentColor" d="M5.625 14.25c-0.20711 0 -0.375 -0.1679 -0.375 -0.375s0.16789 -0.375 0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M5.625 14.25c0.20711 0 0.375 -0.1679 0.375 -0.375s-0.16789 -0.375 -0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M5.625 19.5c-0.20711 0 -0.375 -0.1679 -0.375 -0.375s0.16789 -0.375 0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M5.625 19.5c0.20711 0 0.375 -0.1679 0.375 -0.375s-0.16789 -0.375 -0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M12 14.25c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M12 14.25c0.2071 0 0.375 -0.1679 0.375 -0.375S12.2071 13.5 12 13.5" stroke-width="1.5"/><path stroke="currentColor" d="M12 19.5c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M12 19.5c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M18.375 14.25c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M18.375 14.25c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M18.375 19.5c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375" stroke-width="1.5"/><path stroke="currentColor" d="M18.375 19.5c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375" stroke-width="1.5"/></svg></span>Kinaxis&reg; Planning One&trade;</a></li>
            <li><a href="databricks.html"><span class="nav-sub-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path d="M0 0h32v32H0z" fill="none"/><path fill="currentColor" d="M3.082 9.3v.844l12.921 7.288l11.539-6.518v2.635l-11.539 6.557l-12.27-6.972l-.651.362v5.043l12.921 7.272l11.539-6.494v2.612l-11.539 6.559l-12.27-6.973l-.651.362v.855l12.921 7.271l12.919-7.27v-5.048l-.659-.359l-12.26 6.971l-11.542-6.558V15.14l11.542 6.486l12.921-7.27V9.379l-.659-.361l-12.262 6.975L5.054 9.769l10.949-6.184l9.019 5.096l.789-.443v-.696l-9.808-5.538Z"/></svg></span>Databricks</a></li>
          </ul>
        </li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="roi-calculator.html">Benefit Calc</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
      <a href="contact.html" class="nav-cta">Free Kinaxis Health Check</a>
      <button class="nav-ham" id="navHam" aria-label="Open navigation menu">&#9776;</button>
    `;

    // Mark active link based on current page
    const page = location.pathname.split('/').pop() || 'index.html';
    const serviceSubPages = ['kinaxis.html', 'databricks.html', 'Kinaxis Planning One Page.html'];
    nav.querySelectorAll('.nav-links > li > a').forEach(a => {
      const linkPage = a.getAttribute('href').split('/').pop();
      if (linkPage === page) a.classList.add('active');
      if (a.getAttribute('href') === 'services.html' && serviceSubPages.includes(page)) {
        a.classList.add('active');
      }
    });
  }

  /* ── 2. MOBILE NAV ────────────────────────────────────────── */
  const navHam = document.getElementById('navHam');
  if (navHam) {
    navHam.addEventListener('click', () => {
      document.getElementById('navlinks').classList.toggle('open');
    });
  }

  document.querySelectorAll('.nav-dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        link.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('nav')) {
      const navlinks = document.getElementById('navlinks');
      if (navlinks) navlinks.classList.remove('open');
    }
  });

  /* ── 4. SCROLL REVEAL (IntersectionObserver) ─────────────── */
  const revealEls = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-scale, .stagger'
  );
  if (revealEls.length) {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObs.observe(el));
  }

  /* ── 5. ANIMATED COUNTERS ─────────────────────────────────── */
  function animateCounter(el) {
    const target   = parseFloat(el.dataset.count || el.dataset.target || 0);
    const prefix   = el.dataset.prefix  || '';
    const suffix   = el.dataset.suffix  || '';
    const decimal  = parseInt(el.dataset.decimal || 0, 10);
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = ease * target;
      el.textContent = prefix + (decimal ? current.toFixed(decimal) : Math.round(current)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterEls = document.querySelectorAll('[data-count], [data-target]');
  if (counterEls.length) {
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (e.target.dataset.count || e.target.dataset.target) {
            animateCounter(e.target);
          } else {
            e.target.querySelectorAll('[data-count], [data-target]').forEach(animateCounter);
          }
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stats-row, .hstats, .s4').forEach(el => counterObs.observe(el));
    counterEls.forEach(el => {
      if (!el.closest('.stats-row, .hstats, .s4')) counterObs.observe(el);
    });
  }

  /* ── 6. STAGGER ANIMATION DELAY HELPER ───────────────────── */
  document.querySelectorAll('.stagger').forEach(container => {
    container.querySelectorAll(':scope > *').forEach((child, i) => {
      if (i >= 8) child.style.transitionDelay = (i * 0.1) + 's';
    });
  });

})();
