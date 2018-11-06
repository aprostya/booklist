import { combineReducers } from 'redux'
import books from './books'
import addBookButton from './addBookButton'

export default combineReducers({ books, addBookButton })
