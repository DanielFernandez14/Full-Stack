const Card = (props) => {
    return (
        <div className="card">
            <h3>
                {titulo}
            </h3>
            <img src={url} alt={"Imgagen de " + titulo} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus atque odit? Modi cumque minima tenetur harum? Aspernatur ducimus, perspiciatis eaque aliquid amet delectus molestias velit, quod deserunt aperiam repudiandae?</p>
        </div>
    )
}

export { Card }