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
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { MainBody } from './sections/MainBody'
import { Skills } from './sections/Skills'
import { Footer } from './sections/Footer'
import { ContactForm } from './sections/ContactForm'

import { AppProvider } from './context/AppContext'

export function App(){

  return(
  <AppProvider>
    
    <Header/>
    <Hero/>
    <MainBody/>
    <Skills/>
    <ContactForm/>
    <Footer/>
  </AppProvider>
  )
}