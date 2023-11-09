import { useState } from 'react'
import './App.css'

function App() {

  const products = [
    "Turkey Bacon",
    "Eggs",
    "Yogurt",
    "Coffee",
    "Almond Milk",
    "Bagels",
    "Apples"
  ];

  const [cart, setCart] = useState([]);

  const [itemCount, setItemCount] = useState(0);

  const selectProducts = (listProducts) => 
    <select name="products" id='products'>{
      listProducts.map((item, index) =>
      <option key={index}>{item}</option>
         )}</select>;

  const addItems = (event) => {
    event.preventDefault();
    const item = event.target.elements.products.value;

    const itemIndex = cart.findIndex(itemObj => itemObj.itemName === item);
    if(itemIndex >= 0){
    // if(cart.findIndex(item) >= 0){
      const newCart = {...cart};
      newCart[cart.findIndex(item)].quantity += 1;
      // newCart[itemIndex].quantity = parseInt(newCart[itemIndex].quantity) + 1;
      setCart(newCart);
      setItemCount(itemCount + 1);
    }
    else {
      const newItem = {
        itemName: item,
        quantity: 1
      };
      setCart([ ... cart, newItem]);
      setItemCount(itemCount + 1);
    }
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <form onSubmit={addItems}>
        <label htmlFor='select-product'>Products:   </label>
        {selectProducts(products)}
        <button type="submit">Add To Cart</button>
      </form>
      {itemCount >= 1 &&
      <div className='cart-items'>
        <ul>
          {cart.map((item, index) => {
            return (
              <li key={index}>{item.quantity === 1 ? item.itemName : `${item.itemName} x${item.quantity}`}</li>
            )
          })}
        </ul>
      </div>
      }
      <p>
        {itemCount === 0 ? "Add Some Items" : `You have ${itemCount} item(s) in your cart`}
      </p>
    </>
  )
}

export default App
