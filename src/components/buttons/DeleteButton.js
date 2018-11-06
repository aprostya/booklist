import styled from 'styled-components';

const DeleteButton = styled.a`
    position: absolute;
    top: -5px;
    right: 0px;
    width: 32px;
    height: 32px;

    &:hover {
        cursor: pointer;

        &:before, &:after {
            background-color: black;
        }
    }

    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #c0c0c0;

        transition: background-color 0.2s;
    }

    &:before {       
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`;

export default DeleteButton;