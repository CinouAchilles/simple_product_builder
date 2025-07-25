import type { IProduct } from "../interfaces/Iproduct";
import { formatColorsSlicing, formatTextSlicing } from "../utils/functions";
import ButtonComp from "./ButtonComp";
import ImageComp from "./ImageComp";

type ProductCardProps = IProduct & {
  openModal: () => void;
};

export default function ProductCard(props: ProductCardProps) {
  const {
    name,
    description,
    price,
    stockStatus,
    imageUrl,
    colors,
    openModal,
  } = props;

  return (
    <div className="w-full md:max-w-[380px] mx-auto  border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <ImageComp
        imageUrl={imageUrl || "https://placehold.co/150"}
        altText={name}
        classname="rounded-lg object-cover w-full h-48"
      />

      <div className="flex flex-col justify-between flex-grow mt-3 sm:mt-4">
        <div className="product-details min-h-[130px] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
            <p className="text-gray-600 text-sm mb-3">{formatTextSlicing(description, 75)}</p>
          </div>

          <div className="flex items-center gap-2 my-3">
            {
              formatColorsSlicing(colors).map((color, idx) => (
                <span
                  key={color + idx}
                  className="w-5 h-5 rounded-full cursor-pointer transition-transform hover:scale-110"
                  style={{
                    backgroundColor: color,
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
                  }}
                  aria-label={`Color: ${color}`}
                  title={color}
                />
              ))
            }
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-gray-900">${(typeof price === "number" ? price : parseFloat(price)).toFixed(2) || "0.00"}</span>
            <span className={`text-sm px-2 py-1 rounded-full ${stockStatus === "In Stock"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
              }`}>
              {stockStatus}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ButtonComp
              classname="bg-blue-500 hover:bg-blue-600 "
              btntext="Edit"
              onClick={() => {
                console.log("Edit button clicked");
                openModal();
              }}
            />
            <ButtonComp
              classname="bg-red-500 hover:bg-red-600"
              btntext="Delete"
              onClick={() => {
                console.log("Delete button clicked");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}