import React from 'react'
import { FaInfoCircle } from "react-icons/fa";

export const Alert = ({ alert }) => {
    return (
        alert != null && (
            <div className={`alert alert-${alert.type}`}>
                <FaInfoCircle /> {alert.msg}
            </div>
        )
    )
}

export default Alert
