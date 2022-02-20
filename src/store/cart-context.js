import React from 'react'
const CartContext = React.createContext({
  items: [],
  totalAmountL0,
  addItem: item => {},
  removeItem: id => {}
})

export default CartContext
