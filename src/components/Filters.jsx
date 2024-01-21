import React from 'react'
import styled from 'styled-components'

const Filters = ({sideNav,changMenu}) => {
  return (
    <Container>

        <TotalItems>
            <span>3425</span>&nbsp;
            <span>Items</span> 
        </TotalItems>

        <HideAndShowFilter onClick={(e)=>changMenu(e)}>
            <img src="/images/left-arrow-icon.svg" alt="" />
            {
                sideNav 
                ? (<span>HIDE FILTER</span>)
                : (<span>SHOW FILTER</span>)

            }
        </HideAndShowFilter>
        
        
        <ShowFilter>
            <span>
                <span>RECOMMENDED</span>
                <img src="/images/down-arrow-icon.svg" alt="" />
            </span>

            <DropDown>
                <span ><img src="/images/right-icon.svg" alt="" />RECOMMENDED</span>
                <span >Newest first</span>
                <span >popular</span>
                <span >Price : high to low</span>
                <span >Price : low to high</span>
            </DropDown>
 
        </ShowFilter>
    </Container>
  )
}

export default Filters

const Container=styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 82px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const TotalItems=styled.div`
    width: 12%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border:2px solid black ; */
    font-size: 18px;
    font-weight: bold;

    span{
        &:nth-child(2){
            text-transform: uppercase;
        }
    }

    `

const HideAndShowFilter=styled.div`
    width: 67%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border:2px solid yellow ; */
    img{
        margin-left: 10px;
        
    }
    span{
        margin-left: 10px;
        font-size: 16px;
        text-decoration: underline;
        color: #b4b4bb;
    }

    
`


const DropDown=styled.div`
    position:absolute;
    top:67px;
    right:0px;
    background-color:#ffffff;
    border:1px solid rgba(151,151,151,0.34);
    border-radius:2px;
    box-shadow:4px;
    font-size:18px;
    letter-spacing:1.5px;
    max-width:105%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-end;
    transition-duration:1s;
    padding:20px 10px;
    opacity:0;
    display: none;
    z-index: 500;
    span{
        /* text-align: right; */
        padding:7px;
        margin: 15px 22px;
        text-transform: uppercase;
        font-size: 18px;
        /* min-width: 70%; */
        /* border:2px solid red; */
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            margin-right: 5px;
            /* border:2px solid red; */
            
        }
        
        &:nth-child(1){
            font-weight: bold;
        }
        &:hover{
            /* background-color:#c6c6c6; */
            color:black;
            /* font-weight: bold; */
            cursor: pointer;
        }
    }
`


const ShowFilter=styled.div`
    width: 17%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border:2px solid black ; */
    
    img{
        margin-left: 10px;
        
    }
    span{
        &:nth-child(1){

            margin-left: 10px;
            font-size: 18px;
            font-weight: bold;

        }
        
        
    }

    &:hover{

        cursor: pointer;
        ${DropDown}{
            cursor: pointer;
            opacity:1;
            display: flex;
        }
    }

`
