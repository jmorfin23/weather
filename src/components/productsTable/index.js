import React, {Component} from 'react';
import './index.css';


///can use function based components because it doesn't requrire other methods or a state

function ProductsTable(props) {
  return (
    <div className="row">
    <div className='col-md-12'>
      <table className="table-dark table">
        <thead>
          <tr>
            <th> Name </th>
            <th> Price </th>
            <th> Add Products </th>
          </tr>
        </thead>
        <tbody>
        {/* this is to iterate over each product */}
        {
          props.products &&
            props.products.map( product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={function() { props.addItem(product.id);  props.getTotal(product.id)}}>Add to cart</button>
                </td>
              </tr>
            )
        }
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default ProductsTable;
