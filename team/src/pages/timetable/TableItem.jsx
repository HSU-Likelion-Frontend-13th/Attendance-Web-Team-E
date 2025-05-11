import React from 'react'
import { useParams } from 'react-router-dom'
import TimetablePage from './TimetablePage'
import styled from 'styled-components';

export const TableItemContainer = styled.div`
    background-color:rgb(228, 234, 251);

`;
const TableItem = () => {
    const {id} = useParams();
  return (
    <TableItemContainer>
        <TimetablePage />
    </TableItemContainer>
  )
}

export default TableItem
