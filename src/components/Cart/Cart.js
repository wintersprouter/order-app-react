import { useContext } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = props => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {}
  const cartItemAddHandler = idem => {}
  const cartItems = (
    <ul className={classes['cart-item']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )
  return (
    <Modal onClose={props.onClose}>
      <div>{cartItems} </div>
      <div className={classes.total}>
        <span>總金額</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          關閉
        </button>
        {hasItems && <button className={classes.button}>點餐</button>}
      </div>
    </Modal>
  )
}
export default Cart
