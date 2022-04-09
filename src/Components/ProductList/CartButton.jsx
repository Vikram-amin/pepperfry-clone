import React from "react";
import styled from "styled-components";
export const Button = styled.button`
    border: none;
    border-radius: 2px;
    color: transparent;
    background-color: transparent;
    width:15vh;
    height: 4vh;
    margin-left:25px;
    transition: background-color 1s, color 1s;
    :hover{
        border: none;
        background-color: orangered;
        color: white;
        width:15vh;
        height: 4vh;
        margin-left:25px;
        border-radius:5px;
        transition: background-color 0.7s, color 0.7s;
    }
`;