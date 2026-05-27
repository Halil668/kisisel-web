// ============================================================
//  main.js — DİL DROPDOWN + RANDEVU MODAL + DETAY MODAL (GÜNCEL)
// ============================================================

// PRELOADER
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hide'), 300);
    setTimeout(() => { if(preloader) preloader.style.display = 'none'; }, 800);
  }
});

// ========== DETAY MODAL SİSTEMİ (YENİ) ==========
function openDetailModal(type, id) {
  const modal = document.getElementById('detailModal');
  const modalTitle = document.getElementById('detailModalTitle');
  const modalBody = document.getElementById('detailModalBody');
  
  if (!modal || !modalBody) return;
  
  let title = '';
  let content = '';
  
  if (type === 'course' && typeof SITE_DATA !== 'undefined' && SITE_DATA.courses) {
    const course = SITE_DATA.courses.find(c => c.id == id);
    if (course) {
      title = course.title;
      content = `
        <div class="detail-icon">${course.icon}</div>
        <h2 class="detail-title">${course.title}</h2>
        <p class="detail-description">${course.description}</p>
        
        <div class="detail-section">
          <h4><i class="fas fa-info-circle"></i> Kurs Detayları</h4>
          <div class="detail-list">
            <span class="detail-list-item">📊 Seviye: ${course.level}</span>
            <span class="detail-list-item">⏱️ Süre: ${course.duration}</span>
          </div>
        </div>
        
        <div class="detail-section">
          <h4><i class="fas fa-star"></i> Kazanımlar</h4>
          <div class="detail-list">
            ${course.features.map(f => `<span class="detail-list-item">✨ ${f}</span>`).join('')}
          </div>
        </div>
        
        <div class="detail-section">
          <h4><i class="fas fa-graduation-cap"></i> Kimler Katılmalı?</h4>
          <p>Yazılım kariyerine başlamak isteyenler, mevcut bilgilerini ilerletmek isteyen geliştiriciler, full-stack uzmanı olmak isteyenler.</p>
        </div>
        
        <div class="detail-section">
          <h4><i class="fas fa-certificate"></i> Sertifika</h4>
          <p>Kurs sonunda başarıyla tamamlayan öğrencilere uluslararası geçerli sertifika verilmektedir.</p>
        </div>
        
        <div class="detail-buttons">
          <a href="apply.html" class="btn btn-primary">📝 Hemen Başvur</a>
          <a href="#contact" class="btn btn-outline">💬 Soru Sor</a>
        </div>
      `;
    }
  } 
  else if (type === 'ai' && typeof SITE_DATA !== 'undefined' && SITE_DATA.aiEducation) {
    const aiItem = SITE_DATA.aiEducation.offerings.find((item, index) => index == id);
    if (aiItem) {
      title = aiItem.title;
      content = `
        <div class="detail-icon">🤖</div>
        <h2 class="detail-title">${aiItem.title}</h2>
        <p class="detail-description">${aiItem.description}</p>
        
        <div class="detail-section">
          <h4><i class="fas fa-chalkboard-user"></i> Eğitim İçeriği</h4>
          <p>Bu eğitimde teori ve uygulama bir arada sunulmaktadır. Gerçek dünya projeleri ile öğrenme garantisi.</p>
        </div>
        
        <div class="detail-section">
          <h4><i class="fas fa-tasks"></i> Ön Gereksinimler</h4>
          <div class="detail-list">
            <span class="detail-list-item">🐍 Temel Python bilgisi</span>
            <span class="detail-list-item">📊 Matematik (Lineer Cebir)</span>
            <span class="detail-list-item">💻 Temel programlama mantığı</span>
          </div>
        </div>
        
        <div class="detail-section">
          <h4><i class="fas fa-rocket"></i> Kariyer Fırsatları</h4>
          <p>Yapay zeka mühendisi, veri bilimci, makine öğrenmesi uzmanı gibi pozisyonlarda çalışabilirsiniz.</p>
        </div>
        
        <div class="detail-buttons">
          <a href="apply.html" class="btn btn-primary">🤖 Başvur</a>
          <a href="#contact" class="btn btn-outline">💬 Bilgi Al</a>
        </div>
      `;
    }
  }
  else if (type === 'project' && typeof SITE_DATA !== 'undefined' && SITE_DATA.projects) {
    const project = SITE_DATA.projects.find(p => p.id == id);
    if (project) {
      title = project.title;
      content = `
        <div class="detail-icon">🚀</div>
        <h2 class="detail-title">${project.title}</h2>
        <p class="detail-description">${project.description}</p>
        
        <div class="detail-section">
          <h4><i class="fas fa-code"></i> Kullanılan Teknolojiler</h4>
          <div class="detail-list">
            ${project.tags.map(tag => `<span class="detail-list-item">⚡ ${tag}</span>`).join('')}
          </div>
        </div>
        
        <div class="detail-section">
          <h4><i class="fas fa-lightbulb"></i> Proje Hakkında</h4>
          <p>Bu proje, modern web teknolojileri kullanılarak geliştirilmiştir. Responsive tasarım, performans optimizasyonu ve güvenlik önlemleri içermektedir.</p>
        </div>
        
        <div class="detail-section">
          <h4><i class="fas fa-chart-line"></i> Proje Çıktıları</h4>
          <p>Proje sayesinde ${project.tags.length} farklı teknoloji kullanılarak gerçek dünya problemi çözülmüştür.</p>
        </div>
        
        <div class="detail-buttons">
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="btn btn-primary">🔗 Canlı Gör</a>` : ''}
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-outline">⌨ GitHub</a>` : ''}
          <a href="#contact" class="btn btn-outline">💬 Benzer Proje İste</a>
        </div>
      `;
    }
  }
  
  if (modalTitle) modalTitle.innerHTML = `<i class="fas fa-info-circle"></i> ${title}`;
  modalBody.innerHTML = content;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function initDetailModal() {
  const modal = document.getElementById('detailModal');
  const closeBtn = document.getElementById('closeDetailModal');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }
}

// ========== DİL DEĞİŞTİRME SİSTEMİ (DROPDOWN) ==========
let currentLang = 'tr';

function loadLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('selectedLang', lang);
  
  const langNames = { tr: 'Türkçe', en: 'English', ru: 'Русский', az: 'Azərbaycanca' };
  const selectedLangText = document.getElementById('selectedLangText');
  if (selectedLangText) selectedLangText.textContent = langNames[lang];
  
  if (typeof translations !== 'undefined') {
    const texts = translations[lang];
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (texts[key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = texts[key];
        } else {
          element.innerHTML = texts[key];
        }
      }
    });
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem('selectedLang') || 'tr';
  
  const dropdownBtn = document.getElementById('langDropdownBtn');
  const dropdownMenu = document.getElementById('langDropdownMenu');
  const langOptions = document.querySelectorAll('.lang-option');
  
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });
    
    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
    });
    
    dropdownMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      loadLanguage(lang);
      const menu = document.getElementById('langDropdownMenu');
      if (menu) menu.classList.remove('show');
    });
  });
  
  loadLanguage(savedLang);
}

// ========== RANDEVU MODAL SİSTEMİ ==========
function initAppointmentModal() {
  const modal = document.getElementById('appointmentModal');
  const openBtn = document.getElementById('openAppointmentModal');
  const closeBtn = document.getElementById('closeModal');
  
  if (!modal || !openBtn) return;
  
  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
}

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

// NAVBAR RENDER (DROPDOWN VERSİYONU)
function renderNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.innerHTML = `
    <div class="container">
      <a href="#" class="logo">H<span>.</span></a>
      <ul class="nav-links">
        <li><a href="#home" class="active" data-key="nav_home">Ana Sayfa</a></li>
        <li><a href="#about" data-key="nav_about">Hakkımda</a></li>
        <li><a href="#courses" data-key="nav_courses">Yazılım Dersleri</a></li>
        <li><a href="#ai" data-key="nav_ai">Yapay Zeka</a></li>
        <li><a href="#projects" data-key="nav_projects">Projeler</a></li>
        <li><a href="#contact" data-key="nav_contact">İletişim</a></li>
      </ul>
      <div class="nav-actions">
        <div class="lang-dropdown">
          <button class="lang-dropdown-btn" id="langDropdownBtn">
            <i class="fas fa-globe"></i> <span id="selectedLangText">Türkçe</span> <i class="fas fa-chevron-down"></i>
          </button>
          <div class="lang-dropdown-menu" id="langDropdownMenu">
            <button class="lang-option" data-lang="tr">🇹🇷 Türkçe</button>
            <button class="lang-option" data-lang="en">🇬🇧 English</button>
            <button class="lang-option" data-lang="ru">🇷🇺 Русский</button>
            <button class="lang-option" data-lang="az">🇦🇿 Azərbaycanca</button>
          </div>
        </div>
        <button class="theme-toggle" id="themeToggle"><i class="fas fa-moon"></i></button>
        <a href="quiz.html" class="btn-quiz-nav"><i class="fas fa-brain"></i> <span data-key="quiz_btn">Sınava Gir</span></a>
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
  mobileMenu.innerHTML = `<a href="#home" data-key="nav_home">Ana Sayfa</a><a href="#about" data-key="nav_about">Hakkımda</a><a href="#courses" data-key="nav_courses">Yazılım Dersleri</a><a href="#ai" data-key="nav_ai">Yapay Zeka</a><a href="#projects" data-key="nav_projects">Projeler</a><a href="#contact" data-key="nav_contact">İletişim</a><a href="quiz.html" class="mobile-quiz-btn"><i class="fas fa-brain"></i> <span data-key="quiz_btn">Sınava Gir</span></a>`;
}

// COURSES RENDER (Tıklama eklendi)
function renderCourses() {
  const container = document.getElementById('coursesGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const courses = SITE_DATA.courses || [];
  container.innerHTML = courses.map(course => `
    <div class="course-card" data-type="course" data-id="${course.id}">
      <div class="course-icon">${course.icon}</div>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <div class="course-meta"><span><i class="fas fa-signal"></i> ${course.level}</span><span><i class="fas fa-clock"></i> ${course.duration}</span></div>
      <div class="course-features">${course.features.map(f => `<span class="course-feature">${f}</span>`).join('')}</div>
      <a href="apply.html" class="btn btn-outline course-btn">Başvur <i class="fas fa-arrow-right"></i></a>
    </div>
  `).join('');
  
  // Kurs kartlarına tıklama eventi ekle
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') {
        const type = card.getAttribute('data-type');
        const id = card.getAttribute('data-id');
        openDetailModal(type, id);
      }
    });
  });
}

