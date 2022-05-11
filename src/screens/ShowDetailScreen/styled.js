import React from "react";
import styled from "styled-components";
import {mainGreen, darkGray} from '../../constants/colors'

export const ScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 30px ;
    max-width: 500px;
    text-align: center;
`

export const Title = styled.h1 `
    color: ${darkGray};
    text-align: center;
    margin: 20px;
`