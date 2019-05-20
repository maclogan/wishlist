import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import List from './components/List/List';
import Profile from './components/Profile/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        name: "test",
        image: "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
        price: "$4.00"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="container">
          <div className="profile">
            <Profile />
          </div>
          <List listName="Test List" items={ this.state.items }/>
          <List listName="Test List" items={ this.state.items }/>
          <List listName="Test List" items={ this.state.items }/>
        </div>
      </div>
    );
  }
}

export default App;
