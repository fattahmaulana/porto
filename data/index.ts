import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "I am Maulana Abdul Fattah, a Bachelor's student in Informatics Engineering, continuously learning and developing skills in technology, programming, and design. I have strong personal skills in teamwork, time management, creativity, and responsibility.",
    title2: "Education",
    description2: "2022 - Present \u00A0\u00A0 Stikubank University, Semarang",
    description3: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Informatics Enginnering",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Technical Skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

 
] as const;

export const projects = [
  {
    id: 1,
    title: "Semarang City FLS3N Portal",
    des: "Web-based portal for Semarang City FLS3N competition submissions, participant management, and automated jury scoring evaluation.",
    img: "/1-FLS3N.png",
    iconLists: ["/php.svg", "/mysql.svg", "/laravel.svg"],
    link: "https://www.behance.net/gallery/226934973/fls3n-website",
    sourceCode: "https://www.behance.net/gallery/226934973/fls3n-website",
  },
  {
    id: 2,
    title: "Student Graduation Portal & Admin Control",
    des: "Web-based graduation announcement portal for multiple high schools with secure student ID verification and real-time status publishing.",
    img: "/2-KELULUSAN.png",
    iconLists: ["/php.svg", "/mysql.svg", "/laravel.svg"],
    link: "https://www.behance.net/gallery/222957507/Website-Kelulusan",
    sourceCode: "https://www.behance.net/gallery/222957507/Website-Kelulusan",
  },
  {
    id: 3,
    title: "NutriScan AI - Nutrition Tracker App",
    des: "Flutter mobile app leveraging AI camera scanning to analyze food nutrition, calculate calories, and provide personalized diet plans.",
    img: "/3-NutriScan.png",
    iconLists: ["/flutter.svg", "/app.svg"],
    link: "https://github.com/fattahmaulana/NutriScan-AI",
    sourceCode: "https://github.com/fattahmaulana/NutriScan-AI",
  },
  {
    id: 4,
    title: "Smart Attendance System (QR & Geolocation)",
    des: "Enterprise full-stack attendance app with dynamic auto-refreshing QR codes, JWT security, and 10-meter Haversine geolocation validation.",
    img: "/4-Absensi.png",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/fattahmaulana/smart-attendance-app",
    sourceCode: "https://github.com/fattahmaulana/smart-attendance-app",
  },
  {
    id: 5,
    title: "CVBuilder AI - Career Ecosystem Platform",
    des: "Modern career platform featuring Harvard ATS CV generator, Gemini AI optimization, real-time job directory, and application tracker.",
    img: "/5-CVBuilder AI.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://cv-builder-bay-omega.vercel.app/",
    sourceCode: "https://cv-builder-bay-omega.vercel.app/",
  },
  {
    id: 6,
    title: "Graphic Design & Creative Portfolio",
    des: "A curated showcase of graphic design works, creative branding, visual identity, and illustration projects on Behance.",
    img: "/6-Behance.png",
    iconLists: ["/illustrator.svg", "/photoshop.svg", "/behance.svg"],
    link: "https://www.behance.net/fattahmaulana",
    sourceCode: "https://www.behance.net/fattahmaulana",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Photoshop",
    img: "/photoshop.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Illustrator",
    img: "/illustrator.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Laravel",
    img: "/laravel.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "MySQL",
    img: "/mysql.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Three.js",
    img: "/three.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "Next.js",
    img: "/nextjs.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "Blender",
    img: "/blender.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "PHP",
    img: "/php.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "Java",
    img: "/java.svg",
    nameImg: "/dockerName.svg",
  },
] as const;


export const socialMedia = [
  {
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/fattahmaulana_",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/maulanaabdulfattah",
  },
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/fattahmaulana",
  },
  {
    name: "Behance",
    img: "/behance.svg",
    link: "https://www.behance.net/fattahmaulana",
  },
  
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
