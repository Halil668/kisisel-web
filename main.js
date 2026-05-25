// ============================================================
//  main.js — Render Mantığı ve Etkileşimler
//  data.js yüklendikten sonra çalışır.
// ============================================================

/* ─── NAVBAR ─────────────────────────────────────────────── */
function renderNav() {
  const { personal } = SITE_DATA;
  const initials = personal.name.split(' ').map(n => n[0]).join('');

  document.getElementById('navbar').innerHTML = `
    <nav class="navbar" id="main-nav">
      <div class="nav-inner">
        <a href="#hero" class="nav-logo">${initials}<span>.</span></a>
        <ul class="nav-links">
          <li><a href="#about">Hakkımda</a></li>
          <li><a href="#projects">Projeler</a></li>
          <li><a href="#skills">Yetenekler</a></li>
          <li><a href="#contact" class="nav-cta">İletişim</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-label="Menü">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      <a href="#about" class="mobile-link">Hakkımda</a>
      <a href="#projects" class="mobile-link">Projeler</a>
      <a href="#skills" class="mobile-link">Yetenekler</a>
      <a href="#contact" class="mobile-link">İletişim</a>
    </div>
  `;

  // Scroll efekti
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Aktif link güncelleme
  const sections = ['about', 'projects', 'skills', 'contact'];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

/* ─── HERO ───────────────────────────────────────────────── */
function renderHero() {
  const { personal } = SITE_DATA;

  const socials = Object.entries(personal.social)
    .filter(([_, url]) => url)
    .map(([key, url]) => {
      const icons = {
        github:   { icon: '⌨', label: 'GitHub' },
        linkedin: { icon: '💼', label: 'LinkedIn' },
        twitter:  { icon: '𝕏', label: 'Twitter' }
      };
      const info = icons[key] || { icon: '🔗', label: key };
      return `<a href="${url}" target="_blank" rel="noopener" 
                 class="social-link" title="${info.label}">${info.icon}</a>`;
    }).join('');

  const avatarContent = `<img src="${personal.avatar}" alt="${personal.name}">`;

  document.getElementById('hero').innerHTML = `
    <section class="hero-section" id="home">
      <div class="hero-blob hero-blob-1"></div>
      <div class="hero-blob hero-blob-2"></div>
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge">Merhaba! Ben Hazırım 👋</div>
          <h1 class="hero-title">
            Ben <span class="accent">${personal.name}</span>,<br>
            ${personal.title}
          </h1>
          <p class="hero-tagline">${personal.tagline}</p>
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              🚀 Projelerimi Gör
            </a>
            <a href="#contact" class="btn-secondary">
              ✉️ İletişime Geç
            </a>
          </div>
          <div class="hero-social">${socials}</div>
        </div>
        <div class="hero-avatar-wrap">
          <div class="hero-avatar-ring">
            <div class="hero-avatar">${avatarContent}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ─── ABOUT ──────────────────────────────────────────────── */
function renderAbout() {
  const { about, personal } = SITE_DATA;

  const highlights = about.highlights
    .map(h => `
      <div class="highlight-item reveal">
        <span class="icon">${h.icon}</span>
        <span>${h.text}</span>
      </div>`)
    .join('');

  document.getElementById('about').innerHTML = `
    <section class="section" id="about">
      <div class="section-inner">
        <div class="about-grid">
          <div class="about-text">
            <div class="section-header">
              <span class="section-label">Benim Hakkımda</span>
              <h2 class="section-title">Kim Olduğumu<br>Biraz Anlatayım</h2>
            </div>
            <p>${about.bio}</p>
            <p>${about.bio2}</p>
            <div class="highlights-grid">${highlights}</div>
          </div>
          <div class="about-visual">
            <div class="about-card-stack">
              <div class="about-card about-card-main">
                <h3>Merhaba 👋</h3>
                <p>Projelerinde veya işinde sana yardımcı olmak için buradayım. Birlikte harika şeyler yapabiliriz.</p>
              </div>
              <div class="about-card about-card-bottom reveal">
                <div class="stat-item">
                  <span class="stat-number">3+</span>
                  <span class="stat-label">Yıl Deneyim</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">10+</span>
                  <span class="stat-label">Proje</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">100%</span>
                  <span class="stat-label">Özveri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ─── PROJECTS ───────────────────────────────────────────── */
function renderProjects() {
  const { projects } = SITE_DATA;

  const projectEmojis = ['🚀', '🌦', '✅', '📝', '🎨', '📊', '🤖', '🛒'];

  const cards = projects.map((project, i) => {
    const tags = project.tags
      .map(t => `<span class="tag">${t}</span>`).join('');

    const imgContent = project.image
      ? `<img src="${project.image}" alt="${project.title}">`
      : `<div class="project-card-placeholder" style="background:${project.color || '#f3f4f6'}">
           ${projectEmojis[i % projectEmojis.length]}
         </div>`;

    const featuredBadge = project.featured
      ? `<span class="project-featured-badge">⭐ Öne Çıkan</span>` : '';

    const liveBtn = project.liveUrl
      ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="project-link">
           🔗 Canlı Gör
         </a>` : '';

    const githubBtn = project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-link github">
           ⌨ GitHub
         </a>` : '';

    return `
      <div class="project-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="project-card-img" style="background:${project.color || '#f3f4f6'}">
          ${imgContent}
          ${featuredBadge}
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="tags-row">${tags}</div>
          <div class="project-links">${liveBtn}${githubBtn}</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('projects').innerHTML = `
    <section class="section section-alt" id="projects">
      <div class="section-inner">
        <div class="section-header">
          <span class="section-label">Portfolyo</span>
          <h2 class="section-title">Projelerim</h2>
          <p class="section-desc">Geliştirdiğim bazı projeler. Her biri farklı bir problem çözme sürecinin ürünü.</p>
        </div>
        <div class="projects-grid">${cards}</div>
      </div>
    </section>
  `;
}

/* ─── SKILLS ─────────────────────────────────────────────── */
function renderSkills() {
  const { skills } = SITE_DATA;

  const cards = skills.map((skill, i) => {
    const pills = skill.items
      .map(item => `<span class="skill-pill">${item}</span>`).join('');
    return `
      <div class="skill-card reveal reveal-delay-${i + 1}">
        <span class="skill-card-icon">${skill.icon}</span>
        <h3 class="skill-card-title">${skill.category}</h3>
        <div class="skill-items">${pills}</div>
      </div>`;
  }).join('');

  document.getElementById('skills').innerHTML = `
    <section class="section" id="skills">
      <div class="section-inner">
        <div class="section-header">
          <span class="section-label">Yetenekler</span>
          <h2 class="section-title">Neler Yapabilirim</h2>
          <p class="section-desc">Çalıştığım teknolojiler ve araçlar. Sürekli öğrenmeye ve gelişmeye devam ediyorum.</p>
        </div>
        <div class="skills-grid">${cards}</div>
      </div>
    </section>
  `;
}

/* ─── CONTACT ────────────────────────────────────────────── */
function renderContact() {
  const { personal } = SITE_DATA;

  document.getElementById('contact').innerHTML = `
    <section class="section section-alt" id="contact">
      <div class="section-inner">
        <div class="section-header">
          <span class="section-label">İletişim</span>
          <h2 class="section-title">Birlikte Çalışalım</h2>
          <p class="section-desc">Bir projen mi var? Fikirlerini duymaktan mutluluk duyarım.</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Seninle Tanışmak İsterim</h3>
            <p>Freelance proje teklifleri, iş fırsatları veya sadece merhaba demek için mesaj gönderebilirsin. En kısa sürede dönüş yapıyorum.</p>
            <div class="contact-details">
              <div class="contact-detail-item">
                <div class="contact-detail-icon">📧</div>
                <span>${personal.email}</span>
              </div>
              <div class="contact-detail-item">
                <div class="contact-detail-icon">📍</div>
                <span>İstanbul, Türkiye</span>
              </div>
              <div class="contact-detail-item">
                <div class="contact-detail-icon">⏰</div>
                <span>Genellikle 24 saat içinde yanıt veririm</span>
              </div>
            </div>
          </div>
          <div class="contact-form-wrap reveal">
            <form id="contact-form" novalidate>
              <!-- Web3Forms gizli alanlar -->
              <input type="hidden" name="access_key" value="${personal.web3forms_key}">
              <input type="hidden" name="subject" value="Portfolyo Sitesinden Yeni Mesaj">
              <input type="hidden" name="from_name" value="Portfolyo Formu">
              <!-- Honeypot spam koruması -->
              <input type="checkbox" name="botcheck" style="display:none">

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">AD SOYAD *</label>
                  <input type="text" name="name" class="form-input"
                         placeholder="Ahmet Yılmaz" required>
                </div>
                <div class="form-group">
                  <label class="form-label">E-posta *</label>
                  <input type="email" name="email" class="form-input"
                         placeholder="ahmet@gmail.com" required>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Konu *</label>
                <input type="text" name="konu" class="form-input"
                       placeholder="Proje teklifi, iş birliği..." required>
              </div>
              <div class="form-group">
                <label class="form-label">Mesaj *</label>
                <textarea name="message" class="form-textarea"
                          placeholder="Merhaba! Seninle şu konuda iletişime geçmek istedim..." required></textarea>
              </div>
              <button type="submit" class="btn-submit" id="submit-btn">
                <span id="btn-text">✉️ Mesaj Gönder</span>
              </button>
              <div class="form-status" id="form-status"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  initContactForm();
}

/* ─── CONTACT FORM LOGIC ─────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn     = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const status  = document.getElementById('form-status');
    const data    = new FormData(this);

    // Yükleniyor durumu
    btn.disabled = true;
    btnText.textContent = '⏳ Gönderiliyor...';
    status.className = 'form-status';

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      const json = await res.json();

      if (json.success) {
        status.className = 'form-status success';
        status.textContent = '✅ Mesajın başarıyla ulaştı! En kısa sürede dönüş yapacağım.';
        form.reset();
      } else {
        throw new Error('Gönderilemedi');
      }
    } catch {
      status.className = 'form-status error';
      status.textContent = '❌ Bir sorun oluştu. Lütfen tekrar dene veya doğrudan e-posta gönder.';
    } finally {
      btn.disabled = false;
      btnText.textContent = '✉️ Mesaj Gönder';
    }
  });
}

/* ─── FOOTER ─────────────────────────────────────────────── */
function renderFooter() {
  const { personal } = SITE_DATA;
  const initials = personal.name.split(' ').map(n => n[0]).join('');
  const year = new Date().getFullYear();

  document.getElementById('footer').innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <a href="#hero" class="footer-logo">${initials}<span>.</span></a>
        <nav class="footer-links">
          <a href="#about">Hakkımda</a>
          <a href="#projects">Projeler</a>
          <a href="#skills">Yetenekler</a>
          <a href="#contact">İletişim</a>
        </nav>
        <p class="footer-copy">© ${year} ${personal.name}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  `;
}

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Her render sonrası tekrar observer'a ekle
  function observeAll() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  // İlk render ve sonraki section render'larını yakala
  observeAll();
  // Kısa gecikmeli tekrar (dinamik render için)
  setTimeout(observeAll, 300);
}

/* ─── BACK TO TOP ────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Yukarı çık');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── SMOOTH SCROLL ──────────────────────────────────────── */
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ─── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderProjects();
  renderSkills();
  renderContact();
  renderFooter();

  // Tüm bileşenler render edildikten sonra
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
});
