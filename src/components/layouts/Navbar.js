import React from 'react'
import { FaGithub } from "react-icons/fa";

const Navbar = (props) => {

    return (
        <div>
            <nav className='navbar bg-primary'>
                <h1> <FaGithub /> {props.title}</h1>
            </nav>
        </div>
    )

}

export default Navbar
