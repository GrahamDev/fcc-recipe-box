import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRecipe: null,
      recipes: []
    };
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <RecipeList />
        <RecipeDetail />
      </div>
    );
  }
}

export default App;
