import { createStore, combineReducers } from 'redux'
import messagesReducer from '../reducers/messagesReducer'

const reducer = combineReducers({
    messages: messagesReducer
})

const store = createStore(reducer)

export default store