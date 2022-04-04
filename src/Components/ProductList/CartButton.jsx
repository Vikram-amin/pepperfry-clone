import React from "react";
import styled from "styled-components";
export const Button = styled.button`
    border: none;
    border-radius: 2px;
    color: white;
    background-color: white;
    margin: 5px;
    &:hover{
        background-color: orange;
        color: black;
        transition: background-color 1s, color 1s;
    }
`;