import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden px-6 md:px-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto pt-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Pawares <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Rueagthong</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
          Computer Science Student & <span className="text-white">Full-Stack Developer</span>
        </h2>
        <p className="max-w-2xl text-gray-300 leading-relaxed mb-10 text-lg">
          นักศึกษาสาขา Computer Science ที่มีความสนใจด้าน Full-Stack Development โดยเน้นการพัฒนา Backend 
          และการวางโครงสร้างระบบ มีประสบการณ์พัฒนา Web Application ตั้งแต่ Frontend, Backend, Database 
          และระบบ Authentication ด้วยตนเอง สนใจเรียนรู้การพัฒนา Web Application ในการทำงานจริง
        </p>
        
        {/* Contact Links */}
        <div className="flex gap-6">
          <a href="https://github.com/PKlated" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/pawares-ruangthong" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:put_25_17@hotmail.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
            <Mail size={28} />
          </a>
          <a href="tel:0808107819" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
            <Phone size={28} />
          </a>
        </div>
      </motion.section>

      {/* 2. SKILLS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
        className="max-w-5xl mx-auto py-20"
      >
        <h3 className="text-3xl font-semibold mb-10 border-b border-gray-800 pb-4"><span className="text-blue-500">01.</span> Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Frontend", tools: "React, Vite, Tailwind CSS, HTML/CSS, JS, TypeScript (Basic)" },
            { title: "Backend", tools: "Node.js, Express.js, ASP.NET, REST API, JWT, RBAC, WebSocket" },
            { title: "Database", tools: "MongoDB, MySQL, MongoDB Atlas, Design & Relationships" },
            { title: "Tools", tools: "Git, GitHub, Docker, Cloudinary, Figma, VS Code" }
          ].map((skill, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 group">
              <h4 className="text-xl text-blue-400 font-medium mb-3">{skill.title}</h4>
              <p className="text-gray-300 group-hover:scale-[1.02] transition-transform duration-300">{skill.tools}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. PROJECTS PREVIEW */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
        className="max-w-5xl mx-auto py-20"
      >
        <h3 className="text-3xl font-semibold mb-10 border-b border-gray-800 pb-4"><span className="text-blue-500">02.</span> Projects</h3>
        <div className="flex flex-col gap-10">
          {[
            { id: "jewelry", name: "Jewelry Product Management & Chat", desc: "Real-time Chat with WebSocket & Role-Based Access Control." },
            { id: "game-ecom", name: "Online Game E-Commerce", desc: "ASP.NET Backend with Admin Dashboard & Statistics via Docker MySQL." }
          ].map((project) => (
            <div key={project.id} className="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-500">
              <div className="md:w-1/2 bg-gray-900 min-h-[250px] flex items-center justify-center border-r border-white/10">
                <span className="text-gray-600">Project Mockup Image</span>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-3">{project.name}</h4>
                <p className="text-gray-400 mb-8">{project.desc}</p>
                <Link to={`/project/${project.id}`} className="text-blue-400 flex items-center gap-2 hover:text-green-400 transition-colors w-max group">
                  View Details <span className="group-hover:translate-x-2 transition-transform">-&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. TIMELINE & EDUCATION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
        className="max-w-3xl mx-auto py-20"
      >
        <h3 className="text-3xl font-semibold mb-12 border-b border-gray-800 pb-4"><span className="text-blue-500">03.</span> Timeline</h3>
        <div className="relative border-l-2 border-blue-900/50 pl-8 space-y-12 ml-4">
          
          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-black border-2 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            <h4 className="text-xl font-bold text-white">Internship Period</h4>
            <p className="text-blue-400 font-mono text-sm mt-1 mb-2">11 มกราคม - 30 เมษายน 2570</p>
            <p className="text-gray-400">Preparing for full-stack developer internship.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-black border-2 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            <h4 className="text-xl font-bold text-white">Sripatum University</h4>
            <p className="text-blue-400 font-mono text-sm mt-1 mb-2">Expected Graduation: 2027</p>
            <p className="text-gray-400">B.Sc. Computer Science • CGPA: 3.74</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-black border-2 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            <h4 className="text-xl font-bold text-white">Certifications</h4>
            <ul className="text-gray-400 mt-2 space-y-1 list-disc list-inside">
              <li>Huawei HCCDA AI Developer Certificate</li>
              <li>Microsoft Azure Fundamentals</li>
            </ul>
          </div>

        </div>
      </motion.section>

    </div>
  );
}