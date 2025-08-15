import { AboutMe } from './AboutMe'
import { Education } from './Education'
import { Experience } from './Experience'
import { MyProjects } from './MyProjects'

//texto vem de props
//info cards vem de props

export function MainBody(props){
    return(
        <main className='big-cards-section'>
            <AboutMe
                title={props.aboutMe.title}
                text={props.aboutMe.text}
                aboutRef = {props.aboutRef}
            />
            <Education
                title={props.education.title}
                infoCards={props.education.infoCards}
            />
            <Experience
                title={props.experience.title}
                infoCards={props.experience.infoCards}
                experienceRef={props.experienceRef}
            />
            <MyProjects
                title={props.projects.title}
                infoCards={props.projects.infoCards}
                projectsRef={props.projectsRef}
            />
        </main>
    )
}