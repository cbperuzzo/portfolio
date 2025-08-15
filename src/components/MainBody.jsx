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
            />
            <Education
                title={props.education.title}
                infoCards={props.education.infoCards}
            />
            <Experience
                title={props.experience.title}
                infoCards={props.experience.infoCards}
            />
            <MyProjects
                title={props.projects.title}
                infoCards={props.projects.infoCards}
            />
        </main>
    )
}