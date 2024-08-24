import React from "react";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div>
        <img
          className={styles.imageContainer}
          src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
          alt={item.name}
          title={item.name}
        />
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount}>
          {item.amount} {item.unit} {/* {item.measures.metric.amount}{" "} */}
        </div>
      </div>
    </div>
  );
};

export default Item;
