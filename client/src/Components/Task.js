import React, { PureComponent } from 'react';

export default class Task extends PureComponent {
    onClickHandler = () => {
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <ul>
                {this.props.item}<button onClick={this.onClickHandler}>Delete</button>
            </ul>
        )
    }
}