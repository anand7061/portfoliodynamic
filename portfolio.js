import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Mail, Code, Palette, Server, Zap, Pencil, Atom, Brackets, ExternalLink, Monitor } from 'lucide-react';

// Define the main App component
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        menuItems={menuItems}
        scrollToSection={scrollToSection}
      />
      <main>
        <Home scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen, menuItems, scrollToSection }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-70 backdrop-blur-sm shadow-lg p-4 md:p-6"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-indigo-400">
          My Portfolio
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-indigo-400 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-gray-700 p-4 rounded-lg shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left p-2 rounded-md hover:bg-gray-600 transition-colors duration-200 text-lg font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Home Section
const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="container mx-auto px-6 py-24 md:py-36 text-center min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-indigo-500">
          <img
            src="https://placehold.co/400x400/1f2937/d1d5db?text=Your+Photo"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
        >
          Hello, I'm <span className="text-indigo-400">John Doe</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl text-gray-400 mb-8"
        >
          A passionate Frontend Developer specializing in React and modern web technologies.
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={() => scrollToSection('contact')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a dedicated Frontend Developer with a knack for creating beautiful,
            responsive, and user-friendly web applications. With a strong background in
            Computer Science and a passion for continuous learning, I thrive on
            turning complex problems into elegant solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey began with a curiosity for how websites work, which quickly
            evolved into a full-fledged career. I enjoy the entire development process,
            from ideation and wireframing to writing clean, maintainable code. When
            I'm not coding, you can find me hiking or experimenting with new recipes.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillsData = [
    { name: 'React', icon: Atom },
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Brackets },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'HTML5', icon: Code },
    { name: 'CSS3', icon: Palette },
    { name: 'Node.js', icon: Server },
    { name: 'Vite', icon: Zap },
    { name: 'Figma', icon: Pencil },
  ];

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          My Skills
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-5xl mx-auto"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300"
              variants={skillVariants}
            >
              <skill.icon className="w-12 h-12 text-indigo-400 mb-4" />
              <p className="text-lg font-medium text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projectsData = [
    {
      name: 'Project One',
      description: 'A responsive e-commerce platform built with React and Tailwind CSS. It features a modern design and a seamless user experience.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Project Two',
      description: 'A real-time chat application using Node.js and WebSockets. It allows users to join different rooms and communicate instantly.',
      technologies: ['React', 'Node.js', 'WebSockets'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Project Three',
      description: 'A personal blog site with a custom CMS. It is built with a serverless architecture and uses TypeScript for better code quality.',
      technologies: ['React', 'TypeScript', 'Serverless'],
      githubLink: '#',
      liveLink: '#',
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600 text-xs font-semibold px-3 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 font-medium"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 font-medium"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just show a success message.
    setStatus('Message sent successfully! (This is a mock submission)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Contact Me
        </h2>
        <div className="max-w-xl mx-auto bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 outline-none transition-colors duration-300"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition-colors duration-300"
            >
              Send Message
            </motion.button>
            {status && (
              <p className="mt-4 text-center text-green-400">{status}</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:example@example.com"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default App;
