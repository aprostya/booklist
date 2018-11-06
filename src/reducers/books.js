import * as types from '../actions/types'

export default function books(state = [{ id:1, title: "Book1", author: "test", editable: false}, { id:2, title: "Book2", author: "test", editable: false}], action) {
    switch (action.type) {
        case types.ADD_BOOK:
            const lastBookId = state.length > 0 ? state[state.length - 1].id + 1 : 1;
            return [
                ...state,
                {
                    id: lastBookId,
                    title: action.title,
                    author: action.author,
                    editable: false
                }
            ]
        case types.REMOVE_BOOK:
            return state.filter(book => book.id != action.id);
        case types.EDIT_BOOK:
            return state.map((book) => {
                if (book.id == action.id) {
                    book.title = action.title;
                    book.author = action.author;
                }
                return book;
            });
        case types.SWITCH_EDIT_STATUS:
            return state.map(book => {
                if (book.id == action.id) {
                    book.editable = !book.editable;
                }
                return book;
            })
        default:
            return state;

    }
}
