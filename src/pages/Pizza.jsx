import { pizzas } from '../data/pizzas';
import { formatPrice } from '../utils/formatPrice';

const Pizza = () => {
  const pizza = pizzas.find(p => p.id === 'p001');

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1>{pizza.name}</h1>
          <hr />
          <p className="lead">{pizza.desc}</p>
          <hr />
          <h4>Ingredientes:</h4>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                🔸 {ingredient}
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-0">Precio: ${formatPrice(pizza.price)}</h3>
            <button className="btn btn-dark btn-lg">Añadir al carrito 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
