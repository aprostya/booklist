import * as types from './types'

export const addBook = (title, author) => {
  return {
    type: types.ADD_BOOK,
    title,
    author
  }
}

export const editBook = (id, title, author) => {
  return {
    type: types.EDIT_BOOK,
    id,
    title,
    author
  }
}

export const removeBook = (id) => {
  return {
    type: types.REMOVE_BOOK,
    id,
  }
}

export const setAddBookBtnActive = (value) => {
    return {
        type: types.SET_ADD_BTN_ACTIVE,
        isActive: value
    }
}

export const switchEditable = (bookId) => {
    return {
      type: types.SWITCH_EDIT_STATUS,
      id: bookId
    }
}
