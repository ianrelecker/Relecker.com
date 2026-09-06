(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const canvas = document.getElementById('dust');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.remove();
    return;
  }

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const particles = [];
  let width = 0;
  let height = 0;
  let ratio = 1;
  let mx = 0;
  let my = 0;
  let tx = 0;
  let ty = 0;
  let running = true;

  const spawn = () => {
    const count = Math.min(140, Math.floor((width * height) / 18000));
    particles.length = 0;
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.4 + Math.random() * 1.6,
        v: 0.08 + Math.random() * 0.22,
        drift: (Math.random() - 0.5) * 0.12,
        a: 0.12 + Math.random() * 0.35,
        warm: Math.random() > 0.72
      });
    }
  };

  const resize = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    spawn();
  };

  const tick = () => {
    if (!running) return;
    tx += (mx - tx) * 0.04;
    ty += (my - ty) * 0.04;
    ctx.clearRect(0, 0, width, height);

    const ox = (tx / width - 0.5) * 24;
    const oy = (ty / height - 0.5) * 16;

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];
      p.y -= p.v;
      p.x += p.drift;
      if (p.y < -4) {
        p.y = height + 4;
        p.x = Math.random() * width;
      }
      if (p.x < -4) p.x = width + 4;
      if (p.x > width + 4) p.x = -4;

      ctx.beginPath();
      ctx.fillStyle = p.warm
        ? `rgba(226, 163, 106, ${p.a})`
        : `rgba(244, 239, 230, ${p.a * 0.7})`;
      ctx.arc(p.x + ox * p.r, p.y + oy * p.r, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  };

  window.addEventListener('pointermove', (event) => {
    mx = event.clientX;
    my = event.clientY;
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    running = document.visibilityState === 'visible';
    if (running) requestAnimationFrame(tick);
  });

  window.addEventListener('resize', resize);
  mx = width / 2;
  my = height / 2;
  resize();
  requestAnimationFrame(tick);
})();

(function () {
  const bar = document.querySelector('.progress');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (bar && !reduce) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  const nav = document.querySelector('.site-nav nav');
  if (!nav) return;
  const hashLinks = [...nav.querySelectorAll('a[href*="#"]')];
  const observed = hashLinks
    .map((link) => {
      const id = (link.hash || link.getAttribute('href').split('#')[1] || '').replace(/^#/, '');
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);
  if (!observed.length || !('IntersectionObserver' in window)) return;

  const setActive = (id) => {
    hashLinks.forEach((link) => {
      const match = (link.hash || '').replace(/^#/, '') === id;
      if (match) link.classList.add('is-active');
      else link.classList.remove('is-active');
    });
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] });

  observed.forEach(({ section }) => io.observe(section));
})();
