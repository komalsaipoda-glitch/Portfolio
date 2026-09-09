import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL || '/'
const A = (BASE.endsWith('/') ? BASE : BASE + '/') + 'assets/'

const DATA = {
  name: 'KOMAL SAI',
  title: 'APM / BUSINESS ANALYST',
  heroTag: 'Your Friendly Neighborhood Engineer',
  about: [
    "I'm an APM / Business Analyst who enjoys connecting product thinking, business needs, analysis, and technology to build practical solutions.",
    "Beyond product and business analysis, I explore filmmaking, content creation, motorsport analysis, and vibe coding—combining analytical thinking with creative problem solving."
  ],
  education: [
    { stage: '10th — ZPHS', score: '72%' },
    { stage: 'Intermediate', score: '77%' },
    { stage: 'B.Tech', score: '8.7 CGPA' }
  ],
  experience: [
    { title: 'Infosys — Agentic AI Internship', description: 'Attended an Infosys internship focused on Agentic AI concepts, workflows, and practical applications.', tag: 'INTERNSHIP' },
    { title: 'F1 Analysis Webinars', description: 'Attended several F1 webinars focused on race analysis, strategy, performance, and data-driven insights.', tag: 'F1 ANALYSIS' },
    { title: 'Minecraft Bot Detection', description: 'Built a Minecraft project exploring automated behaviour patterns and bot detection.', tag: 'PROJECT' }
  ],
  skills: ['Product Management', 'Business Analysis', 'Requirements Gathering', 'User Stories', 'SQL & Data Analysis', 'Product Analytics', 'Agile / Scrum', 'Jira & Confluence', 'Stakeholder Management', 'Process Mapping'],
  projects: [
    { title: 'Minecraft Bot Detection', description: 'A Minecraft project exploring bot detection through behavioural patterns and automated activity analysis.', tags: ['Minecraft', 'Bot Detection', 'Analysis', 'AI'] },
    { title: 'F1 Race Analysis', description: 'A motorsport analysis concept focused on race strategy, driver performance, tyre decisions, and data-backed race insights.', tags: ['F1', 'Race Analysis', 'Strategy', 'Data'] },
    { title: 'Vibe Coding Projects', description: 'Creative coding experiments where product ideas, visual design, rapid prototyping, and technology come together.', tags: ['Vibe Coding', 'Prototype', 'Creative Tech'] },
    { title: 'Content Creation & Filmmaking', description: 'Creative work combining storytelling, visual direction, editing, and digital content creation.', tags: ['Filmmaking', 'Content', 'Storytelling'] }
  ],
  contacts: [
    {
      name: 'GitHub',
      label: 'komalsaipoda-glitch',
      url: 'https://github.com/komalsaipoda-glitch',
      type: 'github'
    },
    {
      name: 'LinkedIn',
      label: 'Komal Sai Poda',
      url: 'https://www.linkedin.com/in/komal-sai-poda-b650312b3',
      type: 'linkedin'
    },
    {
      name: 'Instagram',
      label: '@__keshavaa',
      url: 'https://www.instagram.com/__keshavaa?stkn=MTI4ajRzZmQ2amQ0cg==',
      type: 'instagram'
    },
    {
      name: 'Gmail',
      label: 'komalsaipoda@gmail.com',
      url: 'mailto:komalsaipoda@gmail.com',
      type: 'gmail'
    }
  ]
}

function DownloadIcon() {
  return <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
}

