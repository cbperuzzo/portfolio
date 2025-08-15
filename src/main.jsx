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

import content from './data/content.json'

createRoot(document.getElementById('root')).render(
  
  <>
    <Header/>
    <Hero/>
    <MainBody/>
    <Skills
      title="Habilidades Técnicas:"
      skills = {
        [
        "C++","Java","Spring","PHP","Laravel","JS","React","PostgreSQL","Docker","Git","Linux"
        ]
      }
    />
    <ContactForm textarea={{rows:10}}/>
    <Footer/>
  </>
)
