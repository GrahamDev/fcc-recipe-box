import React from 'react';
import AddRecipeForm from './AddRecipeForm'
import RecipeListItem from './RecipeListItem'

class RecipeList extends React.Component {
  render () {
    return (
      <div>
        <h4>Recipe List</h4>
        <ul>
          {
            Object
              .keys(this.props.recipes)
              .map((key) => <RecipeListItem
                key={key}
                recipeKey={key}
                recipe={this.props.recipes[key]}
                removeRecipe={this.props.removeRecipe}
              />)

          }
        </ul>
        <AddRecipeForm addRecipe={this.props.addRecipe}/>
      </div>
    )
  }
}

export default RecipeList;
