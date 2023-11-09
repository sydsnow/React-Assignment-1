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

  // const userCart = [];

  const [cart, setCart] = useState([]);

  // const count = 0;

  const [itemCount, setItemCount] = useState(0);

  const selectProducts = (listProducts) => 
    <select>{
      listProducts.map((item, index) =>
      <option key={index}>{item}</option>
         )}</select>;

  const addItems = (event) => {
    event.preventDefault();
    const item = event.target.elements.products.value;
    // if(cart.includes(item)) {
    //   const items = { ... itemCount};
    //   items.itemCount += 1;
    //   setItemCount(items);
    // }
    // else {
    //   setCart([ ... cart, item])
    // }
    if(cart.includes(item)){
      setCart(item.quantity += 1);
      let moreItems = { ... itemCount};
      moreItems += 1;
      setItemCount(moreItems);
    }
    else {
      const newItem = {
        itemName: item,
        quantity: 1
      };
      setCart([ ... cart, newItem]);
    }

  }
      
  // const selectProducts = (listProducts) => {
  //   const items = listProducts.map((item, index) => {
  //     return <li key={index}>{item}</li>;
  //   });
  //   return <ul>{items}</ul>
  // }

{/* {selectProducts(products)}<input>{selectProducts(products)}</input> 
<select><input>{selectProducts(products)}</input></select>
        <input><select><option>{selectProducts(products)}</option></select></input>
      <div className='cart-items'>
        <ul>
          <li>{products[index]}</li>
        </ul>
      </div>
    onClick={addItems(event)}
  <input id='select-product'>{selectProducts(products)}</input>*/}

  return (
    <>
      <h1>Shopping Cart</h1>
      <form>
        <label htmlFor='select-product'>Products:   </label>
        {selectProducts(products)}
        <button type="submit">Add To Cart</button>
      </form>
      {cart.quantity > 1 &&
      <div className='cart-items'>
      <ul>
        <li>{cart.quantity === 1 ? cart.itemName : `${cart.itemName} x${cart.quantity}`}</li>
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
