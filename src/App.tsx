import './App.css'
import ProductCard from './components/ProductCard'
import { dummyProducts } from './data/dummyProducts'
import "./index.css"

function App() {

      //   // Limit colors to 4, add "..." if more
      // const displayColors =
      //   product.colors.length > 4
      //     ? [...product.colors.slice(0, 4), "..."]
      //     : product.colors;
      
  const renderProducts = ()=>{
    return dummyProducts.map((product)=>
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          imageUrl={product.imageUrl}
          price={product.price}
          stockStatus={product.stockStatus}
          colors={product.colors}
          category={product.category}
        />
    )
  }


  return (
    <div>
      <h1 className='bg-red-200'>React Ts</h1>
      <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ' >
        {renderProducts()}
      </div>
    </div>
  )
}

export default App
