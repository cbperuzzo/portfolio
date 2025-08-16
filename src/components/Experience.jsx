import { InfoCardGroup } from "./InfoCard"

export function Experience(props){
    return(
        <section ref={props.experienceRef} className='big-card experience'>
            <h1 className='big-card-title experience-title medium-title-font'>
                {props.title}
            </h1>
            <div className='cards-box experience-cards-box'>
                <InfoCardGroup infoCards={props.infoCards}></InfoCardGroup>
            </div>
        </section>
    )
}