import React from 'react';
import '../App.css';
import write from '../images/write.jpg'

const Landing = () => {
    return (
        <div>
            <h2>Lists Have Been Used For Centuries. Its Time To Make Your Own.</h2>
            <img src={write} alt='write list'/>
            <p>to get started. Log in with your google account, and then list away!</p>
        </div>
    )
}

export default Landing;