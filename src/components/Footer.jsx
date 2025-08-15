export function Footer(props){
    return(
        <footer className="main-footer">
            <div className="contact-div">
                <ul className="contact-items fat-medium-text-font">
                    <li>{props.email}</li>
                    <li>{props.github}</li>
                </ul>
            </div>
        </footer>
    )
}