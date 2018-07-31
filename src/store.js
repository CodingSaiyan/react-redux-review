import {createStore} from 'redux'

import reducer from './reducer'

//the only things needed to create an initial store are createStore from redux and our reducer which we are exporting from reducer.js
export default createStore(reducer);