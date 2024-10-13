import styled from "styled-components";

export const Button = styled.button`
    color: white;
    background-color: black;
    padding: 10px 18px;
    min-width: 220px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled.button`
    background-color: white;
    border: 1px solid black;
    color: black;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 18px;
    min-width: 220px;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: black;
        border: 1px solid black;
        color: white;
        transition: 0.3s background ease-in;
    }
`;