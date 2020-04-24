import * as React from 'react';

export class Booton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    
    clickHandler = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>click me</button>
                <p>{ this.state.count }</p>
            </div>
        );
    }
}