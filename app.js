const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
      }
    }
  });
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 30) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
});

const form = document.getElementById('sendMsg');
const msgResponse = document.getElementById('msgResponse');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (msgResponse) msgResponse.textContent = 'Sending message...';

    await new Promise((resolve) => setTimeout(resolve, 700));

    form.reset();
    if (msgResponse) msgResponse.textContent = 'Thanks! Your message has been sent. We will contact you shortly.';

    setTimeout(() => {
      if (msgResponse) msgResponse.textContent = '';
    }, 5000);

    console.log('Contact form payload:', payload);
  });
}
