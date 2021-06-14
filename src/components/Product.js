import React from "react";
import { Link } from "react-router-dom";
import styles from "../css components/service.module.css";

const Product = ({ priceList }) => {
  console.log(priceList);
  return (
    <>
      {priceList && priceList.map(service => {
        return (
          <>
            <div className={styles.name_wrapper}>
              <span className={styles.name_service}>{service[0]}</span>
              <span className={styles.price}>{service[1]}</span>
            </div>
          </>
        )
      })}
      
    </>
  );
};

export default Product;
