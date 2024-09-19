{
  // menu
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  //scroll_effect

const targets = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');

function callback(entries, obs) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('on');
    obs.unobserve(entry.target);  
  });
}
const options = {
  threshold: 0.2,
};
const observer = new IntersectionObserver(callback,options);
targets.forEach(target => {
observer.observe(target);
});

}