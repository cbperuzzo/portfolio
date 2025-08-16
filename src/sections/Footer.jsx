import { useContent } from "../context/AppContext"

export function Footer(){

    const content = useContent().footer

    return(
        <footer className="main-footer">
            <div className="contact-div">
                <ul className="contact-items fat-medium-text-font">
                    <li>
                        <a href={content.email.href}>{content.email.text}</a>
                    </li>
                    <li>
                        <a href={content.github.href}>{content.github.text}</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}