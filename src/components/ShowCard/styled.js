import React from "react";
import styled from "styled-components";
import {mainGreen, darkGray} from '../../constants/colors'


export const CardContainer = styled.div`
    width: 200px;
    height: 320px;
    border: 2px solid ${darkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px;
    cursor: pointer;
    :hover {
        border: 2px solid ${mainGreen}
    }

`;

export const CardImage = styled.img`
    width: 200px;
    height: 250px;
    
`

export const CardText = styled.p`
    margin: 6px;
    text-align: center;
    font-size: 18px; 
`

