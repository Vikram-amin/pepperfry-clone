import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin-left: 90px;
    margin-right: 90px;
    cursor: pointer;
    
    .belowNavbar{
        display: flex;
    }
    .sideImage{
        height: 450px;
        width: 330px;
    }
`

export const RectangularBlock = styled.div`
    img{
        margin-top: 4%;
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
    margin-bottom: 2%;
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

export const Shoppee = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 8px;
    margin-top: 1%;
    margin-bottom: 2%;

    .upperText{
        font-size:22px;
        font-weight: bolder;
    }

    .lowerText{
        font-size: 15px;
    }

    img{
        height: 350px;
        width: 300px;
    }
`

export const New = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin-top: 1%;
    margin-bottom: 2%;
    
    .upperText{
        font-size:22px;
        font-weight: bolder;
    }

    .lowerText{
        font-size: 15px;
    }

    img{
        height: 450px;
        width: 410px;
    }
`

export const HomeDecor = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 8px;
    margin-top: 1%;
    margin-bottom: 2%;

    .upperText{
        font-size:22px;
        font-weight: bolder;
    }

    .lowerText{
        font-size: 15px;
    }

    img{
        height: 350px;
        width: 300px;
    }
`

export const BlueBox = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    margin-top: 1%;
    margin-bottom: 2%;
    background-color: #e9f1f5;
    padding: 50px;

    .upperText{
        font-size:22px;
        font-weight: bolder;
    }
    .lowerText{
        font-size: 15px;
    }
    img{
        height: 170px;
        width: 270px;
    }
`

export const TopBrand = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 10px;
    margin-top: 1%;
    margin-bottom: 3%;
    img{
        height: 270px;
        width: 200px;
    }
`

export const TwoBigImages =  styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    margin-bottom: 3%;
    img{
        height: 570px;
        width: 625px;
    }
`

export const ImageDiv = styled.div`
    position: relative;
    .lists{
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-gap: 30px;
    }
    .textDiv{
        position: absolute;
        top: 8px;
        left: 16px;
        padding: 10px;
    }
    img{
        width:100%;
    }
    li{
        list-style: none;
        line-height: 1.6;
        font-size: 12px;
        cursor: pointer;
    }
    li:hover{
        color: #ff7035;
    }
`

export const Costumers = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
    .customerReviews{
        margin-top: 1%;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
    }

    img{
        height: 250px;
        width: 400px;
    }
     p{
         font-weight: bolder;
         margin-bottom: 2%;
     }
     .customerName{
         font-size: 17px;
     }

     .location{
         font-size: 15px;
         color: grey;
     }
`

export const NeedHelpBuying = styled.div`
    margin-bottom: 3%;
    .LastBlock{
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        margin-top: 1%;
    }
    img{
        height: 200px;
        width: 200px;
    }

`