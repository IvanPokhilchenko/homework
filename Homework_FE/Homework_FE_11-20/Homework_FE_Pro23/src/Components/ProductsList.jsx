import React from 'react';
import { useSelector } from 'react-redux';

function ProductsList() {
  const products = useSelector((state) => state.products);
  const error = useSelector((state) => state.error);

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
                {products && products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default ProductsList;