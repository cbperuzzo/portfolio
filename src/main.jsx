import './css/index.css'
import './css/big-cards.css'
import './css/font-styles.css'
import './css/header.css'
import './css/hero.css'
import './css/info-cards.css'
import './css/logo-box.css'
import './css/skills.css'
import './css/word-blob.css'
import './css/footer.css'
import './css/contact-form.css'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MainBody } from './components/MainBody'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import { ContactForm } from './components/ContactForm'

import { useRef } from 'react'

import content from './data/content.json'

function Page(){

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return(
  <>
    <Header
      refs = {
        {
          about:aboutRef,
          experience:experienceRef,
          projects:projectsRef,
          contact:contactRef
        }
      }
      experience = {content.header.experience}
      projects = {content.header.projects}
      about = {content.header.about}
      contact = {content.header.contact}
    />
    <Hero
      title = {content.hero.title}
      text = {content.hero.text}
    />
    <MainBody
      aboutRef = {aboutRef}
      experienceRef = {experienceRef} 
      projectsRef = {projectsRef}
      aboutMe = {content.aboutMe}
      education = {content.education}
      experience = {content.experience}
      projects = {content.projects}
    />
    <Skills
      title={content.skills.title}
      skills = {content.skills.skills}
    />
    <ContactForm
      contactRef={contactRef}
      rowCount={content.contactForm.rowCount}
      title={content.contactForm.title}
      name={content.contactForm.name}
      email={content.contactForm.email}
      message={content.contactForm.message}
      send={content.contactForm.send}
    />
    <Footer
      email={content.footer.email}
      github={content.footer.github}
    />
  </>
  )
}


createRoot(document.getElementById('root')).render(
  <Page/>
)
