import { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import UserItems from './components/users/UserItems';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar title='Github Finder' />
        <UserItems />
      </div>
    );
  }

}

export default App;
