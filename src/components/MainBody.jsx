import { AboutMe } from './AboutMe'
import { Education } from './Education'
import { Experience } from './Experience'
import { MyProjects } from './MyProjects'


//texto vem de props
//info cards vem de props

export function MainBody(){
    return(
        <main className='big-cards-section'>
            <AboutMe/>
            <Education/>
            <Experience/>
            <MyProjects/>
        </main>
    )
}