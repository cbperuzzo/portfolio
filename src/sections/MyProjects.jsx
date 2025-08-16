
import { InfoCardGroup } from "../components/InfoCard"
import { useContent,useRefs } from "../context/AppContext"

export function MyProjects(){

    const content = useContent().projects
    const projectRef = useRefs().projects

    return(
        <section ref={projectRef} className='big-card my-projects'>
            <h1 className='big-card-title my-projects-title medium-title-font'>
                {content.title}
            </h1>
            <div className='cards-box my-projects-cards-box'>
                <InfoCardGroup infoCards={content.infoCards}></InfoCardGroup>
            </div>
        </section>
    )
}