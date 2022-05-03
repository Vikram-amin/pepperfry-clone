
import styled from "styled-components";


export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;

  .heading {
    text-align: center;
  }
  .btn-f {
    width: 100px;
    padding: 3px;
    height: 40px;
    border: none;
    font-size: medium;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: black;
    background: transparent;
    font-weight: 600;
  }
  .btn-f:hover {
    border: 1px solid orangered;
    color: orangered;
    border-radius: 5px;
    transition: color 1s, border 1s;
  }

  .sort {
    margin-left: 130px;
    margin-top: 70px;
  }

  .filter {
    width: 25%;
    font-weight: 800;
    font-size: large;
    border: 0.1px solid gray;
  }
`;



export const ProductListHeading = styled.div`
  margin-top: 60px;
  font-family: "Times New Roman", Times, serif;
`;



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
    height: 40vh;
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

export const ProductCardList = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  border: 1px solid gray;
`;



export const Button = styled.button`
  border-radius: 2px;
  width: 15vh;
  height: 4vh;
  margin-left: 25px;
  color : red;

`;