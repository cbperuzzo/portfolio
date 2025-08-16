import { WordBlob } from '../components/WordBlob'
import { useContent } from '../context/AppContext'

export function Skills(){

    const content = useContent().skills

    const skills = content.skills.map( (s,index) => 
        <WordBlob key={index} big={true} text = {s}></WordBlob>
    )

    return(
    <section className='skills-section'>
        <h1 className='skills-title medium-title-font'>
            {content.title}
        </h1>
        <div className='skills-box'>
            {skills}
        </div>
    </section>
    )
}