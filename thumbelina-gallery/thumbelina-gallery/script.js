// Photos float while you touch them (press on phones, hover on desktop)
// and tilt gently toward your finger / cursor.
(() => {
  const MAX_TILT = 10; // degrees

  document.querySelectorAll('.card').forEach((card) => {
    const lift = card.querySelector('.card__lift');

    const tilt = (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;   // -0.5 .. 0.5
      const y = (e.clientY - r.top) / r.height - 0.5;
      lift.style.setProperty('--ry', `${(x * MAX_TILT * 2).toFixed(1)}deg`);
      lift.style.setProperty('--rx', `${(-y * MAX_TILT * 2).toFixed(1)}deg`);
    };

    const start = (e) => { card.classList.add('is-floating'); tilt(e); };
    const stop = () => {
      card.classList.remove('is-floating');
      lift.style.setProperty('--rx', '0deg');
      lift.style.setProperty('--ry', '0deg');
    };

    card.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') start(e); });
    card.addEventListener('pointerdown', start);
    card.addEventListener('pointermove', (e) => {
      if (card.classList.contains('is-floating')) tilt(e);
    });
    card.addEventListener('pointerup', stop);
    card.addEventListener('pointercancel', stop);   // fires when the page starts scrolling
    card.addEventListener('pointerleave', stop);
    card.addEventListener('contextmenu', (e) => e.preventDefault()); // no long-press menu on photos
  });
})();
