import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SignUpBtn extends Component {
    render() {
        return (
            <React.Fragment>
                <Link className="btn btn-theme-primary rounded-pill d-inline-flex align-items-center" to="/indiancoin/signin">SignIn <i className='bx bx-caret-right bx-xs'/></Link>
            </React.Fragment>
        )
    }
}

export default SignUpBtn
