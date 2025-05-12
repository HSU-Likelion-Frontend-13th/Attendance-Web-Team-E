import React from 'react'
import styled from 'styled-components';

export const ModalContainer = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const ModalContent = styled.div`
    background-color: white;
    width: 100%;
    height: 50%;
    boreder-radius: 20px 20px 0px 0px;
    border: 2px solid #2162E9;
`;

const Modal = ( { item, onClose }) => {
  return (
    <ModalContainer onClick={onClose}>
        <ModalContent>
            <h1>{item.title}</h1>
            <p>{item.time}</p>
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal
