import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

class App extends Component {
  constructor(props) {
    super(props);

    this.addRecipe = this.addRecipe.bind(this);

    this.state = {
      selectedRecipe: null,
      recipes: {}
    };
  }

  addRecipe(recipe) {
    console.log(recipe);
    const recipes = {...this.state.recipes};
    const timestamp = Date.now();
    recipes[`recipe-${timestamp}`] = recipe;
    this.setState({ recipes });
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <RecipeList
          addRecipe={this.addRecipe}
        />
        <RecipeDetail />
      </div>
    );
  }
}

export default App;
