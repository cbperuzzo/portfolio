import { WordBlob } from './WordBlob'

export function InfoCard(props){
    const lines = props.lines.map( (l,index) => {
        if(l.type === "link"){
            return(
                <p key={index}>
                    <a href={l.href} className='link-font link-font-small'>
                        {l.body}
                    </a>
                </p>
            )
        }
        return(
            <p key={index} className={l.type}>
                {l.body}
            </p>
        )
    })


    const isTech =Array.isArray(props.tech)
    const tech = props.tech.map( (t,index) => {
        return(
            <WordBlob key={index} text={t}/>
        )
    })
    

    return(
        <div className={"info-card"+" "+"info-card-"+props.infoCardType}>
            {lines}
            {isTech ? <p className='info-card-title'>{props.techTitle}</p> :null }
            
            {isTech ?

                <div className='tech-box'> {tech} </div>

            : null}
        </div>
    )
}

export function InfoCardGroup({ infoCards }){
    const infoCardsComponents = infoCards.map( (ic,index) => {
        return(
            <InfoCard
                key = {index}
                lines = {ic.lines}
                tech = {ic.tech}
                techTitle = {ic.techTitle}
                infoCardType = {ic.infoCardType}
            />
        )
    })
    return infoCardsComponents;
}