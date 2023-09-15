import { useSelector } from "react-redux";
import FoodCart from "./FoodCard";

let Cart = () => {
  let cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1 className="font-semibold text-2xl m-4">
        {cartItems.length} Items in Cart
      </h1>
      <hr />
      {cartItems.map((item) => {
        return <FoodCart {...item} key={item.id} />;
      })}
    </div>
  );
};

export default Cart;
