import React from 'react';
import styled from 'styled-components';


const ButtonAdd = styled.button`
    width: auto;
    background-color: transparent;
    border: 2px solid #eb1777;
    position: relative;
    margin: 1em;
    display: inline-block;
    font-family: inherit;
    padding: 0.5em 1em;
    color: #eb1777;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
    font-weight: bold;
    :hover {
        color: #fff;
        background-color: #eb1777;
        border-color: #eb1777;
    }
    ::before, ::after {
        content: '';
        top: -6px;
        left: -6px;
        border: 2px solid #eb1777;
        border-width: 2px 0 0 2px;
        box-sizing: border-box;
        position: absolute;
        width: 1em;
        height: 1em;
        transition: all 0.3s ease-in-out;
                
    }
    ::after {
        bottom: -6px;
        right: -6px;
        left: auto;
        top: auto;
        transform: rotate(180deg);
    }
    :hover::before, :hover::after {
        width: calc(100% + 12px);
        height: calc(100% + 12px);
    }
`

const AddBookButton = ({onClick}) => (
    <ButtonAdd onClick={onClick}>Добавить книгу</ButtonAdd>
)

export default AddBookButton;