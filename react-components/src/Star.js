import React, { Component } from 'react';

class Star extends Component {
    constructor(props) {
        super(props);
        this.state = { star: {name: '', role: ''}};
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeFor = (propertyName) => (event) => {
        console.log(propertyName);
        this.setState( { star: {
            ...this.state.star,
            [propertyName]: event.target.value 
            }
        });
    }

    handleClick () {
        console.log(this.state.star.name,'is famous for', this.state.star.role);
    }
    
    render() {
        return (
            <div>
            <h2>The Best Star Ever</h2>
            <input onChange={this.handleChangeFor('name')} />
            <input onChange={this.handleChangeFor('role')} />
            <button onClick={this.handleClick}>LOG THE OBJECT</button>
            <p>{this.state.star.name} is famous for {this.state.star.role}</p>
            </div>  
        )
    }
}



export default Star;