import React from 'react'
import styles from "./Product.module.css"

const Product_card = (props) => {
  console.log(props.products);
  return (
    <div className={styles.products_list}>
      {
        props.products.map(oneProduct => (
          <div className={styles.card}>

        <a href="#">{oneProduct.category}</a>
        <p>{oneProduct.title}</p>
        <div>
        <p>{oneProduct.price}</p>
        </div>
        <img src={oneProduct.image} className={styles.img}/>
        </div>
        ))
      }
    </div>
  )
}

export default Product_card