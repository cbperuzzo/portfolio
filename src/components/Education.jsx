import { InfoCard } from "./InfoCard"

export function Education(){
    return(
        <section className='big-card'>
            <h1 className='big-card-title education-title medium-title-font'>Formação:</h1>
            <div className='cards-box education-cards-box'>
                <InfoCard 
                    lines =
                    {
                        [
                            {type:"subtitle",body:"Técnico em desenvolvimento Web"},
                            {type:"subtitle",body:"UNIDAVI"},
                            {type:"dark-text",body:"abr 2022 - nov 2022"},
                        ]
                    }
                    tech = { ["PHP","Laravel","PostgreSQL","JS"] }
                    techTitle = "Tecnologias:"
                    InfoCardType = "side-line"
                />
                <InfoCard 
                    lines =
                    {
                        [
                            {type:"subtitle",body:"Ciência da computação"},
                            {type:"subtitle",body:"UFSC"},
                            {type:"dark-text",body:"mar 2024 - momento"},
                        ]
                    }
                    tech = { ["C++","Java","Python"] }
                    techTitle = "Tecnologias:"
                    InfoCardType = "side-line"
                />
            </div>
        </section>
    )
}