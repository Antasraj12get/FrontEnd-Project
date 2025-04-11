import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    let res = await fetch("https://dummyjson.com/products?limit=100");
    let data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }

    console.log(data); // ✅ Logs all product data to browser console
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div id="products">
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((item) => {
            return (
              <span key={item.id} id="product--single">
                <img src={item.images} alt={item.title} />
                <h1>{item.title}</h1>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div id="pagination">
          <span 
                    className={page > 1 ? " " : "disable"}

          onClick={() => selectedPageHandler(page - 1)}>⬅️</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "selected_page" : ""}
                onClick={() => selectedPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < products.length / 10 ? "" : "disable"}
            onClick={() => selectedPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
