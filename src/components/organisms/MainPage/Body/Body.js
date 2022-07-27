import BodyWrapper from './BodyWrapper'
import Recipes from '../Recipes/Recipies'



const Body = ({ recipes }) => {
  return (
    <BodyWrapper>
      <Recipes recipes={recipes}/>
    </BodyWrapper>
  )
}

export default Body
