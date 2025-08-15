export function ContactForm(props){
    return(
        <section className="contact-form-section">
            <form className="contact-form big-card">
                <h1 className="contact-me-title medium-title-font">
                    Contato
                </h1>
                <ul className="inputs-list ">
                    <li>
                        <label className="subtitle" htmlFor="name">Nome:</label>
                        <input className="input-box dark-text" id="name" type="text"></input>
                    </li>

                    <li>
                        <label className="subtitle" htmlFor="email">Email:</label>
                        <input className="input-box dark-text" id="email" type="emial"></input>
                    </li>

                    <li>
                        <label className="subtitle" htmlFor="message">Mensagem:</label>
                        <textarea className="input-box dark-text" id="message" rows={props.textarea.rows}>

                        </textarea>
                    </li>
                </ul>

                <button id="submit-contact" className="submit-contact-button fat-medium-text-font" type="submit">
                    Enviar
                </button>
            </form>
        </section>
    )
}