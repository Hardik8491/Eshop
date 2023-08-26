import { removeFromBasket, selectItems } from "@/basketSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../basketSlice";
function CheckOutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hashPlus,
}: {
  id: string;
  title: string;
  price: number;
  rating: string;
  description: string;
  category: string;
  image: string;
  hashPlus: string;
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hashPlus,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image
        src={image}
        height={200}
        width={200}
        alt="image"
        objectFit="contain"
      />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex ">
          {Array(rating)
            .fill("")
            .map((_, i) => (
              <svg
              key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 text-yellow-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
        </div>
        <p className="text-xs mx-2 my-2 line-clamp-3">{description}</p>
        <div className="mb-5">
          <p>${price}</p>
        </div>
        {hashPlus && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Desktop_600x220.jpg"
              className="w-12"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end  ">
        <button
          className="mt-auto p-2  md:text-s rounded-xl text-xl bg-[#1133f7ea] shadow-sm focus:outline-none focus:ring-2  text-gray-300 font-semibold "
          onClick={addItemToBasket}>
          {" "}
          Add to Basket
        </button>
        <button
          className="mt-auto p-2  md:text-s rounded-xl text-xl bg-[#1133f7ea] shadow-sm focus:outline-none focus:ring-2  text-gray-300 font-semibold"
          onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
        {/* <button
     
     className="mt-auto p-2  md:text-s rounded-xl text-xl bg-[#1133f7ea] shadow-sm focus:outline-none focus:ring-2  text-gray-300 font-semibold">
   Shop Now
   </button>  */}
      </div>
    </div>
  );
}
export default CheckOutProduct;
