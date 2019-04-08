import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div className="App">
      <List image="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" name="Mac" price="$4.00" />
      </div>
    );
  }
}

export default App;