function ArrowIcon() {
  return <svg className="w-5 h-5 text-gray-400 group-hover:text-[#a31515] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
}

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .89.72 1.61 1.61 1.61.89 0 1.61-.72 1.61-1.61 0-.89-.72-1.61-1.61-1.61z" />
    </svg>
  )
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function GmailIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function ContactIcon({ type, className = "w-5 h-5" }) {
  switch (type) {
    case 'github': return <GithubIcon className={className} />
    case 'linkedin': return <LinkedInIcon className={className} />
    case 'instagram': return <InstagramIcon className={className} />
    case 'gmail': return <GmailIcon className={className} />
    default: return null
  }
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 50)
    f()
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  const links = ['About', 'Skills', 'Projects', 'Contact']
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/90 backdrop-blur-md border-red-900/50 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.15)]' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="text-white text-2xl font-black tracking-tighter italic uppercase group flex items-center">
          <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">K</span>
          <span className="group-hover:text-red-500 transition-colors duration-300">OMAL SAI.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(x => (
            <a key={x} href={`#${x.toLowerCase()}`} className="relative text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group">
              {x}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            </a>
          ))}
        </div>
        <button aria-label="Open menu" onClick={() => setOpen(v => !v)} className="md:hidden text-gray-400 hover:text-red-600 transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-red-900/50 px-6 py-4 flex flex-col gap-4">
          {links.map(x => (
            <a onClick={() => setOpen(false)} key={x} href={`#${x.toLowerCase()}`} className="text-gray-300 font-bold uppercase tracking-widest text-sm">
              {x}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const root = useRef(null), topImg = useRef(null), state = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 400, alpha: 1, size: 50 }), web = useRef(null), quickX = useRef(null), quickY = useRef(null)
  useEffect(() => {
    const c = gsap.context(() => {
      gsap.fromTo(web.current.children, { opacity: 0, scale: .5 }, { opacity: .5, scale: 1, duration: 2, stagger: .4, ease: 'power3.out' })
      gsap.to(web.current.children, { rotation: 360, duration: 120, repeat: -1, ease: 'linear' })
      gsap.to(web.current.children, { scale: 1.1, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.timeline({ delay: .25 }).fromTo('.hero-in', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: .75, stagger: .12, ease: 'power3.out' })
    }, root)
    return () => c.revert()
  }, [])
  useEffect(() => {
    const s = state.current
    quickX.current = gsap.quickTo(s, 'x', { duration: .3, ease: 'power4.out' })
    quickY.current = gsap.quickTo(s, 'y', { duration: .3, ease: 'power4.out' })
    const tick = () => {
      if (!topImg.current) return
      const { x, y, alpha, size } = s
      const mask = `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(0,0,0,${alpha}) 0%, rgba(0,0,0,.85) 40%, rgba(0,0,0,1) 100%)`
      topImg.current.style.webkitMaskImage = mask
      topImg.current.style.maskImage = mask
    }
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [])
  const move = e => { quickX.current?.(e.clientX); quickY.current?.(e.clientY) }
  const enter = () => gsap.to(state.current, { alpha: 0, size: 700, duration: .8, ease: 'elastic.out(1,.7)', overwrite: 'auto' })
  const leave = () => gsap.to(state.current, { alpha: 1, size: 50, duration: 1.2, ease: 'power4.inOut', overwrite: 'auto' })
  return (
    <section id="top" ref={root} onMouseMove={move} onMouseEnter={enter} onMouseLeave={leave} className="relative w-full h-screen min-h-[560px] overflow-hidden flex items-center justify-center cursor-crosshair">
      <picture className="absolute inset-0 w-full h-full z-10">
        <source media="(max-width: 767px)" srcSet={A + 'hero-bottom-mobile.webp'} />
        <img alt="Bottom Identity Layer" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src={A + 'hero-bottom-desktop.webp'} />
      </picture>
      <picture className="absolute inset-0 w-full h-full z-20">
        <source media="(max-width: 767px)" srcSet={A + 'hero-top-mobile.webp'} />
        <img ref={topImg} alt="Top Mask Layer" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" style={{ maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }} src={A + 'hero-top-desktop.webp'} />
      </picture>
      <div ref={web} className="absolute inset-0 pointer-events-none z-[25] overflow-hidden">
        <img alt="Spider Web Top" className="absolute top-0 left-0 w-44 h-44 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] object-contain opacity-40 sm:opacity-50 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply" src={A + 'web.png'} />
        <img alt="Spider Web Bottom" className="absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] object-contain opacity-40 sm:opacity-50 translate-x-1/4 translate-y-1/4 mix-blend-multiply" src={A + 'web.png'} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-24 z-30 flex flex-col gap-3 pointer-events-none drop-shadow-md max-w-lg w-full">
        <span className="text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em] opacity-0 hero-in">{DATA.heroTag}</span>
        <h1 className="text-gray-900 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none opacity-0 italic uppercase hero-in" style={{ textShadow: '4px 4px 0px #ef4444, 7px 7px 0px #a31515' }}>
          {DATA.name.split(' ').map((x, i) => <React.Fragment key={x}>{i > 0 && <br />}{x}{i === 0 ? ' ' : '.'}</React.Fragment>)}
        </h1>
        <span className="text-gray-900 font-bold uppercase text-xs md:text-sm tracking-[0.2em] opacity-0 hero-in">{DATA.title}</span>
        <div className="flex flex-wrap items-center gap-4 mt-4 pointer-events-auto hero-in">
          <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="relative overflow-hidden bg-[#a31515] hover:bg-[#7a0f0f] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(163,21,21,0.4)] cursor-pointer uppercase border border-[#a31515]">Explore Projects</button>
          <a href="#contact" className="flex items-center gap-2 text-white bg-gray-900 hover:bg-black px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] uppercase text-sm group"><DownloadIcon />Connect / Resume</a>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['FILMMAKING', 'CONTENT CREATION', 'RACE ANALYST', 'VIBE CODER']
  const row = [...items, ...items]
  return (
    <section className="relative w-full h-[20vh] md:h-[30vh] bg-white overflow-hidden flex items-center justify-center z-40">
      <div className="absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#a31515] text-white border-y-[3px] border-black rotate-[4deg] -translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,.4)] z-20 flex items-center overflow-hidden scale-105">
        <div className="marquee-track flex items-center h-full w-max">
          {row.map((x, i) => (
            <React.Fragment key={i}>
              <span className="marquee-text mx-3 sm:mx-4 md:mx-6 text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest whitespace-nowrap shrink-0 drop-shadow-sm">{x}</span>
              <img alt="Separator" className="mx-3 sm:mx-4 md:mx-6 h-5 sm:h-6 md:h-8 lg:h-10 w-auto object-contain shrink-0 drop-shadow-md" src={i % 2 === 0 ? A + 'spydy.png' : A + 'web.png'} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="flex flex-col items-center text-center mb-10 z-10">
      <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">{eyebrow}</span>
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900" style={{ textShadow: '2px 2px 0px #fca5a5' }}>{title}</h2>
      <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
    </div>
  )
}

function About() {
  const root = useRef(null), left = useRef(null), right = useRef(null), hanging = useRef(null)
  useEffect(() => {
    const c = gsap.context(() => {
      // Main entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })

      tl.fromTo('.about-line', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: .6 })
        .fromTo('.about-copy', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7 }, '-=.35')
        .fromTo('.about-p', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .15 }, '-=.35')
        .fromTo('.education-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .1 }, '-=.2')

      // ACCURATE DROP FROM UP: drops from above like descending on a spider web line
      tl.fromTo(hanging.current,
        { y: -750, opacity: 0, scaleY: 1.15 },
        {
          y: 0,
          opacity: 1,
          scaleY: 1,
          duration: 1.6,
          ease: 'elastic.out(1.1, 0.45)'
        },
        '-=.5'
      )

      gsap.to(left.current, { y: 20, repeat: -1, yoyo: true, duration: 4, ease: 'sine.inOut' })
      gsap.to(right.current, { y: -20, repeat: -1, yoyo: true, duration: 5, ease: 'sine.inOut' })

      // Subtle realistic pendulum sway once settled
      gsap.to(hanging.current, {
        rotation: 4,
        transformOrigin: 'top center',
        repeat: -1,
        yoyo: true,
        duration: 3.5,
        ease: 'sine.inOut',
        delay: 1.2
      })
    }, root)
    return () => c.revert()
  }, [])

  return (
    <section id="about" ref={root} className="relative w-full min-h-screen bg-gray-50 text-gray-900 py-24 flex items-center justify-center overflow-hidden">
      <div ref={left} className="absolute top-[-50px] left-[-5%] md:left-[2%] flex flex-col items-center pointer-events-none z-0">
        <div className="w-[1px] h-[250px] md:h-[350px] bg-gradient-to-b from-transparent to-gray-300" />
        <img src={A + 'web.png'} alt="Hanging Web" className="w-64 h-64 md:w-96 md:h-96 object-contain -mt-12 opacity-[0.12] mix-blend-multiply" />
      </div>
      <div ref={right} className="absolute top-[-50px] right-[-5%] md:right-[2%] flex flex-col items-center pointer-events-none z-0">
        <div className="w-[1px] h-[200px] md:h-[300px] bg-gradient-to-b from-transparent to-gray-300" />
        <img src={A + 'web.png'} alt="Hanging Web" className="w-56 h-56 md:w-80 md:h-80 object-contain -mt-10 opacity-[0.12] mix-blend-multiply" />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20 z-10 relative">
        <div className="flex-1 flex flex-col gap-6 mt-10 lg:mt-0 relative z-20">
          <div className="overflow-hidden">
            <span className="about-line inline-flex items-center gap-2 text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em]">
              <img src={A + 'spydy.png'} alt="Spider" className="w-5 h-5 object-contain drop-shadow-sm" />
              Behind the Mask
            </span>
          </div>
          <div className="overflow-hidden py-2">
            <h2 className="about-copy text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-gray-900" style={{ textShadow: '2px 2px 0px #fca5a5' }}>KESHAV.</h2>
          </div>
          <div className="flex flex-col gap-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-medium mt-2">
            {DATA.about.map((p, i) => <p className="about-p origin-bottom" key={i}>{p}</p>)}
          </div>
          <div className="mt-8">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold border-b border-gray-300 pb-2 inline-block">Education</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {DATA.education.map(e => (
                <div className="education-card bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm" key={e.stage}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{e.stage}</div>
                  <div className="text-xl font-black text-[#a31515] mt-1">{e.score}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold border-b border-gray-300 pb-2 inline-block">Primary Toolkit</h3>
            <div className="flex flex-wrap gap-3">
              {['Product Management', 'Business Analysis', 'SQL & Data Analysis', 'F1 Race Analysis', 'Vibe Coding', 'Agile / Scrum'].map(x => (
                <div className="px-5 py-2.5 border border-[#a31515]/30 bg-white text-[#a31515] rounded-xl text-sm font-bold tracking-wider shadow-sm" key={x}>{x}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center items-start min-h-[550px] w-full pt-0">
          <div ref={hanging} className="flex flex-col items-center z-30 group origin-top">
            <div className="w-[2px] h-[200px] md:h-[350px] bg-gradient-to-b from-transparent via-[#a31515]/60 to-[#a31515]" />
            <div className="glow-frame relative w-64 h-64 md:w-[340px] md:h-[340px] rounded-full border-[6px] border-[#a31515] p-2 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img src={A + 'profile.webp'} alt="Komal Sai profile" className="w-full h-full object-cover object-center rounded-full grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const root = useRef(null), web = useRef(null), sp = useRef(null)
  useEffect(() => {
    const c = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
        .fromTo('.skill-head', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: 'power3.out' })
        .fromTo('.matrix-item', { y: 30, opacity: 0, x: -15 }, { y: 0, opacity: 1, x: 0, duration: .5, stagger: .04, ease: 'back.out(1.5)' }, '-=.3')
      gsap.to(web.current, { scale: 1.05, opacity: .06, repeat: -1, yoyo: true, duration: 5, ease: 'sine.inOut' })
      gsap.to(sp.current, { rotation: 5, transformOrigin: 'top center', repeat: -1, yoyo: true, duration: 3.2, ease: 'sine.inOut' })
    }, root)
    return () => c.revert()
  }, [])
  return (
    <section id="skills" ref={root} className="relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <img ref={web} src={A + 'web.png'} alt="Background Web" className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] object-contain opacity-[0.04] mix-blend-multiply" />
      </div>
      <div ref={sp} className="absolute top-0 right-8 md:right-16 z-30 pointer-events-none flex flex-col items-center origin-top">
        <div className="w-[2px] h-16 md:h-24 bg-gradient-to-b from-transparent to-gray-400 opacity-60" />
        <img src={A + 'spydy_hang.png'} alt="Hanging Spider-Man" className="w-28 md:w-40 h-auto object-contain drop-shadow-lg -mt-2" />
      </div>
      <div className="skill-head">
        <SectionHeader eyebrow="Arsenal & Expertise" title="TECHNICAL SKILLS." />
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 z-10">
        {DATA.skills.map((x, i) => (
          <div className="matrix-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] px-5 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,.15)]" key={x}>
            <div className="absolute inset-0 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />
            <div className="relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a31515] group-hover:bg-white transition-colors duration-300 shadow-[0_0_8px_rgba(163,21,21,.6)]" />
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300">{x}</span>
                <span className="text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 uppercase tracking-widest">{i % 2 ? 'Business' : 'Product'}</span>
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-white text-gray-700 group-hover:bg-black group-hover:text-white rounded-full transition-colors duration-300 shadow-sm">Core</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const root = useRef(null)
  useEffect(() => {
    const c = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
        .fromTo('.experience-head', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: 'power3.out' })
        .fromTo('.experience-item', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .12, ease: 'back.out(1.4)' }, '-=.25')
    }, root)
    return () => c.revert()
  }, [])
  return (
    <section id="experience" ref={root} className="relative w-full bg-gray-50 text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100">
      <div className="experience-head">
        <SectionHeader eyebrow="Experience & Highlights" title="THE JOURNEY." />
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
        {DATA.experience.map(x => (
          <div key={x.title} className="experience-item bg-white border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,.15)] transition-all duration-300 hover:-translate-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#a31515]">{x.tag}</span>
            <h3 className="text-lg font-black uppercase tracking-tight mt-3 mb-3">{x.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">{x.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const root = useRef(null), web = useRef(null), sp = useRef(null)
  useEffect(() => {
    const c = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
        .fromTo('.project-head', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: 'power3.out' })
        .fromTo('.project-item', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .1, ease: 'back.out(1.4)' }, '-=.3')
        .fromTo(sp.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'back.out(1.7)' }, '-=.4')
      gsap.set(web.current, { transformOrigin: 'top right' })
      gsap.to(web.current, { rotation: 8, repeat: -1, yoyo: true, duration: 6, ease: 'sine.inOut' })
      gsap.to(web.current, { scale: 1.1, opacity: .07, repeat: -1, yoyo: true, duration: 4, ease: 'sine.inOut' })
      gsap.to(sp.current, { y: -10, repeat: -1, yoyo: true, duration: 2.5, ease: 'sine.inOut' })
    }, root)
    return () => c.revert()
  }, [])
  return (
    <section id="projects" ref={root} className="relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100">
      <div className="absolute top-0 right-0 pointer-events-none overflow-hidden z-0">
        <img ref={web} src={A + 'web.png'} alt="Background Web" className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply translate-x-1/4 -translate-y-1/4" />
      </div>
      <div ref={sp} className="absolute bottom-0 left-4 md:left-12 z-30 pointer-events-none">
        <img src={A + 'spydy_stand.png'} alt="Standing Spider-Man" className="w-32 md:w-48 h-auto object-contain drop-shadow-2xl" />
      </div>
      <div className="project-head">
        <SectionHeader eyebrow="Featured Works" title="PROJECTS." />
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 z-10">
        {DATA.projects.map(p => (
          <div className="project-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,.15)] transform hover:-translate-y-1" key={p.title}>
            <div className="absolute top-0 left-0 w-full h-1 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors duration-300">{p.title}</h3>
                <ArrowIcon />
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium mb-6">{p.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/60">
              {p.tags.map(t => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-gray-200 text-gray-600 group-hover:border-[#a31515]/30 group-hover:text-[#a31515] rounded-md transition-colors duration-300">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const root = useRef(null), web = useRef(null), sp = useRef(null), [sent, setSent] = useState(false)
  useEffect(() => {
    const c = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
        .fromTo('.contact-head', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: 'power3.out' })
        .fromTo('.contact-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: 'back.out(1.4)' }, '-=.3')
        .fromTo('.social-channel', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .08, ease: 'back.out(1.5)' }, '-=.2')
      gsap.to(web.current, { scale: 1.15, opacity: .06, repeat: -1, yoyo: true, duration: 4.5, ease: 'sine.inOut' })
      gsap.to(sp.current, { rotation: 8, transformOrigin: 'top center', repeat: -1, yoyo: true, duration: 2, ease: 'sine.inOut' })
    }, root)
    return () => c.revert()
  }, [])

  return (
    <section id="contact" ref={root} className="relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100">
      <div className="absolute bottom-0 left-0 pointer-events-none overflow-hidden z-0">
        <img ref={web} src={A + 'web.png'} alt="Background Web" className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply -translate-x-1/4 translate-y-1/4" />
      </div>
      <div ref={sp} className="absolute top-0 right-8 md:right-20 z-30 pointer-events-none flex flex-col items-center origin-top">
        <div className="w-[2px] h-24 md:h-36 bg-gradient-to-b from-transparent to-gray-400 opacity-60" />
        <img src={A + 'spydy_hang.png'} alt="Hanging Spider-Man" className="w-40 md:w-60 h-auto object-contain drop-shadow-2xl -mt-2" />
      </div>
      <div className="contact-head">
        <SectionHeader eyebrow="Get In Touch" title="CONTACT." />
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-8 relative z-10">
        {/* Contact Form Card */}
        <div className="contact-card w-full bg-gray-50/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm">
          <form onSubmit={e => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000) }} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Your Name</span>
                <input required type="text" placeholder="Your name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Your Email</span>
                <input required type="email" placeholder="you@example.com" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all" />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Message</span>
              <textarea required rows="4" placeholder="Let's build something useful together..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all resize-none" />
            </label>
            <button type="submit" className="w-full bg-[#a31515] hover:bg-[#7a0f0f] text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(163,21,21,.3)] hover:shadow-[0_6px_20px_rgba(163,21,21,.5)] cursor-pointer mt-2">
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Access Cards with Icons */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a31515]">Direct Channels</span>
            <div className="flex-1 h-[1px] bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.contacts.map(c => (
              <a
                key={c.name}
                href={c.url}
                target={c.type === 'gmail' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="social-channel group bg-white border border-gray-200 hover:border-[#a31515] p-4 rounded-xl shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,.15)] transition-all duration-300 flex items-center justify-between hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#a31515] text-gray-800 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                    <ContactIcon type={c.type} className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-wider text-gray-900 group-hover:text-[#a31515] transition-colors">{c.name}</span>
                    <span className="text-xs text-gray-500 font-medium truncate max-w-[200px] sm:max-w-[180px] md:max-w-[220px]">{c.label}</span>
                  </div>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white py-12 px-6 md:px-12 border-t border-red-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <a href="#top" className="text-2xl font-black italic tracking-tighter text-white uppercase group">
            <span className="text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]">K</span>
            <span className="group-hover:text-red-500 transition-colors">OMAL SAI.</span>
          </a>
          <span className="text-xs text-gray-400 uppercase tracking-widest hidden sm:inline">| Your Friendly Neighborhood Engineer</span>
        </div>

        {/* Social App Icons Bar */}
        <div className="flex items-center gap-3">
          {DATA.contacts.map(c => (
            <a
              key={c.name}
              href={c.url}
              target={c.type === 'gmail' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={c.name}
              title={`${c.name}: ${c.label}`}
              className="w-10 h-10 rounded-xl bg-gray-900 hover:bg-[#a31515] text-gray-400 hover:text-white border border-gray-800 hover:border-red-600/60 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            >
              <ContactIcon type={c.type} className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-500 font-medium tracking-wide text-center md:text-right">
          © {new Date().getFullYear()} Komal Sai. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col bg-white overflow-hidden">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
