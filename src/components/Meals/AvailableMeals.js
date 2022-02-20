import Card from '../UI/Card'
import MealItems from '../Meals/MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '蝦猴酥蚵仔比薩煎',
    description:
      '集結「蚵仔煎」美味精華：粒粒肥美多汁的嘉義東石鮮蚵、金燦誘人的雞蛋絲與脆甜爽口小白菜，再以台式必備辛香料蒜頭與辣椒提味。最後鋪滿炸得金黃酥脆的「蝦猴酥」在比薩上，散發濃濃鹹香，一口咬下「卡滋卡滋」迷人聲響，簡直太犯規！',
    price: 389
  },
  {
    id: 'm2',
    name: '哈辣墨西哥比薩',
    description:
      '新鮮洋蔥配上超辣的墨西哥辣椒，及美式臘腸，義大利肉腸，香辣夠味，哈辣族最愛',
    price: 390
  },
  {
    id: 'm3',
    name: '星級白醬海鮮',
    description:
      '匯集肥美鮮蝦與Ｑ彈魷魚與高品質蛤蜊，淋上濃郁香蔥白醬，星級海鮮饗宴即刻上桌！',
    price: 520
  },
  {
    id: 'm4',
    name: '壽喜雪花牛',
    description:
      '嚴選口感柔軟、油花分布均勻飽滿的美國雪花牛，佐以純正日式風味壽喜醬汁，再配上蘑菇及新鮮洋蔥、紅椒，豐盛餡料重磅登場！',
    price: 480
  }
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItems
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItems>
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
