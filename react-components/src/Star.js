import React, { Component } from 'react';

class Star extends Component {
    constructor(props) {
        super(props);
        this.state = { star: {name: '', role: ''}, starList: []};
    }

    handleChangeFor = (propertyName) => (event) => {
        console.log(propertyName);
        this.setState( { star: {
            ...this.state.star,
            [propertyName]: event.target.value 
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({starList: [...this.state.starList, this.state.star]})
        this.setState({star: {name: '', role: ''}});
        console.log(this.state.star);
    }

    // handleClick () {
    //     console.log(this.state.star.name,'is famous for', this.state.star.role);
    // }
    
    render() {
        return (
            <div>
            <h2>The Best Star Ever</h2>
            <form onSubmit={this.handleSubmit}>
            <p>Name: <input onChange={this.handleChangeFor('name')} value={this.state.star.name} placeholder='Name'/></p>
            <p>Role: <input onChange={this.handleChangeFor('role')} value={this.state.star.role} placeholder='Role'/></p>
            <button onClick={this.handleClick}>LOG THE OBJECT</button>
            </form>
            <p>{this.state.star.name} is famous for {this.state.star.role}</p>
            <ul>
                {this.state.starList.map(star =>
                <li key={star.name}>{star.name} is famous for {star.role}</li>
                )}
            </ul>
            </div>  
        )
    }
}



export default Star;