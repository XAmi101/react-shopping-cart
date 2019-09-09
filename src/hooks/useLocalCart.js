import { useEffect, useContext } from "react";
import useLocalStorage from "./useLocalStorage";
import { CartContext } from "../contexts/CartContext";

const useLocalCart = () => {
  const { cart } = useContext(CartContext);
  const [someCart, setSomeCart] = useLocalStorage("cart", cart);

  useEffect(() => {}, [cart]);

  return [someCart, setSomeCart];
};

export default useLocalCart;