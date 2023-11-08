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

  const userCart = [];

  const [cart, setCart] = useState(userCart);

  const count = 0;

  const [itemCount, setCount] = useState(count);

  const selectProducts = (listProducts) => 
  <select>{
      listProducts.map((item, index) =>
      <option key={index}>{item}</option>
      )}</select>;

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
      </div>*/}

  return (
    <>
      <h1>Shopping Cart</h1>
      <form>
        <label htmlFor=''>Products:</label>
        {selectProducts(products)}
        <button type="submit">Add To Cart</button>
      </form>
      <p>
        {itemCount === 0 ? "Add Some Items" : "You have " + {itemCount} +  " item(s) in your cart"}
      </p>
    </>
  )
}

export default App
