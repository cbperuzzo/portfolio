
import { infoCardGen } from "../InfoCardGen"

export function MyProjects(props){
    return(
        <section className='big-card my-projects'>
            <h1 className='big-card-title my-projects-title medium-title-font'>
                {props.title}
            </h1>
            <div className='cards-box my-projects-cards-box'>
                {infoCardGen(props.infoCards)}
            </div>
        </section>
    )
}