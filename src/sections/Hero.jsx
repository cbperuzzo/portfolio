import { useContent } from "../context/AppContext"

export function Hero(){

    const content = useContent().hero

    return(
    <section className='hero-section'>
        <div className='hero-text'>
            <h1 className='hero-text-title big-title-font'>{content.title}</h1>
            <p className='hero-text-body big-text-font'>
                {content.text}
            </p>
        </div>
        <div className='hero-image-frame'>
            <img src='src/assets/images/bolty.jpeg' className='hero-image'></img>
        </div>
    </section>
    )
}