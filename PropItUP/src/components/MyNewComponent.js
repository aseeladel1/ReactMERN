import React, {Component} from 'react';

class  MyNewComponent extends Component {

    constructor(props){
        super(props);
        this.state = {ageCounter: this.props.age}
    }
    changeAge=() =>{
        this.setState({ageCounter:this.state.ageCounter + 1})
    }
  render() {
    return(
        <div>
           <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.ageCounter}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={this.changeAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </div>

    );
  }
}
    export default MyNewComponent;
