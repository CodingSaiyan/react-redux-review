//Here we define the initial state of our redux store
const initialState = {
    list: ['hello', 'goodbye', 'testing'], 
    userInput: ''
}

//Here we define our action type strings
//we can export these to other files and use them to keep action types consistent across our application
const ADD_ITEM = 'ADD_ITEM'
const HANDLE_USER_INPUT = 'HANDLE_USER_INPUT'


//this is a reducer. It is just a function. It takes in two parameters. The current state of the redux store and the action object that has a type and payload property
export default function reducer(state = initialState, action) {
    //This is where we switch on the type of the action and decide how to calculate the next state.
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                list: [...state.list, action.payload],
                userInput: ''
            }
        case 'HANDLE_USER_INPUT':
            return {
                ...state,
                userInput: action.payload,
            }
        default:
            return state;
    }
}

//These are our action creator functions. We use these return an action when invoked that has the type and payload property our reducer is switching on
export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function handleUserInput(e) {
    return {
        type: HANDLE_USER_INPUT,
        payload: e.target.value
    }
}