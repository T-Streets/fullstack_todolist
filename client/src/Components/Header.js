import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>write it down. get it done.</h1>
                <ul>
                    <li><a>Login</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        )
    }
}