export function AboutMe(props){
    return(
        <section ref={props.aboutRef} className='big-card about-me'>
                        
            <h1 className='big-card-title about-me-title medium-title-font'>
                {props.title}
            </h1>
            <p className='medium-text-font'>
                {props.text}
            </p>
        </section>

    )
}