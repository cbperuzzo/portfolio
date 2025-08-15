import { infoCardGen } from "../InfoCardGen"

export function Experience(props){
    return(
        <section className='big-card experience'>
            <h1 className='big-card-title experience-title medium-title-font'>
                {props.title}
            </h1>
            <div className='cards-box experience-cards-box'>
                {infoCardGen(props.infoCards)}
            </div>
        </section>
    )
}