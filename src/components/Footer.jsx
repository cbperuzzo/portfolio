export function Footer(props){
    return(
        <footer className="main-footer">
            <div className="contact-div">
                <ul className="contact-items fat-medium-text-font">
                    <li>
                        <a href={props.email.href}>{props.email.text}</a>
                    </li>
                    <li>
                        <a href={props.github.href}>{props.github.text}</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}