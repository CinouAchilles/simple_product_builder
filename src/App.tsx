import { useState } from 'react'
import './App.css'
import './index.css'

import Model from './components/Model'
import ProductCard from './components/ProductCard'
import ButtonComp from './components/ButtonComp'
import InputForm from './components/InputForm'

import { colorsList, dummyProducts, inputFieldList } from './data/dummyProducts'
import type { IProduct } from './interfaces/Iproduct'
import { validateInput } from './validation'
import ColorsRound from './components/ColorsRound'

function App() {
  // 🔷 Default Product Structure
  const defaultValues: IProduct = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    stockStatus: "In Stock",
    colors: [],
    category: {
      name: '',
      imageUrl: ''
    }
  }

  // 🔷 State
  const [isOpen, setIsOpen] = useState(false)
  const [errors, setErrors] = useState<Partial<IProduct>>({})
  const [productData, setProductData] = useState<IProduct>(defaultValues)

  // 🔷 Handlers
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    })
    checkForErrors()
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const checkForErrors = () => {
    const errors = validateInput({
      name: productData.name,
      description: productData.description,
      imageUrl: productData.imageUrl,
      price: String(productData.price)
    })
    setErrors(errors)
    console.log(errors)

    if (Object.keys(errors).length > 0) {
      console.log(Object.keys(errors))
      return
    }
  }

  const handleSubmit = () => {
    console.log(productData)
    checkForErrors()
    //from here an a go u can submit the data to ur server or API
  }

  const handleCancel = () => {
    closeModal()
    setProductData(defaultValues)
    setErrors({})
  }

  // 🔷 Renderers
  const renderProducts = () => {
    return dummyProducts.map((product) => (
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
    ))
  }

  const renderInputFields = inputFieldList.map((input) => (
    <div
      key={input.id}
      className="mb-2 flex flex-col transition-all duration-200 hover:scale-[100.25%] py-1 rounded-lg"
    >
      <label
        htmlFor={input.id}
        className="block text-sm font-semibold text-gray-800 mb-1"
      >
        {input.label}
      </label>
      <InputForm
        value={productData[input.name]}
        onChange={onChangeHandler}
        type={input.type}
        id={input.id}
        name={input.name}
      />
      <p className='text-red-500 text-xs italic'>
        {typeof errors[input.name] === 'string'
          ? (errors[input.name] as string).toUpperCase()
          : errors[input.name]}
      </p>
    </div>
  ))

  // 🔷 Render
  return (
    <div className='container mx-auto '>
      <Model
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        openModal={openModal}
        title='ADD NEW PRODUCT'
      >
        <form className="w-full bg-white " onSubmit={(e) => e.preventDefault()}>
          {renderInputFields}
          <ColorsRound colors={colorsList} />
        </form>
        <div className='w-full mt-3 flex items-center gap-3 '>
          <ButtonComp
            btntext='Submit'
            classname="bg-blue-500 hover:bg-blue-600 "
            onClick={handleSubmit}
          />
          <ButtonComp
            btntext='Cancel'
            classname='bg-gray-600 hover:bg-gray-700'
            onClick={handleCancel}
          />
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
