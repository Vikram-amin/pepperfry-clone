import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin-left: 90px;
    margin-right: 90px;
`
export const RectangularBlock = styled.div`
    img{
        margin-top: 2%;
        width:100%;
        margin-bottom: 2%;
    }
`
export const Shop = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-top: 1%;
    margin-bottom: 2%;
    img{
        height: 250px;
        width: 300px;
    }
    .title{
        font-size: 20px;
    }
`

export const Eyeing = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin-top: 1%;
    .sideOne{
        height: 450px;
        width: 400px;
    }
    .sideTwo{
        height: 450px;
        width: 400px;
    }
    .quadra{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
    }
    .quadraImage{
        height:220px;
        width:200px;
    }
`