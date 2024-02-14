import { useState } from "react"
import "./style.css"
import { useEffect } from "react"

const LoadMore = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`);
      const result = await response.json()

      if (result && result.products && result.products.length > 0) {
        setProducts(prev => [...prev, ...result.products])
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count]);


  return (
    <div>
      pr
      <div className="allProducts">
        {products && products.length 
        ? products.map((product) => (
         //const {id, title, description, price, thumbnail } = product
            <div key={product.id} className="oneProduct">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.thumbnail} alt={product.title} className="image" />
              <p>{product.price} USD</p>
            </div>
         )) : loading? <p> Loading... </p> : <p> No products found</p> }
      </div>

      <div>
        <button onClick={() => setCount(count => count + 1)}>load more</button>
      </div>
    </div>
  )
}

export default LoadMore;
