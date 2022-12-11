import React, { Component } from 'react';

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addOnAge: this.props.age;
        }
    }


    changeNum =() => {
        this.setState({ addOnAge: this.state.addOnAge +1})
    }


    render(){
        const { firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h1> {lastName}, {firstName} </h1>
                <p> Age: {this.state.addOnAge} </p>
                <p> Hair Color: {hairColor} </p>
                <button onClick={this.changeNum} >Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}


export default PersonCard;

