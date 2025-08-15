export function ContactForm(props){
    return(
        <section className="contact-form-section">
            <form className="contact-form big-card">
                <h1 className="contact-me-title medium-title-font">
                    {props.title}
                </h1>
                <ul className="inputs-list ">
                    <li>
                        <label className="subtitle" htmlFor="name">{props.name}</label>
                        <input className="input-box dark-text" id="name" type="text"></input>
                    </li>

                    <li>
                        <label className="subtitle" htmlFor="email">{props.email}</label>
                        <input className="input-box dark-text" id="email" type="emial"></input>
                    </li>

                    <li>
                        <label className="subtitle" htmlFor="message">{props.message}</label>
                        <textarea className="input-box dark-text" id="message" rows={props.rowCount}>

                        </textarea>
                    </li>
                </ul>

                <button id="submit-contact" className="submit-contact-button fat-medium-text-font" type="submit">
                    {props.send}
                </button>
            </form>
        </section>
    )
}