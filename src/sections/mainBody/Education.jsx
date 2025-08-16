import { InfoCardGroup } from "../../components/InfoCard"
import { useContent } from "../../context/AppContext"

export function Education(){
    
    const content = useContent().education

    return(
        <section className='big-card'>
            <h1 className='big-card-title education-title medium-title-font'>
                {content.title}
            </h1>
            <div className='cards-box education-cards-box'>
                <InfoCardGroup infoCards={content.infoCards}></InfoCardGroup>
            </div>
        </section>
    )
}