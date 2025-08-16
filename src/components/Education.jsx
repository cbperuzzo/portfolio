import { infoCardGen } from "../aux/InfoCardGen"

export function Education(props){

    return(
        <section className='big-card'>
            <h1 className='big-card-title education-title medium-title-font'>
                {props.title}
            </h1>
            <div className='cards-box education-cards-box'>
                {infoCardGen(props.infoCards)}
            </div>
        </section>
    )
}