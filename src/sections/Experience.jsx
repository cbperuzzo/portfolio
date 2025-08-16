import { InfoCardGroup } from "../components/InfoCard"
import { useContent, useRefs } from "../context/AppContext"

export function Experience(){

    const content = useContent().experience
    const experienceRef = useRefs().experience

    return(
        <section ref={experienceRef} className='big-card experience'>
            <h1 className='big-card-title experience-title medium-title-font'>
                {content.title}
            </h1>
            <div className='cards-box experience-cards-box'>
                <InfoCardGroup infoCards={content.infoCards}></InfoCardGroup>
            </div>
        </section>
    )
}