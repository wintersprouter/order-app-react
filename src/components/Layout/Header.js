import { Fragment } from 'react'

import mealsImage from '../../asset/meals.jpeg'
import classes from './Header.module.css'
const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>披薩屋線上點餐</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="餐點" />
      </div>
    </Fragment>
  )
}
export default Header
