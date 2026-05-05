      tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#2563EB',
            'primary-dark': '#1D4ED8',
            'primary-light': '#DBEAFE',
            accent: '#F97316',
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
          },
        },
      },
    };
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Tag filter active state
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Heart/like toggle
  document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
      const svg = btn.querySelector('svg');
      if (btn.classList.contains('liked')) {
        svg.setAttribute('fill', '#EF4444');
        svg.setAttribute('stroke', '#EF4444');
      } else {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
      }
    });
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => observer.observe(el));

  // Map list item active
  document.querySelectorAll('.map-list-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.map-list-item').forEach(i => {
        i.classList.remove('bg-blue-50', 'border-blue-200');
        i.classList.add('border-transparent');
      });
      item.classList.add('bg-blue-50', 'border-blue-200');
      item.classList.remove('border-transparent');
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (mobileMenu.classList.contains('open')) mobileMenu.classList.remove('open');
      }
    });
  });

  // Nav active state on scroll
  const sections = ['hero', 'rekomendasi', 'tentang', 'kontak'];
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current || 
         (current === 'rekomendasi' && link.textContent.trim() === 'Cari Kos')) {
        link.classList.add('active');
        link.classList.add('text-primary');
      } else {
        link.classList.remove('text-primary');
        link.classList.add('text-gray-600');
      }
    });
  });

  // Testimonial dots (decorative)
  const dots = document.querySelectorAll('.dot');
  let currentDot = 0;
  setInterval(() => {
    dots[currentDot].classList.remove('active');
    currentDot = (currentDot + 1) % dots.length;
    dots[currentDot].classList.add('active');
  }, 3000);