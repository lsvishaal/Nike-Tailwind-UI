import PopularProductsCard  from "../Components/PopularProductsCard"
import { products } from "../constants"


const PopularProducts = () => {
  return (
    <div id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our 
          <span className="text-coral-red"> Popular </span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience the top-notch quality and style of our products. We have a wide range of products that are perfect for any occasion.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
      
    </div>
  )
}

export default PopularProducts
