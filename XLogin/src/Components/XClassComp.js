import React from 'react'

class XClassComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    incre = () => {
        this.setState((state) => {
            return{
                count: state.count + 1
            };
        });
    }

    decre = () => {
        this.setState((state) => {
            return{
                count: state.count - 1
            };
        });
    }

    render(){
        return (
            <>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button type='button' onClick={this.incre}>Increment</button>
                <button type='button' onClick={this.decre}>Decrement</button>
            </>
          );
    }
}

export default XClassComp;