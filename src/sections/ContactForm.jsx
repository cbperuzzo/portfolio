import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";
import { useContent, useRefs } from "../context/AppContext";

export function ContactForm(){

    const content = useContent().contactForm
    const contactRef = useRefs().contact

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    
    function submit(e){
        e.preventDefault();
        setTimeout( () => {

            toast.success("Message sent!");
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";

        }, 350)
    }

    return(
        <section ref={contactRef} className="contact-form-section">
            <form onSubmit={submit} className="contact-form big-card">
                <h1 className="contact-me-title medium-title-font">
                    {content.title}
                </h1>
                <ul className="inputs-list ">
                    <li>
                        <label className="subtitle" htmlFor="name">{content.name}</label>
                        <input ref={nameRef} className="input-box dark-text" id="name" type="text"></input>
                    </li>

                    <li>
                        <label className="subtitle" htmlFor="email">{content.email}</label>
                        <input ref={emailRef} className="input-box dark-text" id="email" type="emial"></input>
                    </li>

                    <li>
                        <label className="subtitle" htmlFor="message">{content.message}</label>
                        <textarea ref={messageRef} className="input-box dark-text" id="message" rows={content.rowCount}>

                        </textarea>
                    </li>
                </ul>

                <button id="submit-contact" className="submit-contact-button fat-medium-text-font" type="submit">
                    {content.send}
                </button>
                <Toaster/>
            </form>
        </section>
    )
}