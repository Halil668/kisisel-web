// ============================================================
//  data.js — Sitenin Tek İçerik Kaynağı (Single Source of Truth)
//  Sadece bu dosyayı düzenleyerek tüm siteyi güncelleyebilirsin.
// ============================================================

const SITE_DATA = {

  // ─── KİŞİSEL BİLGİLER ───────────────────────────────────────
  personal: {
    name: "KHALIL SAMADOV",
    title: "Full-Stack Web Geliştirici",
    tagline: "Temiz kod, güzel arayüzler ve kullanıcı odaklı deneyimler.",
    avatar: "assets/images/resim.jpg",   // kendi fotoğrafını buraya ekle
    email: "semedovxelil259@gmail.com",               // ← değiştir
    web3forms_key: "41c856f1-6f05-44e6-9732-6278487a4dd7",  // ← web3forms.com'dan al
    social: {
      github:   "https://github.com/Halil668",   // ← değiştir
      linkedin: "https://linkedin.com/in/kullaniciadın", // ← değiştir
      twitter:  ""   // boş bırakırsan ikon gösterilmez
    }
  },

  // ─── HAKKIMDA ────────────────────────────────────────────────
  about: {
    bio: "Merhaba! Ben bir web geliştiriciyim. Kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum. Hem frontend hem de backend tarafında çalışarak tam kapsamlı projeler üretiyorum.",
    bio2: "Yeni teknolojileri yakından takip ediyor, öğrendiklerimi açık kaynak projelerle toplulukla paylaşmaya çalışıyorum.",
    highlights: [
      { icon: "🚀", text: "3+ Yıl Deneyim" },
      { icon: "💼", text: "10+ Tamamlanan Proje" },
      { icon: "🌍", text: "Açık Kaynak Katkıcısı" },
      { icon: "📚", text: "Sürekli Öğrenme" }
    ]
  },

  // ─── PROJELER ────────────────────────────────────────────────
  // Yeni proje eklemek için bu diziye yeni bir obje yapıştır.
  projects: [
    {
      id: 1,
      title: "E-Ticaret Platformu",
      description: "React ve Node.js ile geliştirilmiş, sepet, ödeme ve admin paneli içeren tam kapsamlı alışveriş sitesi.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "",           // "assets/images/projects/ecommerce.jpg"
      color: "#e0e7ff",    // kart arka plan rengi (isteğe bağlı)
      liveUrl: "https://proje.vercel.app",
      githubUrl: "https://github.com/sen/proje",
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
      githubUrl: "https://github.com/sen/weather",
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
      githubUrl: "https://github.com/sen/taskmanager",
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
      githubUrl: "https://github.com/sen/blog",
      featured: false
    }
  ],

  // ─── YETENEKLer ──────────────────────────────────────────────
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
    }
  ]
};
