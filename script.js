const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
let motionOff = reducedMotion.matches;
function setMotionState() {
  document.documentElement.classList.toggle('motion-off', motionOff);
  motionButton.setAttribute('aria-pressed', String(motionOff));
  motionButton.querySelector('span').textContent = motionOff ? 'off' : 'on';
  motionButton.title = motionOff ? 'Enable decorative animations' : 'Pause decorative animations';
  if (window.gsap) gsap.globalTimeline.paused(motionOff);
}
setMotionState();
motionButton.addEventListener('click', () => { motionOff = !motionOff; setMotionState(); });
reducedMotion.addEventListener('change', event => { motionOff = event.matches; setMotionState(); });
if (window.gsap && !motionOff) {
  gsap.from('.hero .eyebrow, h1 .line, .hero-bottom .intro', {y:28, opacity:0, duration:.9, stagger:.12, ease:'power3.out'});
  gsap.from('.system-board', {y:25, opacity:0, duration:1, delay:.5, ease:'power3.out'});
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!motionOff) gsap.fromTo(entry.target, {y:25, opacity:0}, {y:0, opacity:1, duration:.8, ease:'power3.out'});
      observer.unobserve(entry.target);
    });
  }, {threshold:.08});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  const board = document.querySelector('.system-board');
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    board.addEventListener('pointermove', event => {
      if (motionOff) return;
      const rect = board.getBoundingClientRect();
      gsap.to('.diagram-grid', {x:(event.clientX-rect.left-rect.width/2)*.015,y:(event.clientY-rect.top-rect.height/2)*.025,duration:1});
    });
    board.addEventListener('pointerleave', () => gsap.to('.diagram-grid', {x:0,y:0,duration:1}));
  }
}
