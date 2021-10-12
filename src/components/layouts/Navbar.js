import React, { Component } from 'react'
import { FaGithub } from "react-icons/fa";

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary">

                <h1><FaGithub /> {this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
