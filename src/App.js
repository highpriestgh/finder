import { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import { Alert } from './components/layouts/Alert';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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

  clearUsers = () => {
    this.setState({ loading: false, users: [] })
  }

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type }
    })
  }

  render() {
    const { users, loading } = this.state

    return (
      <div className="App">
        <Navbar title='Github Finder' />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>

      </div>
    );
  }

}

export default App;
