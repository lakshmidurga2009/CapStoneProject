import React, { createContext} from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext =  createContext(null);


const ShopContextProvider = (props) => {
    const cartItems = [];

    const removeFromCart = () => {
  
    }
  
    const getTotalCartAmount = () => {
      return 100;
    }
    const contextValue ={all_product, cartItems, removeFromCart, getTotalCartAmount};
return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider;
