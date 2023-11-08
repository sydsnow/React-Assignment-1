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

const selectProducts = (listProducts) => 
<select>{
    listProducts.map((item, index) =>
    <option key={index}>{item}</option>
    )}</select>

  return (
    <>
      <h1>Shopping Cart</h1>
      <section>
      <h3>Products: </h3> 
        <form>
          {selectProducts(products)}
          <button type="submit">Add To Cart</button>
        </form>
      </section>
    </>
  )
}

export default App
