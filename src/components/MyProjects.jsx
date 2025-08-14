import { InfoCard } from "./InfoCard"

export function MyProjects(){
    return(
        <section className='big-card my-projects'>
            <h1 className='big-card-title my-projects-title medium-title-font'> Projetos Pessoais: </h1>
            <div className='cards-box my-projects-cards-box'>
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
                    InfoCardType = "full-card"
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
                        InfoCardType = "full-card"
                />
            </div>
        </section>
    )
}