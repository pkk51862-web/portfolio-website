import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Import Jewelry images (Make sure filenames match exactly in your src/asset folder)
import jewelry1 from "../assets/Jewelry 1.png"; // Change extension (.png/.jpg) if needed
import jewelry2 from "../assets/Jewelry 2.png";
import jewelry3 from "../assets/Jewelry 3.png";

// Import Online Game images
import game1 from "../assets/Online Game 1.png"; // Change extension (.png/.jpg) if needed
import game2 from "../assets/Online Game 2.png";
import game3 from "../assets/Online Game 3.png";
import game4 from "../assets/Online Game 4.png";
import game5 from "../assets/Online Game 5.png";

// Project Data with respective image arrays
const projectsData = {
  jewelry: {
    title: "Jewelry Product Management & Customer Chat",
    tech: ["React", "Vite", "Node.js", "WebSocket", "MongoDB", "MongoDB Atlas", "Render"],
    live: "https://pw-r.github.io/Jewery/",
    github: "https://github.com/PW-R/Jewery",
    images: [jewelry1, jewelry2, jewelry3],
    features: [
      "พัฒนาหน้าเว็บไซต์สำหรับให้ผู้ใช้งานดูข้อมูลและสินค้าที่มีอยู่ภายในร้าน",
      "พัฒนาระบบ Real-time Chat ด้วย WebSocket เพื่อให้ลูกค้าสามารถติดต่อกับร้านค้าผ่านเว็บไซต์",
      "พัฒนาระบบ Backend สำหรับจัดการข้อมูลสินค้าและข้อมูลภายในระบบ",
      "ออกแบบระบบ Role-Based Access Control สำหรับ Super Admin และ Admin เพื่อกำหนดสิทธิ์การเข้าถึงฟังก์ชันต่าง ๆ",
      "ออกแบบและจัดการ Database ด้วย MongoDB และ MongoDB Atlas"
    ]
  },
  "game-ecom": {
    title: "Online Game E-Commerce",
    tech: ["ASP.NET / .NET Framework", "MySQL", "Docker"],
    live: null,
    github: "https://github.com/pkk51862-web/Topupweb",
    images: [game1, game2, game3, game4, game5],
    features: [
      "พัฒนาระบบ Login สำหรับผู้ใช้งานและระบบซื้อสินค้าเกมผ่านเว็บไซต์",
      "พัฒนา Backend และระบบ Admin สำหรับจัดการข้อมูลสินค้าและบัญชีผู้ใช้งาน",
      "พัฒนา Admin Dashboard สำหรับเพิ่มและแก้ไขข้อมูลสินค้า รวมถึงจัดการข้อมูล Account",
      "พัฒนาระบบ Statistics สำหรับวิเคราะห์การเข้าชมสินค้า การซื้อสินค้า และกำไรของเว็บไซต์",
      "ออกแบบและจัดการ Database ด้วย MySQL และใช้งาน Database ผ่าน Docker"
    ]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Project() {
  const { id } = useParams();
  const project = projectsData[id];

  // State for constant auto slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project || !project.images || project.images.length === 0) return;

    // Change slide every 3.5 seconds automatically
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
        <h1 className="text-3xl mb-4">Project Not Found</h1>
        <Link to="/" className="text-green-400 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 md:px-20 py-10">
      
      {/* Back Button */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-6xl mx-auto mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Hero Banner with Constant Auto-Slideshow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
        className="max-w-6xl mx-auto h-64 md:h-[450px] bg-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mb-16 overflow-hidden relative group"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} slide ${currentImageIndex + 1}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>

        {/* Slide Indicators (Dots at the bottom) */}
        <div className="absolute bottom-4 z-10 flex gap-2">
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === idx ? "w-6 bg-green-400" : "w-2 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Glow effect behind banner */}
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none"></div>
      </motion.div>

      {/* Split Content Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-20">
        
        {/* Left Column: Sticky Tech Stack & Links */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} 
          className="md:col-span-1 md:sticky top-24 h-max"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{project.title}</h1>
          
          <div className="flex flex-col gap-4 mb-10">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-blue-500 px-5 py-3 rounded-lg text-blue-400 hover:text-blue-300 transition-all duration-300">
                <ExternalLink size={20} />
                <span>Visit Live Site</span>
              </a>
            )}
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-green-500 px-5 py-3 rounded-lg text-green-400 hover:text-green-300 transition-all duration-300">
              <FaGithub size={20} />
              <span>View Source Code</span>
            </a>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-300 border-b border-gray-800 pb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-black border border-green-500/50 text-green-400 rounded-full shadow-[0_0_8px_rgba(0,255,102,0.1)]">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Scrolling Details */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} 
          className="md:col-span-2 space-y-8"
        >
          <h2 className="text-2xl font-semibold text-blue-400">Key Features & Responsibilities</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <ul className="space-y-6">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-4 text-gray-300 leading-relaxed text-lg">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}