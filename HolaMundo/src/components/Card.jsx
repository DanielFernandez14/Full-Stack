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

export function CardBody() {
    return (
        <>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </>
    )
}


export { Card }