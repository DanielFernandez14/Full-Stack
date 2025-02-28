function Card (props) {
        const { body } = props;
    return (
        <div 
        className="card" 
        style={{
            width: "350px"
        }}> {/* esto es una mala practica*/}
        <div className="card-body">{body}</div>
    </div>)
}

export function CardBody(props) {
    const { title, text } = props
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </>
    )
}


export { Card }