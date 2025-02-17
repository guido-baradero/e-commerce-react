import './ItemListContainer.css';

const ItemListContainer = ({ imagen, titulo, descripcion }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imagen} className="card-img-top" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <a href="#" className="btn btn-primary">COMPRAR</a>
            </div>
        </div>
    );
};

export default ItemListContainer 
