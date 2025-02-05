import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { json, NavLink } from 'react-router-dom';

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loding, setLoding] = useState(false)
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoding(true);
      const res = await fetch("https://fakestoreapi.com/products")
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoding(false)
        // console.log(filter);

      }
      return () => {
        componentMounted = false
      }
    }

    getProducts();

  }, [])

  const Loding = () => {
    return (
      <>
        <h3 className='display-3 fw-bolder text-center'>LOADING...</h3 >
      </>
    )
  }


  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  }

  const ShowProducts = () => {

    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark mx-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark mx-2" onClick={() => filterProduct('electronics')}>Electronic </button>
        </div>
        {
          filter.map((product) => {

            return (

              <>
                <div className="col-md-3 mb-5">
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{product.title}</h5>
                      <p className="card-text lead fw-bold">{product.price}</p>
                      <NavLink style={{ textDecoration: "none", border: "1px solid black", background: "green", color: "white", padding: "5px 5px" }} to={`/products/${Products.id}`} class="btn btn-outline-dark ">Buy Now</NavLink>
                    </div>
                  </div>

                </div>
              </>
            )
          })
        }
      </>

    )
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='text-center display-6 fw-bolder'>Latest Products</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row justify-content-center">
          {loding ? <Loding /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}
