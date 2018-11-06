import { connect } from 'react-redux'
import BookList from '../components/BookList'
import { removeBook, switchEditable, editBook } from '../actions'

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (id) => dispatch(removeBook(id)),
    onDoubleClick: (id) => dispatch(switchEditable(id)),
    completeEdit: (id, title, author) => { 
      dispatch(editBook(id, title, author));
      dispatch(switchEditable(id));
    }
  }
}

const Books = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default Books
