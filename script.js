// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple client-side form handling (mailto fallback)
const form = document.getElementById('lead-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const company = data.get('company')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';

    if (!name || !email || !message) {
      alert('Please fill in your name, email, and what you want to automate.');
      return;
    }

    const subject = encodeURIComponent('Free AI Audit Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nWhat to automate:\n${message}`
    );

    // Replace with your real email
    const to = 'founder@smartifyai.dev';
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
