import React from 'react'
import styles from "./Category_list.module.css"

const Category_list = (props) => {
    console.log(props.products);
    const allcategories = [];

    props.products.map((item) => {
     const categoryItem = item.category;
      return allcategories.push(categoryItem);
    })

    let uniqueCategory = [...new Set(allcategories)];
    console.log(uniqueCategory);

    let myId = "labas";

    function getFilteredData(category) {
      myId = category;
      return myId;
    }

    console.log(myId);

  return (
    <div className={styles.container}>
      {
        uniqueCategory.map(item => (
           <button className={styles.btn} onClick={() => getFilteredData(item)}>{item}</button>
        ))
      }
       <button className={styles.btn} onClick={() => getFilteredData("all")}>All</button>
      </div>
  )
}

export default Category_list