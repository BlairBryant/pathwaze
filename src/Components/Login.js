import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <p>Click Below</p>
            <Link to='/dashboard'><button>Login</button></Link>
        </div>
    )
}