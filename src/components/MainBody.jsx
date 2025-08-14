import { InfoCard } from './InfoCard'

//texto vem de props
//info cards vem de props

export function MainBody(){
    return(
        <main className='big-cards-section'>
            <section className='big-card about-me'>
                
                <h1 className='big-card-title about-me-title medium-title-font'>
                    Sobre Mim
                </h1>
                <p className='medium-text-font'>
                    Atualmente, sou estudante de Ciência da Computação na UFSC. Tenho grande interesse 
                    em desenvolvimento web e em Estruturas de Dados e Algoritmos.
                </p>
            </section>
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
            <section className='big-card experience'>
                <h1 className='big-card-title experience-title medium-title-font'>Experiência:</h1>
                <div className='cards-box experience-cards-box'>
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
        </main>
    )
}