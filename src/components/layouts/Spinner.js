import React from 'react'
import spinner from './spinner.gif'

export const Spinner = () => {
    return (
        <React.Fragment>
            <img src={spinner} alt="loading...."
                styles={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </React.Fragment>
    )
}
