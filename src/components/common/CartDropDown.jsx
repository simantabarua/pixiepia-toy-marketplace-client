import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../redux/feature/cart/cart";

const CartDropdown = ({ cart }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
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
        <div className="absolute -left-52 md:-left-40 xl:-left-0 w-60 px-2 py-3  border-gray-100 bg-white rounded-lg shadow border border-transparent mt-5">
          {cart.items.length > 0 ? (
            <>
              <ul className="space-y-3 text-gray-800">
                {cart.items.map((item, index) => (
                  <li className="font-medium flex items-center gap-2" key={item?.id}>
                    <Link
                      to={`/toydetails/${item?.id}`}
                      className="flex flex-1 items-start justify-between transform
                    transition-colors duration-200 gap-2"
                    >
                      <span className="text-base">{index + 1}.</span>
                      <span className="text-xs flex-1">{item?.productName}</span>
                      <span className="flex items-center justify-center text-base w-6 h-6 bg-gray-400 text-white">
                        {item?.quantity}
                      </span>
                    </Link>
                    <button
                      onClick={() => handleRemoveItem(item?.id)}
                      className=" text-pink-600" 
                    >
                      <AiOutlineClose className="w-5 h-5 " />
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
            </>
          ) : (
            <p className="text-gray-800 text-center">Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
