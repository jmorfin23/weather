import React, {Component} from 'react';
import './index.css';
import ProductsTable from '../../components/productsTable';
import ProductsCart from '../../components/productsCart';
import firebase from '../../firebase';
// import Footer from '../../components/footer';

let products = [
  {
    'id': 1,
    'name': 'Hat',
    'price': 19.99
  },
  {
    'id': 2,
    'name': 'Shirt',
    'price': 29.99
  }
]
//variable for total amount to display
let t = 0;

class Commerce extends Component{
    constructor() {
      super();

      this.state = {
        'products': [],
        'cart': [],
        'total': 0
      }

      firebase.database().ref('products').set(products);

    }
    //upload products to firebase fro reference
    //only need to do this once, to add or remove
    //products, must create a method to o so.

    componentWillMount() {
      // this.setState({ products });

      //load products from firebase and set products into local state
      const db_products = firebase.database().ref('products');
      const db_cart = firebase.database().ref('cart');
      let products = [];

      //loop throgh the db cart and update local state
      db_cart.on('value', response=> {
        let data = response.val();


        let cart = [];

        for (let i in data) {
          cart.push(data[i]);
        }

        this.setState({ cart });
        // if (typeof data !== null) {
        //     this.setState({ 'cart': data });
        // }
      })

      //loop through the database response
      db_products.on('value', response => {
        let data = response.val();

        this.setState({ 'products': data });

      })
    }
    addItem = id => {
      //set state variables into local, as not to alter the state directly
      let products = this.state.products;
      let cart = this.state.cart;

      for (let i in products) {
        if(products[i].id == id) {
          cart.push(products[i]);
          break;
        }
      }
      //set the state with updated values
      this.setState({ cart });
      //update cart value on firebase
      firebase.database().ref('cart').set(cart);
    }

    removeItem = id => {
      let cart = this.state.cart;
      for(let i in cart) {
        if (cart[i].id == id) {
          cart.splice(i, 1);
          break;
        }
      }
      //reset the state
      this.setState({ cart });

      //update cart value on firebase
      firebase.database().ref('cart').set(cart);
    }

    addTotal = id => {
      let product = this.state.products;
      for (let i in product) {
        if (id == product[i]['id']) {
          t += product[i]['price'];
          //setting the state for 'total'
          this.setState({ 'total' : t});
        }
      }
      // console.log(id);
    }
    subTotal = id => {
      let product = this.state.products;
      for (let i in product) {
        if (id == product[i]['id']) {
          t -= product[i]['price'];
          //resetting the state for 'total'
          this.setState({'total': t});
        }
      }
    }
// function for suming the total

    render() {
      {/*console.log(this.state.cart);*/}
    return (
      <div className="Commerce">
        <h1>Commerce View</h1>
        <ProductsTable products={this.state.products} addItem={this.addItem} getTotal={this.addTotal}/>
        <h1> Shopping Cart</h1>
        <ProductsCart cart={this.state.cart}
        removeItem={this.removeItem} total={this.state.total} subTotal={this.subTotal}/>
      </div>

    );
  }
}

export default Commerce;
