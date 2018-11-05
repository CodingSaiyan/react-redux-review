import React, {Component} from 'react'
import {connect} from 'react-redux'

import {handleUserInput, addItem} from '../reducer'

class AddItem extends Component {
    constructor() {
        super()
    }

    render() {
        let {userInput, handleUserInput, addItem} = this.props
        return (
            <div>
                {/* I'm updating userInput in our reducer but we could keep track of state in this component */}
                <input value={userInput} onChange={handleUserInput}></input>
                {/* We need to define an anonymous callback function here for the onClick to call every time the button is clicked so that when it is invoked it will invoke addItem() passing in userInput. If we just passed addItem as the callback it would invoked addItem each time passing the event */}
                <button onClick={(e) => addItem(userInput)}>Add Item</button>
            </div>
        )
    }
}

//mapStateToProps gets passed the state object from redux and we tell this component which pieces of the state it should care about
function mapStateToProps(state) {
    console.log(state)
    return {
        userInput: state.userInput
    }
}

//We need to make sure that we pass all the action creator functions to connect otherwise it won't dispatch an action
export default connect(mapStateToProps, {handleUserInput, addItem})(AddItem)