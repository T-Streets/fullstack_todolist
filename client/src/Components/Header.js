import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Login</a></li>
            default:
                return <li><a href='/api/logout'>Logout</a></li>
        }
    }
    render() {
        return (
            <div>
                <h1>
                    <Link to={this.props.auth ? '/todolist' : '/'}>
                    write it down. get it done.
                    </Link>   
                 </h1>
                <ul>
                    {this.renderContent()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);