import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Book from './Book';
import Form from './Form/FieldLevelValidationForm';

const Input = styled.input`
    display: inline-block;
    color: #000;
    outline: none;
    border: 0;
    border-bottom: 1px solid black;

    transition: border-color 0.4s;

    &:focus {
        border-color: black;
    }

    &::placeholder {
        color: black;
    }
`;

// const Form = styled.form`
//     text-align: left;
//     position: relative;
//     z-index: 100;
// `;

class EditableBook extends React.Component {
    static propTypes = {
        onBookAdd: PropTypes.func,
        isActive: PropTypes.bool.isRequired,
        onComplete: PropTypes.func.isRequired,
        onCancel: PropTypes.func,
        title: PropTypes.string,
        author: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            title: props.title || '',
            author: props.author || ''
        }
    }

    onKeyPress = (e, fieldName) => {
    }

    onChange = (e, fieldName) => {
        this.setState({
            [fieldName]:e.target.value
        });
    }

    render = () => (
        <Form/>
    );
}

export default EditableBook;
