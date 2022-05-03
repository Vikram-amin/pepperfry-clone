
import styled from "styled-components";

export const CardWrapper = styled.div`
  .card-price {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: orangered;
    margin: 3px;
  }
  .card-brand {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: rgb(182, 180, 180);
    font-size: medium;
    margin: 3px;
  }

  .card-savings {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: rgb(8, 171, 8);
    margin: 3px;
  }

  & img {
    width: 95%;
  }

  & h6 {
    text-align: left;
    margin: 3px;
  }

  & h4 {
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: left;
    margin: 3px;
  }

  & h5 {
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: left;
    margin: 3px;
  }
`;


















export const Button = styled.button`
  border: none;
  border-radius: 2px;
  color: transparent;
  background-color: transparent;
  width: 15vh;
  height: 4vh;
  margin-left: 25px;
  transition: background-color 1s, color 1s;
  :hover {
    border: none;
    background-color: orangered;
    color: white;
    width: 15vh;
    height: 4vh;
    margin-left: 25px;
    border-radius: 5px;
    transition: background-color 0.7s, color 0.7s;
  }
`;