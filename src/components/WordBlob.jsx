export function WordBlob(props){

    return(
        <div className={props.big === true ? "word-blob word-blob-big":"word-blob" }>
            {props.text}
        </div>
    )
}