import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, ExternalLink } from "lucide-react";

// Import personal photo (Ensure path is correct relative to this file)
import pr1 from "../assets/pr1.png";

// Import 1 preview image for each project
import jewelry1 from "../assets/Jewelry 1.png";
import game1 from "../assets/Online Game 1.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-blue-500/30"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* VIBRANT STRIPED BACKGROUND (Mika Pikazo Inspired) */}
      <div className="fixed inset-0 z-[-1] w-full h-full bg-black">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-black opacity-80"></div>
        
        {/* Angled Colorful Stripes simulating brush strokes/digital art */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
          <defs>
            <pattern id="stripes" patternUnits="userSpaceOnUse" width="300" height="300" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="300" stroke="#3b82f6" strokeWidth="15"/> {/* Blue */}
              <line x1="40" y1="0" x2="40" y2="300" stroke="#ec4899" strokeWidth="15"/> {/* Pink */}
              <line x1="80" y1="0" x2="80" y2="300" stroke="#22c55e" strokeWidth="15"/> {/* Green */}
              <line x1="120" y1="0" x2="120" y2="300" stroke="#f59e0b" strokeWidth="15"/> {/* Orange */}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stripes)" />
        </svg>
        
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,#000_100%)] opacity-90"></div>
      </div>

      <div className="px-6 md:px-20 pb-20 relative z-10">
        
        {/* 1. HERO SECTION WITH PERSONAL PHOTO */}
        <motion.section 
          variants={itemVariants}
          className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto"
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6 text-sm font-medium tracking-wide backdrop-blur-sm">
              AVAILABLE FOR INTERNSHIP • JAN 2027
            </motion.span>
            
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.9]">
              <span className="block text-white">Pawares</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-pink-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                Rueagthong
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light tracking-tight">
              Computer Science Student & <br/><span className="font-semibold text-white">Full-Stack Developer</span>
            </h2>
            
            <p className="max-w-3xl text-gray-400 leading-relaxed mb-10 text-lg mx-auto md:mx-0 bg-black/30 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
              นักศึกษาสาขา Computer Science ที่มีความสนใจด้าน Full-Stack Development โดยเน้นการพัฒนา Backend 
              และการวางโครงสร้างระบบ มีประสบการณ์พัฒนา Web Application ด้วยตนเอง สนใจเรียนรู้การพัฒนา Web Application ในการทำงานจริง
            </p>
            
            {/* Contact Links */}
            <div className="flex gap-5 justify-center md:justify-start">
              {[
                { icon: FaGithub, url: "https://github.com/PW-R", label: "GitHub" },
                { icon: FaLinkedin, url: "https://www.linkedin.com/in/pawares-ruangthong-0bb55a429/", label: "LinkedIn" },
                { icon: Mail, url: "mailto:put_25_17@hotmail.com", label: "Email" },
                { icon: Phone, url: "tel:0808107819", label: "Phone" }
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative p-4 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  aria-label={link.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <link.icon size={24} className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Personal Photo Section - Adjusted for transparency */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-auto flex justify-center shrink-0 relative mt-16 md:mt-0"
          >
            {/* Decorative Glow Rings */}
            <div className="absolute inset-0 -translate-y-10 scale-110 opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-blue-500/30 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-pink-500/20 animate-pulse delay-700"></div>
            </div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/50 bg-gradient-to-b from-blue-900/20 to-transparent backdrop-blur-sm group">
              <img 
                src={pr1} 
                alt="Pawares Rueagthong" 
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Edge Light */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"></div>
            </div>
          </motion.div>
        </motion.section>

        {/* 2. SKILLS SECTION */}
        <motion.section variants={itemVariants} className="max-w-6xl mx-auto py-24">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800">01.</span>
            <h3 className="text-4xl font-bold tracking-tight text-white">Tech Stack</h3>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", tools: ["React", "Vite", "Tailwind CSS", "HTML/CSS", "JS", "TS"] },
              { title: "Backend", tools: ["Node.js", "Express.js", "ASP.NET", "REST API", "WebSocket"] },
              { title: "Database", tools: ["MongoDB", "MySQL", "Database Design", "Firebase"] },
              { title: "Tools & DevOps", tools: ["Git/GitHub", "Docker", "Cloudinary", "Figma", "VS Code"] }
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="p-8 rounded-2xl bg-gray-900/60 border border-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/30 group"
              >
                <h4 className="text-2xl text-blue-400 font-semibold mb-6 tracking-tight">{skill.title}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {skill.tools.map((tool, t) => (
                    <span key={t} className="px-3 py-1 text-sm bg-white/5 border border-white/10 text-gray-300 rounded-full group-hover:bg-blue-500/10 group-hover:text-blue-200 transition-colors duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. PROJECTS PREVIEW */}
        <motion.section variants={itemVariants} className="max-w-6xl mx-auto py-24">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800">02.</span>
            <h3 className="text-4xl font-bold tracking-tight text-white">Featured Projects</h3>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                id: "jewelry", 
                name: "Jewelry Management & Chat", 
                desc: "E-commerce platform with real-time WebSocket chat and Admin RBAC.",
                image: jewelry1,
                tags: ["React", "Node", "MongoDB", "WebSocket"]
              },
              { 
                id: "game-ecom", 
                name: "Online Game E-Commerce", 
                desc: "Secure platform for game asset transactions with comprehensive Admin Dashboard.",
                image: game1,
                tags: ["ASP.NET", "MySQL", "Docker"]
              }
            ].map((project, i) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="group flex flex-col bg-gray-900/60 border border-white/5 rounded-3xl overflow-hidden hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-950/30 backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative w-full h-64 overflow-hidden bg-black border-b border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-4 left-6 right-6 flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-blue-200">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-3xl font-bold mb-4 tracking-tight text-white group-hover:text-pink-300 transition-colors duration-300">{project.name}</h4>
                  <p className="text-gray-400 mb-8 leading-relaxed flex-grow">{project.desc}</p>
                  
                  <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2.5 text-blue-400 font-medium hover:text-pink-400 transition-colors w-max group/link">
                    View Deep Dive 
                    <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"/>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. FOOTER / CONTACT */}
        <motion.footer variants={itemVariants} className="max-w-6xl mx-auto mt-20 pt-12 border-t border-white/5 text-center">
          <p className="text-gray-500">© 2024 Pawares Rueagthong. Built with React, Tailwind, and a whole lot of caffeine.</p>
          <a href="mailto:put_25_17@hotmail.com" className="text-blue-400 hover:text-pink-400 text-lg mt-2 inline-block font-medium">put_25_17@hotmail.com</a>
        </motion.footer>

      </div>
    </motion.div>
  );
}