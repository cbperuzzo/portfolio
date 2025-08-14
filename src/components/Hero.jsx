//texto vem de props

export function Hero(){
    return(
    <section className='hero-section'>
        <div className='hero-text'>
            <h1 className='hero-text-title big-title-font'>Olá, eu sou Caetano</h1>
            <p className='hero-text-body big-text-font'>
                Desenvolvedor Web com experiência em front-end e back-end, construindo soluções completas e escaláveis.
            </p>
        </div>
        <div className='hero-image-frame'>
            <img src='src/assets/bolty.jpeg' className='hero-image'></img>
        </div>
    </section>
    )
}