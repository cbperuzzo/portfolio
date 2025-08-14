import { WordBlob } from './WordBlob'

export function InfoCard(props){
    const lines = props.lines.map( (l,index) => {
        return(
            <p key={index} className={l.type}>
                {l.body}
            </p>
        )
    })


    const isTech = Array.isArray(props.tech)
    const tech = props.tech.map( (t,index) => {
        return(
            <WordBlob key={index} text={t}/>
        )
    })
    

    return(
        <div className={"info-card"+" "+"info-card-"+props.InfoCardType}>
            {lines}
            {isTech ? <p className='info-card-title'>{props.techTitle}</p> :null }
            
            {isTech ?

                <div className='tech-box'> {tech} </div>

            : null}
        </div>
    )
}