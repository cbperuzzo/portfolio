//texto vem de props

export function Hero(props){
    return(
    <section className='hero-section'>
        <div className='hero-text'>
            <h1 className='hero-text-title big-title-font'>{props.title}</h1>
            <p className='hero-text-body big-text-font'>
                {props.text}
            </p>
        </div>
        <div className='hero-image-frame'>
            <img src='src/assets/bolty.jpeg' className='hero-image'></img>
        </div>
    </section>
    )
}