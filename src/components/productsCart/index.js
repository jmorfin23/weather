import React, {Component} from 'react';
import './index.css';


///can use function based components because it doesn't requrire other methods or a state

function ProductsCart(props) {
  return (
    <div className="row">
    <div className='col-md-12'>
      <table className="table-dark table">
        <thead>
          <tr>
            <th> Name </th>
            <th> Price </th>
            <th> Remove Products </th>
          </tr>
        </thead>
        <tbody>
          {
            props.cart &&
                props.cart.map( (product, index) =>
                  <tr key={index}>
                  <td> {product.name} </td>
                  <td> {product.price} </td>
                  <td>
                  <button className="btn btn-danger" onClick={function() {props.subTotal(product.id); props.removeItem(product.id)}}>Remove from cart</button>
                  </td>
                </tr>
                )
          }
        </tbody>
      </table>
      <h1>Total: ${props.total}</h1>
    </div>
  </div>
  );
}

export default ProductsCart;
