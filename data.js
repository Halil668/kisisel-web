// ============================================================
//  data.js — Sitenin Tek İçerik Kaynağı (Single Source of Truth)
//  Sadece bu dosyayı düzenleyerek tüm siteyi güncelleyebilirsin.
// ============================================================

const SITE_DATA = {

  // ─── KİŞİSEL BİLGİLER ───────────────────────────────────────
  personal: {
    name: "KHALIL SAMADOV",
    title: "Full-Stack Web Geliştirici & Eğitmen",
    tagline: "Temiz kod, güzel arayüzler, yapay zeka ve yazılım eğitimleri.",
    avatar: "assets/images/resim.jpg",   // kendi fotoğrafını buraya ekle
    email: "semedovxelil259@gmail.com",
    web3forms_key: "41c856f1-6f05-44e6-9732-6278487a4dd7",
    social: {
      github:   "https://github.com/Halil668",
      linkedin: "https://linkedin.com/in/kullaniciadın",
      twitter:  ""
    }
  },

  // ─── HAKKIMDA ────────────────────────────────────────────────
  about: {
    bio: "Merhaba! Ben bir web geliştirici ve eğitmenim. Kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum. Aynı zamanda yazılım ve yapay zeka eğitimleri veriyorum.",
    bio2: "Yeni teknolojileri yakından takip ediyor, öğrendiklerimi hem projelerimde hem de öğrencilerimle paylaşıyorum.",
    highlights: [
      { icon: "🚀", text: "3+ Yıl Deneyim" },
      { icon: "💼", text: "10+ Tamamlanan Proje" },
      { icon: "🤖", text: "Yapay Zeka Eğitmeni" },
      { icon: "📚", text: "100+ Öğrenci" }
    ]
  },

  // ─── YAZILIM DERSLERİ (YENİ) ─────────────────────────────────
  courses: [
    {
      id: 1,
      title: "Modern Web Geliştirme",
      description: "Sıfırdan ileri seviyeye HTML, CSS, JavaScript, React ve Node.js ile full-stack web geliştirme.",
      level: "Başlangıç - İleri",
      duration: "40 Saat",
      price: "Ücretsiz Başla",
      icon: "💻",
      color: "#e0e7ff",
      features: ["Canlı Dersler", "Proje Tabanlı", "Sertifika"]
    },
    {
      id: 2,
      title: "Frontend Ustalık",
      description: "Modern frontend teknolojileri: React, Next.js, Tailwind CSS, animasyonlar ve performans optimizasyonu.",
      level: "Orta - İleri",
      duration: "30 Saat",
      price: "Ücretsiz Başla",
      icon: "🎨",
      color: "#dbeafe",
      features: ["Uygulamalı", "Portfolyo Projeleri", "Mentorluk"]
    },
    {
      id: 3,
      title: "Backend & API Geliştirme",
      description: "Node.js, Express, MongoDB, PostgreSQL, RESTful API ve kimlik doğrulama.",
      level: "Orta",
      duration: "35 Saat",
      price: "Ücretsiz Başla",
      icon: "⚙️",
      color: "#d1fae5",
      features: ["Veritabanı", "Güvenlik", "Canlı Proje"]
    }
  ],

  // ─── YAPAY ZEKA EĞİTİMLERİ (YENİ) ───────────────────────────
  aiEducation: {
    title: "Yapay Zeka Eğitimleri",
    subtitle: "Geleceğin teknolojisini bugün öğrenin",
    description: "Yapay zeka ve makine öğrenmesi alanında uygulamalı eğitimler veriyorum. Gerçek projelerle öğrenin.",
    offerings: [
      {
        icon: "🧠",
        title: "Makine Öğrenmesine Giriş",
        description: "Temel algoritmalar, veri ön işleme, model eğitimi ve değerlendirme."
      },
      {
        icon: "🤖",
        title: "Derin Öğrenme",
        description: "Yapay sinir ağları, TensorFlow, Keras ile uygulamalı projeler."
      },
      {
        icon: "💬",
        title: "Doğal Dil İşleme",
        description: "Metin sınıflandırma, duygu analizi, chatbot geliştirme."
      },
      {
        icon: "🖼️",
        title: "Bilgisayarlı Görü",
        description: "Görüntü işleme, nesne tanıma, OpenCV ile uygulamalar."
      }
    ],
    ctaText: "Yapay Zeka Derslerine Katıl",
    ctaLink: "#contact"
  },

  // ─── PROJELER ────────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "E-Ticaret Platformu",
      description: "React ve Node.js ile geliştirilmiş, sepet, ödeme ve admin paneli içeren tam kapsamlı alışveriş sitesi.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "",
      color: "#e0e7ff",
      liveUrl: "https://proje.vercel.app",
      githubUrl: "https://github.com/Halil668",
      featured: true
    },
    {
      id: 2,
      title: "Hava Durumu Uygulaması",
      description: "OpenWeather API ile gerçek zamanlı hava verisi sunan, şehir arama özelliği olan responsive uygulama.",
      tags: ["JavaScript", "OpenWeather API", "CSS3"],
      image: "",
      color: "#dbeafe",
      liveUrl: "",
      githubUrl: "https://github.com/Halil668",
      featured: true
    },
    {
      id: 3,
      title: "Görev Yöneticisi",
      description: "Sürükle-bırak özellikli, localStorage ile veri saklayan minimalist bir Kanban uygulaması.",
      tags: ["Vue.js", "Drag & Drop", "LocalStorage"],
      image: "",
      color: "#d1fae5",
      liveUrl: "",
      githubUrl: "https://github.com/Halil668",
      featured: false
    },
    {
      id: 4,
      title: "Blog Platformu",
      description: "Markdown desteği, etiket sistemi ve yorum özelliği olan kişisel blog platformu.",
      tags: ["Next.js", "MDX", "Tailwind CSS"],
      image: "",
      color: "#fce7f3",
      liveUrl: "",
      githubUrl: "https://github.com/Halil668",
      featured: false
    }
  ],

  // ─── YETENEKLER ──────────────────────────────────────────────
  skills: [
    {
      category: "Frontend",
      icon: "💻",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express.js", "REST API", "GraphQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Araçlar & DevOps",
      icon: "🛠️",
      items: ["Git & GitHub", "VS Code", "Figma", "Vercel", "Docker", "Linux"]
    },
    {
      category: "Yapay Zeka & Veri Bilimi",
      icon: "🧠",
      items: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "NLP", "Veri Analizi"]
    }
  ]
};