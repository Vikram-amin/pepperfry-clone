import React from "react";
import styled from "styled-components";
export const Button = styled.button`
    border: 1px solid black;
    border-radius: 2px;
    color: black;
    background-color: transparent;
    padding: 10px
    height: 20px;
    transition: background-color 1s, color 1s;
    :hover{
        border: none;
        background-color: orange;
        color: white;
        transition: background-color 0.7s, color 0.7s;
    }
`;