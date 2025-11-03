import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Moon, Sun, Menu, X } from 'lucide-react';
import Lenis from 'lenis';
import grwmImage from './assets/images/grwm.png';
import login from './assets/images/login.png';
import game from './assets/images/game.png';
import blog from './assets/images/blog.png';
import nj from './assets/images/nj.png';
import bird from './assets/images/bird.png';
import Text from './assets/images/Text.png';
import RE from './assets/images/RE.png';
import pizza from './assets/images/pizza.png';
import { InteractiveHoverButton } from "./component/button.jsx";
import Contact from './component/contact';
import Skills from './component/Skills';
import Resume from './component/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleImageError = (e) => {
    console.error('Error loading image:', e);
    setImageError(true);
    e.target.src = 'https://placehold.co/400x400/png';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const navigationItems = [
    { name: 'Home', id: 'home' },
    { name: 'Featured Projects', id: 'featured-projects' },
    { name: 'Other Projects', id: 'other-projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  // Featured Projects
  const featuredProjects = [
    {
      title: "Cosmos Signal Nexus",
      description: "An advanced signal processing and data analysis platform for space and astronomical data. Includes visualization tools, real-time data processing, and machine learning capabilities.",
      image: "https://i.imgur.com/cosmos-signal.jpg",
      tags: ["Python", "Data Science", "Signal Processing"],
      link: "https://github.com/curiouscoder-cmd/cosmos-signal-nexus",
      featured: true
    },
    {
      title: "HackMate",
      description: "A collaborative platform for hackathons that connects developers, designers, and innovators. Features team formation, project management, and real-time collaboration tools.",
      image: "https://i.imgur.com/hackmate.jpg",
      tags: ["React", "Collaboration", "Hackathon"],
      link: "https://github.com/curiouscoder-cmd/HackMate_final",
      featured: true
    },
    {
      title: "MindMend",
      description: "A mental health and wellness application designed to support users in their journey towards better mental health. Features include mood tracking, meditation guides, and personalized wellness recommendations.",
      image: "https://i.imgur.com/mindmend.jpg",
      tags: ["React", "Mental Health", "Wellness"],
      link: "https://github.com/curiouscoder-cmd/MindMend",
      featured: true
    }
  ];

  // Other Projects
  const otherProjects = [
    {
      title: "Rishabh Electronics",
      description: "A modern, responsive website for RISHABH ELECTRONICS, a trusted electronics and furniture store located in Baloda Bazar, Raipur, Chhattisgarh. Built with Next.js 14 and featuring beautiful 3D animations, modern UI design, and comprehensive business showcase.",
      image: RE,
      tags: ["React", "javascript", "next", "typescript"],
      link: "https://rishabhelectronics.curiouscoder.live/"
    },
    {
      title: "Pizza Dashboard",
      description: "The Pizza Dashboard is a full-featured management system designed specifically for pizza restaurants and delivery services. This application streamlines operations by providing an intuitive interface for managing customers, tracking orders, and scheduling deliveries.",
      image: pizza,
      tags: ["React", "javascript", "next"],
      link: "https://pizza.curiouscoder.live/dashboard/activity"
    },
    {
      title: "DRIFT RUN",
      description: "Adventerous car rougelike  game made using unity and C# ",
      image: game,
      tags: ["unity", "C#"],
      link: "https://curiouscoder.itch.io/driftrun-rougelike"
    },
    {
      title: "Get Ready With Me",
      description: "The one stop place to get a customised Drip - A fashion design platform",
      image: grwmImage,
      tags: ["HTML", "CSS", "javascript"],
      link: "https://atharvgit2005.github.io/DIY-fashion-design/"
    },
    {
      title: "Basic login page",
      description: "Nothing fancy, just a ridiculously simple login page made with HTML and CSS—because even hackers need a place to log in! 😆😅",
      image: login,
      tags: ["HTML", "javascript", "CSS"],
      link: "https://tubular-fenglisu-c83842.netlify.app/"
    },
    {
      title: "Blog Website",
      description: "A blog website :a one stop soluton to all blogs posts :made with react javascript and tailwind CSS",
      image: blog,
      tags: ["React", "javascript", "tailwind CSS"],
      link: "https://blog.curiouscoder.live/"
    },
    {
      title: "Flappy Bird",
      description: "A simple Flappy Bird game created using React and CSS, featuring smooth animations, dynamic obstacles, and score tracking. 🚀 Check it out!",
      image: bird,
      tags: ["React", "javascript", "CSS"],
      link: "https://flappybirdgame2025.netlify.app/"
    },
    {
      title: "Text Formatter",
      description: "A simple website created using React and js, enable to format text  Check it out!",
      image: Text,
      tags: ["React", "javascript", "BootStrap"],
      link: "https://nityavitereactpractice.netlify.app/"
    },
    {
      title: "VoxAssist",
      description: "An intelligent voice assistant application that leverages natural language processing and AI to provide smart voice-based interactions and assistance.",
      image: "https://placehold.co/400x300/ec4899/ffffff?text=VoxAssist",
      tags: ["AI", "Voice", "NLP"],
      link: "https://github.com/GreenHacker420/VoxAssist"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/80 border-b border-gray-700/50' 
          : 'bg-white/80 border-b border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold">Nitya's Portfolio</span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center relative overflow-hidden ${darkMode ? 'bg-gray-800' : ''}`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80'}`}></div>
        
        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Cube */}
          <div className={`absolute top-20 left-20 w-16 h-16 animate-float-slow ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="cube">
              <div className={`cube-face front ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
              <div className={`cube-face back ${darkMode ? 'bg-blue-600' : 'bg-blue-700'}`}></div>
              <div className={`cube-face right ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <div className={`cube-face left ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <div className={`cube-face top ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
              <div className={`cube-face bottom ${darkMode ? 'bg-blue-600' : 'bg-blue-700'}`}></div>
            </div>
          </div>

          {/* Pyramid */}
          <div className={`absolute top-40 right-32 w-16 h-16 animate-float-slow animation-delay-2000 ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="pyramid">
              <div className={`pyramid-face front ${darkMode ? 'border-b-purple-400' : 'border-b-purple-500'}`}></div>
              <div className={`pyramid-face right ${darkMode ? 'border-b-purple-500' : 'border-b-purple-600'}`}></div>
              <div className={`pyramid-face left ${darkMode ? 'border-b-purple-500' : 'border-b-purple-600'}`}></div>
              <div className={`pyramid-face back ${darkMode ? 'border-b-purple-600' : 'border-b-purple-700'}`}></div>
            </div>
          </div>

          {/* Floating circles */}
          <div className={`absolute bottom-32 left-1/4 w-20 h-20 rounded-full animate-float-slow animation-delay-1000 ${darkMode ? 'bg-pink-500/20' : 'bg-pink-500/40'} backdrop-blur-sm`}></div>
          <div className={`absolute top-1/4 right-1/4 w-12 h-12 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-yellow-500/20' : 'bg-yellow-500/40'} backdrop-blur-sm`}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>
        
        {/* Content */}
        <div className={`relative w-full px-4 pt-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transform hover:scale-105 transition-transform duration-300 mx-auto md:mx-0">
                <img 
                  src={imageError ? 'https://placehold.co/400x400/png' : nj}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  loading="eager"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
                  NITYA JAIN
                </h1>
                <h2 className="text-2xl md:text-3xl font-light italic mb-6 font-poppins">
                  Passionate programmer, Aspiring Full Stack Developer and Game developer
                </h2>
                <p className="text-xl md:text-2xl mb-8 font-poppins">
                  Passionate programmer who loves building websites, apps, and games. Aspiring full-stack and game developer, eager to create innovative and user-friendly projects.
                </p>
              </div>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://github.com/curiouscoder-cmd" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/nitya-jain-007908316/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
              </a>
              <a href="mailto:nitya@curiouscoder.live">
                <Mail className="w-6 h-6 hover:text-blue-500 transition-colors" />
              </a>
            </div>
            <div className="mt-16 flex justify-center">
              <a 
                href="#projects" 
                className="cursor-pointer hover:text-blue-500 transition-colors"
                aria-label="Scroll to Projects"
              >
                <ChevronDown className="w-8 h-8 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={`min-h-screen flex items-center relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="featured-projects">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80'}`}></div>

        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Shapes */}
          <div className={`absolute top-20 left-20 w-16 h-16 animate-float-slow ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="cube">
              <div className={`cube-face front ${darkMode ? 'bg-indigo-400' : 'bg-indigo-500'}`}></div>
              <div className={`cube-face back ${darkMode ? 'bg-indigo-600' : 'bg-indigo-700'}`}></div>
              <div className={`cube-face right ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
              <div className={`cube-face left ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
              <div className={`cube-face top ${darkMode ? 'bg-indigo-400' : 'bg-indigo-500'}`}></div>
              <div className={`cube-face bottom ${darkMode ? 'bg-indigo-600' : 'bg-indigo-700'}`}></div>
            </div>
          </div>

          {/* Floating circles */}
          <div className={`absolute bottom-32 right-1/4 w-20 h-20 rounded-full animate-float-slow animation-delay-1000 ${darkMode ? 'bg-purple-500/20' : 'bg-purple-500/40'} backdrop-blur-sm`}></div>
          <div className={`absolute top-1/3 right-20 w-12 h-12 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-pink-500/20' : 'bg-pink-500/40'} backdrop-blur-sm`}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Featured Projects</h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins leading-relaxed`}>
              Showcase of my most significant and impactful projects that demonstrate my skills and expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`premium-card rounded-3xl overflow-hidden transform transition-all duration-500 relative backdrop-blur-md border cursor-pointer group ${
                  darkMode
                    ? 'bg-gray-800/60 border-gray-700/50 hover:bg-gray-700/80'
                    : 'bg-white/70 border-white/60 hover:bg-white/90'
                }`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 250, 252, 0.9) 100%)',
                  boxShadow: darkMode
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute top-6 right-6 z-10">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    ⭐ FEATURED
                  </span>
                </div>
                <div className="relative overflow-hidden h-56">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>{project.title}</h3>
                  <p className={`mb-6 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins`}>{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode ? 'bg-gray-700/80 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-btn inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    View Project <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className={`min-h-screen flex items-center relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`} id="other-projects">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-cyan-50/80 via-blue-50/80 to-indigo-50/80'}`}></div>

        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Shapes */}
          <div className={`absolute top-32 right-32 w-14 h-14 animate-float-slow animation-delay-1000 ${darkMode ? 'opacity-20' : 'opacity-40'}`}>
            <div className="pyramid">
              <div className={`pyramid-face front ${darkMode ? 'border-b-cyan-400' : 'border-b-cyan-500'}`}></div>
              <div className={`pyramid-face right ${darkMode ? 'border-b-cyan-500' : 'border-b-cyan-600'}`}></div>
              <div className={`pyramid-face left ${darkMode ? 'border-b-cyan-500' : 'border-b-cyan-600'}`}></div>
              <div className={`pyramid-face back ${darkMode ? 'border-b-cyan-600' : 'border-b-cyan-700'}`}></div>
            </div>
          </div>

          {/* Floating circles */}
          <div className={`absolute bottom-40 left-20 w-18 h-18 rounded-full animate-float-slow animation-delay-2000 ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-500/40'} backdrop-blur-sm`}></div>
          <div className={`absolute top-1/4 left-1/3 w-10 h-10 rounded-full animate-float-slow animation-delay-3000 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/40'} backdrop-blur-sm`}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${darkMode ? 'hidden' : ''}`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${darkMode ? 'hidden' : ''}`}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Other Projects</h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins leading-relaxed`}>
              Additional projects that showcase my learning journey and diverse skill set.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="flip-card-container h-80"
              >
                {/* Flip Card Inner */}
                <div className="flip-card-inner">
                  
                  {/* Front Side */}
                  <div 
                    className={`flip-card-front rounded-2xl overflow-hidden backdrop-blur-md border ${
                      darkMode
                        ? 'bg-gray-800/60 border-gray-700/50'
                        : 'bg-white/70 border-white/60'
                    }`}
                    style={{
                      background: darkMode
                        ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 250, 252, 0.9) 100%)',
                      boxShadow: darkMode
                        ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="relative overflow-hidden h-40">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-bold font-playfair drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className={`mb-4 text-sm leading-relaxed line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-poppins`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              darkMode ? 'bg-gray-700/80 text-gray-300' : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode ? 'bg-gray-700/80 text-gray-400' : 'bg-gray-100 text-gray-500'
                          }`}>
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className={`flip-card-back rounded-2xl overflow-hidden backdrop-blur-md border ${
                      darkMode
                        ? 'bg-gradient-to-br from-cyan-900/90 to-blue-900/90 border-cyan-400/50'
                        : 'bg-gradient-to-br from-cyan-50/95 to-blue-50/95 border-cyan-400/50'
                    }`}
                    style={{
                      boxShadow: darkMode
                        ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                      {/* Project Icon */}
                      <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${
                        darkMode ? 'bg-cyan-400/20' : 'bg-cyan-400/30'
                      }`}>
                        <ExternalLink className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                      </div>

                      {/* Project Title */}
                      <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-playfair`}>
                        {project.title}
                      </h3>

                      {/* All Tags */}
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              darkMode
                                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                                : 'bg-cyan-100 text-cyan-700 border border-cyan-300/50'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`premium-btn w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                          darkMode
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white'
                            : 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white'
                        } shadow-lg hover:shadow-xl`}
                      >
                        <ExternalLink className="mr-2 w-5 h-5" />
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills darkMode={darkMode} />

      {/* Resume Section */}
      <Resume darkMode={darkMode} />

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <Contact isdarkMode={darkMode} />
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Nitya Jain. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;