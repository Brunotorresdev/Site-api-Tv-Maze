import React from "react";
import styled from "styled-components";
import {mainGreen, darkGray} from '../../constants/colors'

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 60px;
    background-color: ${mainGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0; 
`
export const Title = styled.h1 `
    color: white
`
export const BackButton = styled.h1 `
    color: white;
    position: fixed;
    left: 30px;
    cursor: pointer;
    &:hover {
        color: ${darkGray}
    }
`