// AI EDUCATION RENDER (Tıklama eklendi)
function renderAIEducation() {
  const container = document.getElementById('aiGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const offerings = SITE_DATA.aiEducation?.offerings || [];
  container.innerHTML = offerings.map((item, index) => `
    <div class="ai-card" data-type="ai" data-id="${index}">
      <i class="fas fa-robot"></i>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `).join('');
  
  // AI kartlarına tıklama eventi ekle
  document.querySelectorAll('.ai-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-type');
      const id = card.getAttribute('data-id');
      openDetailModal(type, id);
    });
  });
}

// PROJECTS RENDER (Tıklama eklendi)
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container || typeof SITE_DATA === 'undefined') return;
  const projects = SITE_DATA.projects || [];
  container.innerHTML = projects.map(project => `
    <div class="project-card" data-type="project" data-id="${project.id}">
      <div class="project-img"><i class="fas fa-code"></i></div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
        <div class="project-links">
          <a href="${project.githubUrl || '#'}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> Canlı Gör</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  // Proje kartlarına tıklama eventi ekle
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') {
        const type = card.getAttribute('data-type');
        const id = card.getAttribute('data-id');
        openDetailModal(type, id);
      }
    });
  });
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
      <div class="section-header"><span class="section-tag" data-key="about_tag">Hakkımda</span><h2 class="section-title"><span data-key="about_title1">Kim Olduğumu</span><br><span class="gradient-text" data-key="about_title2">Biraz Anlatayım</span></h2></div>
      <div class="about-grid">
        <div class="about-content"><p data-key="about_bio1">${about.bio}</p><p data-key="about_bio2">${about.bio2}</p><div class="about-features">${about.highlights.map(h => `<div class="feature"><i class="fas fa-check-circle"></i> ${h.text}</div>`).join('')}</div><a href="#contact" class="btn btn-primary"><span data-key="contact_btn">İletişime Geç</span> <i class="fas fa-arrow-right"></i></a></div>
        <div class="about-stats"><div class="stat-card"><i class="fas fa-code"></i><div><span class="stat-value">10+</span><span class="stat-name" data-key="stat_projects">Proje</span></div></div><div class="stat-card"><i class="fas fa-users"></i><div><span class="stat-value">Birebir Eğitim</span><span class="stat-name" data-key="stat_students2">Öğrenci</span></div></div><div class="stat-card"><i class="fas fa-clock"></i><div><span class="stat-value">1200+</span><span class="stat-name" data-key="stat_hours2">Ders Saati</span></div></div><div class="stat-card"><i class="fas fa-certificate"></i><div><span class="stat-value">5</span><span class="stat-name" data-key="stat_cert">Sertifika</span></div></div></div>
      </div>
    </div>
  `;
}

