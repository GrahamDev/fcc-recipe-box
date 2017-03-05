import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

class App extends Component {
  constructor(props) {
    super(props);

    this.addRecipe = this.addRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);

    const store = JSON.parse(localStorage.getItem('__fcc-recipe-box'));
    if (store) {
      this.state = store;
    } else {
      this.state = {
        selectedRecipe: null,
        recipes: {}
      };
    }
  }

  componentWillUpdate(newProps, newState) {
    localStorage.setItem('__fcc-recipe-box', JSON.stringify(newState));
  }

  addRecipe(recipe) {
    const recipes = {...this.state.recipes};
    const timestamp = Date.now();
    recipes[`recipe-${timestamp}`] = recipe;
    this.setState({ recipes });
  }

  removeRecipe(key) {
    const recipes = {...this.state.recipes};
    delete recipes[key];
    this.setState({ recipes });
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <RecipeList
          addRecipe={this.addRecipe}
          removeRecipe={this.removeRecipe}
          recipes={this.state.recipes}
        />
        <RecipeDetail />
      </div>
    );
  }
}

export default App;
