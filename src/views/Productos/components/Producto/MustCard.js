import "./style.css";
export default function MustCard({name, peso, height}) {
    return(
        <div className="card-div">
            <h2 className="card-title">{name}</h2>
            
            <div className="card-description">
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.  
            </div>
            <p>{`Peso: ${peso} kgs.`}</p>
            <p>{`Altura: ${height} cms.`}</p>
            <div className="card-foot">
                <button className="card-botton">Agregar al carrito</button>
                <button className="card-botton">Quitar del carrito</button>
            </div>
        </div>
    )
}