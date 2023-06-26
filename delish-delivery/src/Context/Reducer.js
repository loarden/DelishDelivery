const CartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload, qty: 1}]
      } 
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
      } 
    }
    case 'CHANGE_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems.filter(c => c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        )
      }
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        cartItems: state.cartItems.splice(0,state.length)
      }
    }
    case "STORE_STATE": {
      return action.value
    }
    default:
      return state
  }
}

export default CartReducer