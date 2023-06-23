import { useEffect, useReducer } from "react";
import CartContext from "./Context";
import CartReducer from "./Reducer";

const initialState = {
  cartItems: []
}

const CartState = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, initialState)

  //localstorage 
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) {
      //checking if there already is a state in localstorage
      dispatch({
        type: "STORE_STATE",
        value: JSON.parse(localStorage.getItem("state")),
        //if yes, update the current state with the stored one
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
      //create and/or set a new localstorage variable called "state"
    }
  }, [state]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
    //add new item to global state
  }

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
    //remove item from global state
  }

  const changeItemQuantity = (item, e) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: { id: item.id, qty: e.target.value } })
    //change item's quantity
  }

  const clearCart = (item) => {
    dispatch({ type: 'CLEAR_CART', payload: item })
  }

  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      addToCart,
      removeFromCart,
      changeItemQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartState