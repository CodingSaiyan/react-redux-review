import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

import AddItem from './components/AddItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.list.map(element => <p>{element}</p>)}
        <AddItem/>
      </div>
    );
  }
}

// The list being rendered in this component comes straight from redux. Another component is handling adding to that list and whenever an item is added to the list this component will rerender with the new list from the redux store
function mapStateToProps(state) {
  return {
    list: state.list
  };
}

// This syntax is for invoking a returned function. So connect(mapStateToProps) return a function and we can call it as soon as it returns by putting (App) right next to it
export default connect(mapStateToProps)(App);
