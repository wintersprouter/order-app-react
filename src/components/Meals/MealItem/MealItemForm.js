import { useRef, useState } from 'react'
import Input from '../../UI/Input.js'
import classes from './MealItemForm.module.css'
const MealItemForm = props => {
  const amountInputRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)
  const submitHandler = event => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="數量"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ 新增</button>
      {!amountIsValid && <p>請輸入有效的數量(1-5)</p>}
    </form>
  )
}

export default MealItemForm
