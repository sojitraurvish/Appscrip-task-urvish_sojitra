import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo href="/">
          <Link to="/">
             <img src="/images/app-logo.svg" alt="" />
          </Link>
        </Logo>

        <MiddleMenu>
          <Section1>Logo</Section1>
          <Section2>
            <Link as="a" to="/shop"><span>shop</span></Link>
            <Link as="a" to="/skills"><span>skills</span></Link>
            <Link as="a" to="/stories"><span>stories</span></Link>
            <Link as="a" to="/about"><span>about</span></Link>
            <Link as="a" to="/content"><span>content us</span></Link>
          </Section2>
        </MiddleMenu>


        <Ul>
          <Li>
            <Link as="a" to="/search">
              <img src="/images/search-icon.svg" alt="" />
            </Link>
          </Li>
          <Li>
            <Link as="a" to="/like">
              <img src="/images/like-icon.svg" alt="" />
            </Link>
          </Li>
          <Li>
            <Link as="a" to="/cart">
              <img src="/images/cart-icon.svg" alt="" />
            </Link>
          </Li>
          <Li>
            <Link as="a" to="/user">
              <img src="/images/user-icon.svg" alt="" />
            </Link>
          </Li>

          <Language>
            <span>ENG</span>
            <img src="/images/down-arrow-logo.svg" alt="" />
          </Language>
        </Ul>

      </Content>
    </Container>
  )
}

export default Header

const Container=styled.div`
  /* border: 1px solid red; */
  background-color: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  /* padding: 0 24px; */
  height: 188px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);



`

const Content=styled.div`
  /* border: 1px solid blue; */
  max-width: 1528px;
  min-height:100% ;
  margin:auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;

  /* For Tablets or iPad: 480px - 768px */
  @media only screen and (min-width:1200px) and (max-width:1453px){
      /* border:5px solid red; */
      max-width: 1228px;


  }
`


const Logo=styled.a`
  /* border: 2px solid red; */
  width: 16%;

  height: 70%;
`

const MiddleMenu=styled.div`
  width: 100vw;
  margin-top: 20px;
  height: 80%;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* @media only screen and (min-width:0px) and (max-width:1317px){
      border:5px solid red;
        width: 50vw;
        div{
          width: 100%;
        }

  } */

  
`
const Section1=styled.div`
/* border: 1px solid red; */
font-weight: bold;
font-size: 30px;
line-height: 43.57px;
  
`
const Section2=styled.div`
    margin: 0px auto;
    width: 50%;
    height: 30%;
    display:  flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-weight: bold;
    /* border: 2px solid black; */
    a{
      font-size: 18px;
      /* border: 2px solid black; */
      position: relative;

      span{

        &:before{
            content:"";
            background-color:black;
            border-radius:4px 4px 4px 4px;
            bottom:-6px;
            height:3px;
            position:absolute;
            left:0px;
            right:0px;
            transition:all 250ms ease-in 0s;
            visibility:hidden;
            opacity:0;
            width:0%;
          }
      }
      &:hover{
          span:before{
              width: 100%;
              visibility:visible;
              opacity:1 !important;
          }
      }
    }

`

const Ul=styled.span`
width: 16%;
  height: 70%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* list-style-type: none; */
  /* box-sizing: border-box; */
  /* width: 100%; */
  /* display:flex; */
`

const Li=styled.span`

  /* border: 2px solid blue; */
  margin: 8px 10px;
  a{
    img{
    
    }
  }
`

const Language=styled(Li)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    /* margin-top:10px; */
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.1px;
    padding-top:5px;

    
  
`