// HERO RENDER
function renderHero() {
  const container = document.getElementById('home');
  if (!container) return;
  let avatarPath = 'assets/images/resim.jpg';
  if (typeof SITE_DATA !== 'undefined' && SITE_DATA.personal && SITE_DATA.personal.avatar) {
    avatarPath = SITE_DATA.personal.avatar;
  }
  container.innerHTML = `
    <div class="hero-bg"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge"><span class="badge-dot"></span> <span data-key="hero_badge">Hoş Geldiniz</span></div>
        <h1 class="hero-title"><span class="gradient-text" data-key="hero_title1">Yazılım & Yapay Zeka</span><br><span data-key="hero_title2">Eğitmeniniz Halil</span></h1>
        <p class="hero-desc" data-key="hero_desc">Profesyonel yazılım geliştirme ve yapay zeka eğitimleri ile kariyerinizde bir sonraki seviyeye geçin.</p>
        <div class="hero-buttons"><a href="#courses" class="btn btn-primary"><i class="fas fa-graduation-cap"></i> <span data-key="hero_btn_start">Hemen Başla</span></a><a href="quiz.html" class="btn btn-outline"><i class="fas fa-brain"></i> <span data-key="hero_btn_quiz">Bilgi Testi</span></a></div>
        <div class="hero-stats"><div class="stat"><span class="stat-number" data-target="500">0</span><span class="stat-label" data-key="stat_students">Öğrenci</span></div><div class="stat"><span class="stat-number" data-target="1200">0</span><span class="stat-label" data-key="stat_hours">Ders Saati</span></div><div class="stat"><span class="stat-number" data-target="98">0</span><span class="stat-label" data-key="stat_success">Başarı Oranı</span></div></div>
      </div>
      <div class="hero-image">
        <div class="hero-avatar">
          <div class="avatar-ring"></div>
          <div class="avatar-inner"><img src="${avatarPath}" alt="Halil Samadov" style="width:100%; height:100%; object-fit:cover; border-radius:50%;"></div>
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
      <div class="section-header"><span class="section-tag" data-key="contact_tag">İletişim</span><h2 class="section-title"><span data-key="contact_title1">Bana</span><br><span class="gradient-text" data-key="contact_title2">Ulaşın</span></h2></div>
      <div class="contact-grid">
        <div class="contact-info"><h3 data-key="contact_subtitle">Birlikte Çalışalım</h3><p data-key="contact_desc">Yazılım eğitimi, yapay zeka danışmanlığı veya proje teklifleriniz için bana ulaşabilirsiniz.</p><div class="contact-details"><div class="contact-item"><i class="fas fa-envelope"></i><span>semedovxelil259@gmail.com</span></div><div class="contact-item"><i class="fab fa-whatsapp"></i><span>+90 555 095 77 42</span></div><div class="contact-item"><i class="fas fa-map-marker-alt"></i><span>İstanbul, Türkiye</span></div></div><div class="social-links"><a href="https://github.com/Halil668" target="_blank"><i class="fab fa-github"></i></a><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></div></div>
        <div class="contact-form"><form id="contactForm"><div class="form-group"><input type="text" name="name" placeholder="Ad Soyad" required></div><div class="form-group"><input type="email" name="email" placeholder="E-posta" required></div><div class="form-group"><input type="text" name="subject" placeholder="Konu"></div><div class="form-group"><textarea name="message" rows="5" placeholder="Mesajınız..." required></textarea></div><button type="submit" class="btn btn-primary btn-block"><i class="fas fa-paper-plane"></i> <span data-key="send_btn">Mesaj Gönder</span></button><div id="formStatus" class="form-status"></div></form></div>
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
  container.innerHTML = `<div class="container"><div class="footer-content"><div class="footer-logo"><h3>Halil<span>.</span></h3><p data-key="footer_title">Yazılım & Yapay Zeka Eğitmeni</p></div><div class="footer-links"><a href="#home" data-key="nav_home">Ana Sayfa</a><a href="#about" data-key="nav_about">Hakkımda</a><a href="#courses" data-key="nav_courses">Dersler</a><a href="#ai" data-key="nav_ai">Yapay Zeka</a><a href="#contact" data-key="nav_contact">İletişim</a></div><div class="footer-copyright"><p>&copy; 2026 Khalil Samadov. <span data-key="copyright">Tüm hakları saklıdır.</span></p></div></div></div>`;
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
  initLanguage();
  initAppointmentModal();
  initDetailModal();
});