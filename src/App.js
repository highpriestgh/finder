import { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  }
  
  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data)

    this.setState({ loading: false, users: res.data })
  }
  render() {

    return (
      <div className="App">
        <Navbar title='Github Finder' />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );
  }

}

export default App;
