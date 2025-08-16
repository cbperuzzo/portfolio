import { InfoCard } from "../components/InfoCard";

export function infoCardGen(infoCards){
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