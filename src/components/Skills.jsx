import { WordBlob } from './WordBlob'

export function Skills(props){

    const skills = props.skills.map( (s,index) => 
        <WordBlob key={index} big={true} text = {s}></WordBlob>
    )

    return(
    <section className='skills-section'>
        <h1 className='skills-title medium-title-font'>
            {props.title}
        </h1>
        <div className='skills-box'>
            {skills}
        </div>
    </section>
    )
}