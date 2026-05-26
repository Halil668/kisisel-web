// ============================================================
//  main.js — TAM VE EKSİKSİZ (RESİM GÖSTEREN GÜNCEL SÜRÜM)
// ============================================================

// PRELOADER
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hide'), 300);
    setTimeout(() => { if(preloader) preloader.style.display = 'none'; }, 800);
  }
});

// DARK MODE
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const icon = themeToggle.querySelector('i');
  if (icon) icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    const icon2 = themeToggle.querySelector('i');
    if (icon2) icon2.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  });
}

// NAVBAR RENDER
function renderNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.innerHTML = `
    <div class="container">
      <a href="#" class="logo">H<span>.</span></a>
      <ul class="nav-links">
        <li><a href="#home" class="active">Ana Sayfa</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#courses">Yazılım Dersleri</a></li>
        <li><a href="#ai">Yapay Zeka</a></li>
        <li><a href="#projects">Projeler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
      <div class="nav-actions">
        <button class="theme-toggle" id="themeToggle"><i class="fas fa-moon"></i></button>
        <a href="quiz.html" class="btn-quiz-nav"><i class="fas fa-brain"></i> Sınava Gir</a>
        <button class="mobile-menu-btn" id="mobileMenuBtn"><i class="fas fa-bars"></i></button>
      </div>
    </div>
  `;
  let mobileMenu = document.getElementById('mobileMenu');
  if (!mobileMenu) {
    mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobileMenu';
    mobileMenu.className = 'mobile-menu';
    document.body.appendChild(mobileMenu);
  }
  mobileMenu.innerHTML = `<a href="#home">Ana Sayfa</a><a href="#about">Hakkımda</a><a href="#courses">Yazılım Dersleri</a><a href="#ai">Yapay Zeka</a><a href="#projects">Projeler</a><a href="#contact">İletişim</a><a href="quiz.html" class="mobile-quiz-btn"><i class="fas fa-brain"></i> Sınava Gir</a>`;
}

// COURSES RENDER
function renderCourses() {
  const container = document.getElementById('coursesGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const courses = SITE_DATA.courses || [];
  container.innerHTML = courses.map(course => `
    <div class="course-card">
      <div class="course-icon">${course.icon}</div>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <div class="course-meta"><span><i class="fas fa-signal"></i> ${course.level}</span><span><i class="fas fa-clock"></i> ${course.duration}</span></div>
      <div class="course-features">${course.features.map(f => `<span class="course-feature">${f}</span>`).join('')}</div>
      <a href="apply.html" class="btn btn-outline course-btn">Başvur <i class="fas fa-arrow-right"></i></a>
    </div>
  `).join('');
}

// AI EDUCATION RENDER
function renderAIEducation() {
  const container = document.getElementById('aiGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const offerings = SITE_DATA.aiEducation?.offerings || [];
  container.innerHTML = offerings.map(item => `
    <div class="ai-card"><i class="fas fa-robot"></i><h3>${item.title}</h3><p>${item.description}</p></div>
  `).join('');
}

// PROJECTS RENDER
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const projects = SITE_DATA.projects || [];
  container.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-img"><i class="fas fa-code"></i></div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
        <div class="project-links"><a href="${project.githubUrl || '#'}" target="_blank"><i class="fab fa-github"></i> GitHub</a>${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> Canlı Gör</a>` : ''}</div>
      </div>
    </div>
  `).join('');
}

// SKILLS RENDER
function renderSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const skills = SITE_DATA.skills || [];
  container.innerHTML = skills.map(skill => `
    <div class="skill-card"><div class="skill-card-icon">${skill.icon}</div><h3 class="skill-card-title">${skill.category}</h3><div class="skill-items">${skill.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}</div></div>
  `).join('');
}

// ABOUT RENDER
function renderAbout() {
  const container = document.getElementById('about');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const about = SITE_DATA.about;
  if (!about) return;
  container.innerHTML = `
    <div class="container">
      <div class="section-header"><span class="section-tag">Hakkımda</span><h2 class="section-title">Kim Olduğumu<br><span class="gradient-text">Biraz Anlatayım</span></h2></div>
      <div class="about-grid">
        <div class="about-content"><p>${about.bio}</p><p>${about.bio2}</p><div class="about-features">${about.highlights.map(h => `<div class="feature"><i class="fas fa-check-circle"></i> ${h.text}</div>`).join('')}</div><a href="#contact" class="btn btn-primary">İletişime Geç <i class="fas fa-arrow-right"></i></a></div>
        <div class="about-stats"><div class="stat-card"><i class="fas fa-code"></i><div><span class="stat-value">10+</span><span class="stat-name">Proje</span></div></div><div class="stat-card"><i class="fas fa-users"></i><div><span class="stat-value">100+</span><span class="stat-name">Öğrenci</span></div></div><div class="stat-card"><i class="fas fa-clock"></i><div><span class="stat-value">1200+</span><span class="stat-name">Ders Saati</span></div></div><div class="stat-card"><i class="fas fa-certificate"></i><div><span class="stat-value">5</span><span class="stat-name">Sertifika</span></div></div></div>
      </div>
    </div>
  `;
}

