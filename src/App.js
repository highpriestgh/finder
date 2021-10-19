import { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar title='Github Finder' />
        <div className="container">
          <Users />
        </div>

      </div>
    );
  }

}

export default App;
