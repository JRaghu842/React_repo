import { useDispatch, useSelector } from "react-redux";
import FoodCart from "./FoodCard";
import { clearItem } from "../utils/cartSlice";

let Cart = () => {
  let cartItems = useSelector((store) => store.cart.items);

  let dispatch = useDispatch();

  let handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div>
      <h1 className="font-semibold text-2xl m-4">
        {cartItems.length} Items in Cart
      </h1>
      <button
        className="py-3 px-5 m-3 bg-red-200"
        onClick={() => handleClearCart()}
      >
        {" "}
        Clear All
      </button>
      <hr />
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodCart {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
