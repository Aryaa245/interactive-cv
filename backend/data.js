const educationHistory = [
  {
    id: 1,
    period: "2023 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "S1 Teknik Informatika",
  },
  {
    id: 2,
    period: "2020 - 2023",
    institution: "SMA Negeri 1 Komodo",
    major: "MIPA",
  },
];
const skills = [
  {
    name: "Vue.js",
    level: "LanjuMahir",
  },

  {
    name: "JavaScript",
    level: "Mahir",
  },

  {
    name: "Tailwind CSS",
    level: "Mahir",
  },
  {
    name: "Node.js",
    level: "Menengah",
  },
  {
    name: "Express.js",
    level: "Menengah",
  },
  {
    name: "PostgreSQL",
    level: "Menengah",
  },
  {
    name: "Git & GitHub",
    level: "Mahir",
  },
  {
    name: "HTML5 & CSS3",
    level: "Mahir",
  },
];
const projects = [
  {
    title: "Portfolio Website",
    description: "Website untuk menampilkan profil, skill, dan proyek pribadi.",
    image: "/images/portfolio.png",
    tech: ["Vue.js", "Tailwind CSS", "JavaScript"],
    link: "https://yourportfolio.vercel.app",
  },
  {
    title: "Toko Online",
    description: "Website e-commerce sederhana dengan Vue dan API backend.",
    image: "/images/shop.png",
    tech: ["Vue", "PHP", "MySQL"],
    link: "https://tokoku.netlify.app",
  },
];
module.exports = { educationHistory, skills, projects };
