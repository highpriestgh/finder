import React, { Component } from 'react'
import { FaGithub } from "react-icons/fa";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar bg-primary'>
                    <h1> <FaGithub /> {this.props.title}</h1>
                </nav>
            </div>
        )
    }
}

export default Navbar
