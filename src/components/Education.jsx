import { InfoCardGroup } from "./InfoCard"

export function Education(props){

    return(
        <section className='big-card'>
            <h1 className='big-card-title education-title medium-title-font'>
                {props.title}
            </h1>
            <div className='cards-box education-cards-box'>
                <InfoCardGroup infoCards={props.infoCards}></InfoCardGroup>
            </div>
        </section>
    )
}