// HERO RENDER (RESİM GÖSTEREN VERSİYON)
function renderHero() {
  const container = document.getElementById('home');
  if (!container) return;
  
  // Avatar resmini data.js'den al
  let avatarPath = 'assets/images/resim.jpg';
  if (typeof SITE_DATA !== 'undefined' && SITE_DATA.personal && SITE_DATA.personal.avatar) {
    avatarPath = SITE_DATA.personal.avatar;
  }
  
  container.innerHTML = `
    <div class="hero-bg"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge"><span class="badge-dot"></span> Hoş Geldiniz</div>
        <h1 class="hero-title"><span class="gradient-text">Yazılım & Yapay Zeka</span><br>Eğitmeniniz Halil</h1>
        <p class="hero-desc">Profesyonel yazılım geliştirme ve yapay zeka eğitimleri ile kariyerinizde bir sonraki seviyeye geçin.</p>
        <div class="hero-buttons"><a href="#courses" class="btn btn-primary"><i class="fas fa-graduation-cap"></i> Hemen Başla</a><a href="quiz.html" class="btn btn-outline"><i class="fas fa-brain"></i> Bilgi Testi</a></div>
        <div class="hero-stats"><div class="stat"><span class="stat-number" data-target="500">0</span><span class="stat-label">Öğrenci</span></div><div class="stat"><span class="stat-number" data-target="1200">0</span><span class="stat-label">Ders Saati</span></div><div class="stat"><span class="stat-number" data-target="98">0</span><span class="stat-label">Başarı Oranı</span></div></div>
      </div>
      <div class="hero-image">
        <div class="hero-avatar">
          <div class="avatar-ring"></div>
          <div class="avatar-inner">
            <img src="${avatarPath}" alt="Halil Samadov" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
          </div>
        </div>
      </div>
    </div>
  `;
}

// CONTACT RENDER
function renderContact() {
  const container = document.getElementById('contact');
  if (!container) return;
  container.innerHTML = `
    <div class="container">
      <div class="section-header"><span class="section-tag">İletişim</span><h2 class="section-title">Bana<br><span class="gradient-text">Ulaşın</span></h2></div>
      <div class="contact-grid">
        <div class="contact-info"><h3>Birlikte Çalışalım</h3><p>Yazılım eğitimi, yapay zeka danışmanlığı veya proje teklifleriniz için bana ulaşabilirsiniz.</p><div class="contact-details"><div class="contact-item"><i class="fas fa-envelope"></i><span>semedovxelil259@gmail.com</span></div><div class="contact-item"><i class="fab fa-whatsapp"></i><span>+90 555 095 77 42</span></div><div class="contact-item"><i class="fas fa-map-marker-alt"></i><span>İstanbul, Türkiye</span></div></div><div class="social-links"><a href="https://github.com/Halil668" target="_blank"><i class="fab fa-github"></i></a><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></div></div>
        <div class="contact-form"><form id="contactForm"><div class="form-group"><input type="text" name="name" placeholder="Ad Soyad" required></div><div class="form-group"><input type="email" name="email" placeholder="E-posta" required></div><div class="form-group"><input type="text" name="subject" placeholder="Konu"></div><div class="form-group"><textarea name="message" rows="5" placeholder="Mesajınız..." required></textarea></div><button type="submit" class="btn btn-primary btn-block"><i class="fas fa-paper-plane"></i> Mesaj Gönder</button><div id="formStatus" class="form-status"></div></form></div>
      </div>
    </div>
  `;
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      const btn = form.querySelector('button');
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
      const formData = new FormData(form);
      formData.append('access_key', '41c856f1-6f05-44e6-9732-6278487a4dd7');
      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
        const json = await res.json();
        if (json.success) {
          status.className = 'form-status success';
          status.innerHTML = '✅ Mesajınız gönderildi!';
          form.reset();
          setTimeout(() => status.className = 'form-status', 5000);
        } else throw new Error();
      } catch {
        status.className = 'form-status error';
        status.innerHTML = '❌ Bir hata oluştu.';
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    });
  }
}

// FOOTER RENDER
function renderFooter() {
  const container = document.getElementById('footer');
  if (!container) return;
  container.innerHTML = `<div class="container"><div class="footer-content"><div class="footer-logo"><h3>Halil<span>.</span></h3><p>Yazılım & Yapay Zeka Eğitmeni</p></div><div class="footer-links"><a href="#home">Ana Sayfa</a><a href="#about">Hakkımda</a><a href="#courses">Dersler</a><a href="#ai">Yapay Zeka</a><a href="#contact">İletişim</a></div><div class="footer-copyright"><p>&copy; 2026 Khalil Samadov. Tüm hakları saklıdır.</p></div></div></div>`;
}

// MOBILE MENU
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('active'));
}

// SAYAÇ ANİMASYONU
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const update = () => {
            current += target / 50;
            if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(update);
            } else counter.textContent = target + (target === 98 ? '%' : '+');
          };
          update();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(counter);
  });
}

// SAYFA YÜKLENİNCE
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderCourses();
  renderAIEducation();
  renderProjects();
  renderSkills();
  renderContact();
  renderFooter();
  initTheme();
  initMobileMenu();
  initCounters();
});