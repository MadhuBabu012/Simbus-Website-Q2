/* ================================================================
   SIMBUS TECHNOLOGIES — SHARED JAVASCRIPT
   js/main.js · All pages · Version 2.0
================================================================ */

(function () {
  'use strict';

  /* ── 1. DARK MODE TOGGLE ──────────────────────────────────── */
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    // Restore saved theme on page load
    const savedTheme = localStorage.getItem('simbus-theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeBtn.textContent = '☀️';
    }

    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.textContent = '🌙';
        localStorage.setItem('simbus-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '☀️';
        localStorage.setItem('simbus-theme', 'dark');
      }
    });
  }

  /* ── 2. MOBILE NAV DROPDOWN ───────────────────────────────── */
  document.querySelectorAll('.nav-dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        link.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('nav')) {
      const navlinks = document.getElementById('navlinks');
      if (navlinks) navlinks.classList.remove('open');
    }
  });

  /* ── 3. SCROLL REVEAL (IntersectionObserver) ─────────────── */
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

  /* ── 4. ANIMATED COUNTERS ─────────────────────────────────── */
  // Supports data-count + data-suffix (index/about style)
  // and data-target + data-prefix + data-suffix + data-decimal (kinaxis/databricks style)
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

  // Trigger counters when their container scrolls into view
  const counterContainerSelectors = '.stats-row, .hstats, .s4, [data-count], [data-target]';
  const counterEls = document.querySelectorAll('[data-count], [data-target]');
  if (counterEls.length) {
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          // If the element itself is a counter
          if (e.target.dataset.count || e.target.dataset.target) {
            animateCounter(e.target);
          } else {
            // It's a container — find counters inside
            e.target.querySelectorAll('[data-count], [data-target]').forEach(animateCounter);
          }
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    // Observe stat containers and individual counter elements
    document.querySelectorAll('.stats-row, .hstats, .s4').forEach(el => counterObs.observe(el));
    counterEls.forEach(el => {
      // Only observe directly if not inside a container already observed
      if (!el.closest('.stats-row, .hstats, .s4')) {
        counterObs.observe(el);
      }
    });
  }

  /* ── 5. STAGGER ANIMATION DELAY HELPER ───────────────────── */
  // Auto-sets nth-child transition delays on stagger containers
  document.querySelectorAll('.stagger').forEach(container => {
    container.querySelectorAll(':scope > *').forEach((child, i) => {
      if (i >= 8) child.style.transitionDelay = (i * 0.1) + 's';
    });
  });

})();
