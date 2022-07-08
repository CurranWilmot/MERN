//import React
import React, {Component} from 'react'

//define the class
class PersonCard extends Component{
    constructor(props){
      super(props);
      this.state = {
        birthday : this.props.age
      }
    }
    addAge = () => {
      this.setState({birthday: this.state.birthday +1})
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        
        return(
            <>
              <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.birthday}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addAge}>Birth Button for {firstName} {lastName}</button>
              </div>
            </>
        )
    }
}

export default PersonCard;