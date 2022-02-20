import Input from '../../UI/Input.js'
import classes from './MealItemForm.module.css'
const MealItemForm = props => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  )
}

export default MealItemForm