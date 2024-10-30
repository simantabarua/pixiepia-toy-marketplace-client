import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const CartDropdown = ({ cart }) => {
    const [open, setOpen] = useState(false);
    console.log(cart)
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`relative border-b-4 border-transparent py-3 ${
        open ? "border-indigo-700 transform transition duration-300" : ""
      }`}
    >
      <div className="relative">
        <div className="absolute -top-2 left-3">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {cart.items.length}
          </p>
        </div>
        <BsCart3 className="h-6 w-6 text-gray-700" />
      </div>
      {open && (
        <div className="absolute w-60 px-5 py-3 bg-white rounded-lg shadow border border-transparent mt-5">
          <ul className="space-y-3">
            {cart?.items?.map((item) => (
              <li key={item._id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-3">{item.name}</span>
                  <span className="text-gray-500">{item.price}</span>
                </div>
                <button className="text-red-600 hover:text-red-800">
                  <AiOutlineClose />
                </button>
              </li>
            ))}
          </ul>
          <hr className="border-gray-700 my-2" />
          <div className="text-center">
            <button className="bg-pink-600 text-white py-1 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
