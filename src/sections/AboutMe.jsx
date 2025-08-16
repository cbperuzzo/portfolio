
import { useContent,useRefs } from "../context/AppContext";

export function AboutMe(){

    const aboutRef = useRefs().about
    const content = useContent().about

    return(
        <section ref={aboutRef} className='big-card about-me'>
                        
            <h1 className='big-card-title about-me-title medium-title-font'>
                {content.title}
            </h1>
            <p className='medium-text-font'>
                {content.text}
            </p>
        </section>

    )
}