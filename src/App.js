import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar';
import List from './components/List/List';
import Profile from './components/Profile/Profile';
import AddListItem from './components/ListItem/AddListItem';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: {
      //   name: "test",
      //   image: "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
      //   price: "$4.00"
      // }
    };
  }

  render() {
    const { items } = this.props
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar />
          <Switch>
            <Route exact path="/"> 
              <div className="container">
                <div className="profile">
                  <Profile />
                </div>
                <List listName="Test List" items={ items }/>
                {/* <List listName="Test List" items={ this.state.items }/>
                <List listName="Test List" items={ this.state.items }/> */}
              </div>
            </Route>
            <Route path='/add' component={AddListItem}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.item.items
  }
}

export default connect(mapStateToProps)(App);
