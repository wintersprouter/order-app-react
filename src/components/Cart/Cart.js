import classes from './Cart.module.css'

const Cart = props => {
  const cartItems = (
    <ul className={classes['cart-item']}>
      {[
        {
          id: 'm1',
          name: '蝦猴酥蚵仔比薩煎',
          amount: 2,
          price: 389 * 2
        },
        {
          id: 'm3',
          name: '星級白醬海鮮',
          amount: 3,
          price: 520 * 3
        }
      ].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  )
  return (
    <div className={classes.cart}>
      <div>{cartItems} </div>
      <div className={classes.total}>
        <span>總金額</span>
        <span>2003</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>關閉</button>
        <button className={classes.button}>點餐</button>
      </div>
    </div>
  )
}
export default Cart
