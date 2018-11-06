import React from 'react'
import Book from './Book.js'
import AddBookButton from '../components/AddBookButton';
import EditableBook from './EditableBook';
import Form from './Form/Form'
import Header from './Header';
import styled from 'styled-components';
import NewBookContainer from '../containers/NewBookContainer'
import Overlay from '../containers/Overlay'



const ItemsContainer = styled.div `
    width: 100%;
    border: 2px dotted #eb1777;
    min-height: 400px;
    margin-top: 14px;
    padding: 10px;
    z-index: 2;
`
const ItemsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    flex-wrap: wrap;

`
const BookList = ({books, removeBook, onDoubleClick, completeEdit}) => (
    <div>
        <Header/>
        <NewBookContainer />
        <ItemsContainer>
            <ItemsWrapper>
                {books.map(book => {
                    const props = {
                        ...book,
                        onDeleteButtonClick: () => removeBook(book.id),
                        onDoubleClick: () => onDoubleClick(book.id)
                    }
                    if (book.editable) {
                        return <EditableBook
                                key={book.id}
                                {...book}
                                onCancel={() => onDoubleClick(book.id)}
                                onComplete={(title, author) => completeEdit(book.id, title, author)}
                                onDoubleClick={() => onDoubleClick(book.id)}
                            />
                        }
                    return <Book
                        key={book.id}
                        {...book}
                        onDeleteButtonClick={() => removeBook(book.id)}
                        onDoubleClick={() => onDoubleClick(book.id)}
                    />
            }
        )}
            </ItemsWrapper>
        <Overlay />    
    </ItemsContainer>
 </div>   
)

export default BookList
