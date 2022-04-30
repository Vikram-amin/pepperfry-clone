import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Header = styled.nav`
    background: #000;
    height: 40px;
    font-size: 1rem;
    top: 0;
    color: white;
`

export const Sale = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 11px 0;
    font-size: .875rem;
    font-weight: 700;
`

export const LeftText = styled.div`
    margin-left: 90px;

    span {
        color: #FF7035;
    }
`

export const RightText = styled.div`
    margin-right: 90px;
    font-weight: normal;

    a{
        color: #FF7035;
    }
`

export const Dummy = styled.nav`
    background: #f5f5f5;
    height: 40px;
    font-size: 1rem;
    top: 0;
    display: flex;
    justify-content: space-between;
`

export const DummyLeft = styled.div`
    display: flex;
    margin-left: 90px;
    padding: 11px 0;
    span {
        padding-right: 20px;
        color: #848484;
        font-weight: lighter;
    }
`

export const DummyRight = styled.div`
    display: flex;
    margin-right: 90px;
    padding-right: 0px;
    padding: 11px;
    font-weight: lighter;
    p{
        font-size: .75rem;
        padding-right: 11px ;
    }
    span{
        font-size: .75rem;
        padding-right: 0px ;
        color: #FF7035;
    }
`
export const Nav = styled.div`
    border-bottom: 1px solid #d3d3d3;
`

export const TopNav = styled.div`
  width: 100%;
  display: flex;
  height: 80px;

  padding-top: 18px;
  .iconDiv {
    margin-left: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 15px;
  }
  .icon {
    color: black;
    width: 30px;
    height: 38px;
    cursor: pointer;
  }
  .help {
    margin-top: 2px;
    width: 47px;
  }
`;
export const NavLogo = styled(LinkR)`
    padding-right: 20px; 
    img{
        height: 45px;
        width: 170px;
    }
    
`

export const SearchBar = styled.input`
    height: 38px;
    width: 880px;
    padding: 10px;
    background: #f5f5f5;
    border: none;
    font-size: 15px;
    font-weight: lighter;
`

// export const DropdownMenu = styled.nav`
//     display: flex;
//     margin-left: 90px;
//     margin-right: 90px;
//     div{
//         font-weight: bolder;
//         padding: 10px;
//         padding-top: 0;
//         font-size: 14px;
//     }
// `