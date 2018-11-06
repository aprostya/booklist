import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    transition: visibility 0.3s linear, opacity 0.3s linear;
    transition-delay: 0s;

    opacity: ${props => props.active ? '0.8': '0' }
    visibility: ${props => props.active ? 'visible' : 'hidden'}
`;

const OverlayBody = ({active, onOverlayBodyClick}) => (
    <Body active={active} onClick={onOverlayBodyClick} />
);

export default OverlayBody;
