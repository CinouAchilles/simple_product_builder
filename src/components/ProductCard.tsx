import type { IProduct } from "../interfaces/Iproduct";
import ButtonComp from "./ButtonComp";
import ImageComp from "./ImageComp";

export default function ProductCard(props: IProduct) {
  const {
    name,
    description,
    price,
    stockStatus,
    imageUrl,
    colors
  } = props;

  return (
    <div className="border rounded-md p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <ImageComp imageUrl={imageUrl || "https://placehold.co/150"} altText={name} classname="rounded-t-md" />

      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>

        <div className="flex items-center gap-2 my-2">
          {(colors || []).map((color, idx) => (
            <span
              key={idx}
              className="w-5 h-5 rounded-full cursor-pointer"
              style={{ backgroundColor: color , border: "0.5px solid #ccc" }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${price.toFixed(2) ?? "0.00"}</span>
          <span className="text-sm text-gray-500">{stockStatus}</span>
        </div>

        <div className="flex items-center justify-between mt-5 space-x-2">
          <ButtonComp classname="bg-blue-500  hover:bg-blue-600" btntext="edit" onClick={() => {
            console.log("Edit button clicked");
          }} />
          <ButtonComp classname="bg-red-500 hover:bg-red-600" btntext="delete" onMouseEnter={() => {
            console.log("Delete button clicked");
          }} />
        </div>
      </div>
    </div>
  );
}
