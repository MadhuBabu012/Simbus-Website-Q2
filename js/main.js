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
        <img src="assets/images/shared/simbus-technologies.webp" alt="Simbus Technologies" style="height:34px;width:auto;object-fit:contain;">
      </a>
      <ul class="nav-links" id="navlinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">Who We Are</a></li>
        <li class="nav-dropdown">
          <a href="services.html">Services <span class="nav-arr"></span></a>
          <ul class="nav-submenu">
            <li><a href="kinaxis.html">Kinaxis Maestro</a></li>
            <li><a href="Kinaxis Planning One Page.html">Kinaxis&reg; Planning One&trade;</a></li>
            <li><a href="databricks.html">Databricks</a></li>
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
