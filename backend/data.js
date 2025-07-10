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
    title: "Sistem Management Sewa Alat Camping",
    description: "Project ini untuk membantu dalam sistem management Sewa Alat Camping atau Outdoor ",
    image: "/images/fp1.png",
    tech: ["C++"],
    link: "https://github.com/Aryaa245/Sistem-Management-Peminjaman-Alat-Camping",
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
