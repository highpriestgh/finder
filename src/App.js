import { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({ loading: false, users: res.data })
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true })

    const resp = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    console.log(resp.data.items)
    this.setState({ loading: false, users: resp.data.items })
  }
  render() {

    return (
      <div className="App">
        <Navbar title='Github Finder' />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );
  }

}

export default App;
