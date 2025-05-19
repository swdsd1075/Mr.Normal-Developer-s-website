const qs1 = document.querySelector('.qs1');
const title1 = document.querySelector('.title1');

qs1.addEventListener('mouseenter', () => {
  title1.style.fontSize = 'smaller';
});

qs1.addEventListener('mouseleave', () => {
  title1.style.fontSize = '';
});
