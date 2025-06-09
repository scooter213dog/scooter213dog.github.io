const cq2Card = document.querySelector('.project-card.cq2');
if (cq2Card) {
  const icon = cq2Card.querySelector('.cq2-icon');
  const icons = [
    'images/cookie2icon1.png',
    'images/cookie2icon2.png',
    'images/cookie2icon3.png',
    'images/cookie2icon4.png'
  ];
  let interval;
  cq2Card.addEventListener('mouseenter', () => {
    icon.src = icons[Math.floor(Math.random() * icons.length)];
    icon.style.display = 'block';
    interval = setInterval(() => {
      const x = Math.random() * (cq2Card.clientWidth - icon.clientWidth);
      const y = Math.random() * (cq2Card.clientHeight - icon.clientHeight);
      icon.style.transform = `translate(${x}px, ${y}px)`;
    }, 300);
  });
  cq2Card.addEventListener('mouseleave', () => {
    clearInterval(interval);
    icon.style.display = 'none';
  });
}
