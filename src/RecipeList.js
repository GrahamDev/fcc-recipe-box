import React from 'react';
import AddRecipeForm from './AddRecipeForm'

class RecipeList extends React.Component {
  render () {
    return (
      <div>
        <h4>Recipe List</h4>
        <AddRecipeForm addRecipe={this.props.addRecipe}/>
      </div>
    )
  }
}

export default RecipeList;
