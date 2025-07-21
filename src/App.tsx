import { useState } from 'react'
import './App.css'
import Model from './components/Model'
import ProductCard from './components/ProductCard'
import { dummyProducts, inputFieldList } from './data/dummyProducts'
import "./index.css"
import ButtonComp from './components/ButtonComp'
import InputForm from './components/InputForm'
import type { IProduct } from './interfaces/Iproduct'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const [productData, setProductData] = useState<IProduct>({
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    stockStatus: 'In Stock',
    colors: [],
    category: {
      name: '',
      imageUrl: ''
    }
  })
  const onChangeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name , value} = e.target;
    setProductData({
      ...productData,
      [name]: value
    })
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  //   // Limit colors to 4, add "..." if more
  // const displayColors =
  //   product.colors.length > 4
  //     ? [...product.colors.slice(0, 4), "..."]
  //     : product.colors;

  const renderProducts = () => {
    return dummyProducts.map((product) =>
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
        openModal={openModal}
      />
    )
  }
  const renderInputFields = inputFieldList.map((input, index) => (
    <div
      key={index}
      className="mb-3 flex flex-col transition-all duration-200 hover:scale-[100.5%] py-1 rounded-lg"
    >
      <label
        htmlFor={input.id}
        className="block text-sm font-semibold text-gray-800 mb-1"
      >
        {input.label}
      </label>
      <InputForm value={productData[input.name]} onChange={onChangeHandler} type={input.type} id={input.id} name={input.name} />
    </div>
  ))


  return (
    <div className='container mx-auto '>
      {/* <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button> */}
      <Model isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} openModal={openModal} title='ADD NEW PRODUCT' >
        <form className="w-full bg-white " onSubmit={(e) => {
          e.preventDefault();
        }}>
          {renderInputFields}
        </form>
        <div className='w-full mt-3 flex items-center gap-3 '>
          <ButtonComp btntext='Submit' classname="bg-blue-500 hover:bg-blue-600 " onClick={() => {
            console.log(productData);
          }} />
          <ButtonComp btntext='cancel' classname='bg-gray-600 hover:bg-gray-700' onClick={closeModal} />
        </div>
      </Model>
      <h1 className='bg-red-200'>React Ts</h1>
      <div className='mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-4 gap-4 md:gap-6'>
        {renderProducts()}
      </div>
    </div>
  )
}

export default App
