import React from 'react'



class RecipeListItem extends React.Component {
  // removeRecipe() {
  //   console.log(this);
  //   this.props.removeRecipe(this.props.recipeKey);
  // }

  render () {
    const title = this.props.recipe.title;
    return (
      <li>
        {title}
        <a ref={this.props.recipe} href="#"
          onClick={() => this.props.removeRecipe(this.props.recipeKey)}>X<
        /a>
      </li>
    )
  }
}

export default RecipeListItem;
