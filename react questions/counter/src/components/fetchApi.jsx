import React from "react";
import { useState, useEffect } from "react";
import Fetchdata from "./fetchdata";

const FetchApi = () => {
  const [product, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return <div className="maincontainer">
    {
        // product.map(item => (
        //     <div key={item.title}>
        //     <h3 >{item.title}</h3>
        //     <img src={item.images[0]} alt={item.title} width="200" />
        //     </div>
        // ))

        // product ? <Fetchdata title = {product.title}/> : <p>"Invalid api"</p>
        product.map(item => (
            <Fetchdata key={item.id} title ={item.title}/>
        ))
    }
  </div>;
};

export default FetchApi;
