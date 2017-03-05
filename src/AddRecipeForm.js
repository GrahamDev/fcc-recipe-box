import React from 'react';

class AddRecipeForm extends React.Component {
  addRecipeTitle(e) {
    e.preventDefault();
    const recipe = {
      title: this.title.value
    }
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
  }

  render () {
    return (
      <div>
        <h4>Add Recipe Form</h4>
        <form ref={(input) => this.recipeForm = input}>
          <input ref={(input) => this.title = input} type="text"  />
          <button type="submit" onClick={(e) => this.addRecipeTitle(e)}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default AddRecipeForm;
