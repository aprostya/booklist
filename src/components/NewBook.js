import React from 'react';
import styled from 'styled-components';
import EditableBook from './EditableBook';
import Form from './Form/Form';
import AddBookButton from './AddBookButton';
import SelectGroup from './SelectGroup';

const NewBookBlock = styled.div`
    border-radius: 5px;
    width: ${props => props.active ? '63%' : '0'};
    position: ${props => props.active ? 'fixed' : ''};
    z-index: 100;
    background-color: #fff;
    overflow: scroll;
    height: ${props => props.active ? '500px' : ''};
    transition: width 0.5s;
    padding: 0 20px 0 20px;
    left: 20%;
`;

const NewBookBody = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
`;
const ButtonsContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`
const NewBook = ({ onBookAdd, onPlusBtnClick, isActive, onCancel }) => {
    let titleInput
    let authorInput

    const onClick = (e) => {
         if (isActive == false) {
             onPlusBtnClick(!isActive)
         }
    }

    return (
        <div>
            <NewBookBlock active={isActive} onClick={onClick}>
                <NewBookBody active={isActive}>
                    {/* <EditableBook onComplete={onBookAdd} isActive={isActive} onCancel={onCancel} /> */}
                    <Form />
                </NewBookBody>
            </NewBookBlock>
            <ButtonsContainer>
                <AddBookButton onClick={onClick} />
                <SelectGroup/>
            </ButtonsContainer>
        </div>
    )
}

export default NewBook
