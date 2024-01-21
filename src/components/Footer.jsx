import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Footer = () => {


  const subscribeHandler=async()=>{
  
  }

  return (
    <Container>
      <Content>
        
        <Section1>
          <Box1>
            <Segment1>
                  <span>
                    <Unit1>
                        
                        <div>Be the first to know</div>
                        <div>Sign up for updates from mettā muse.</div>
                      
                    </Unit1>
                    <Unit2>
                      <input type="email" placeholder="Enter your e-mail..."  />
                      <button onClick={subscribeHandler}>Subscribe</button>
                      {/* <button >Subscribe</button> */}
                    </Unit2>
                  </span>
            </Segment1>

            <Segment2>
              <Slice1>
                <div>Contect us</div>
                <div>+44 221 133 5360</div>
                <div>customercare@mettamuse.com</div>
              </Slice1>
              <Slice2>
                <div>Currency </div>
                <div><img src='/images/usa-icon.svg' alt=""/> &nbsp;+ USD</div>
                <div>Transactions will be completed in Euros and a currency.</div>
              </Slice2>
            </Segment2>

          </Box1>

          <Box2>

            <Portion1>
              <div>mettā muse</div>
              <Link as="a" to="/user">About Us</Link>
              <Link as="a" to="/user">Stories</Link>
              <Link as="a" to="/user">Artisans</Link>
              <Link as="a" to="/user">Boutiques</Link>
              <Link as="a" to="/user">Contact Us</Link>
              <Link as="a" to="/user">EU Compliances Docs</Link>
            </Portion1>

            <Portion2>
              <div>QUICK LINKS</div>
                <Link as="a" to="/user">Orders & Shipping</Link>
                <Link as="a" to="/user">Join/Login as a Seller</Link>
                <Link as="a" to="/user">Payment & Pricing</Link>
                <Link as="a" to="/user">Return & Refunds</Link>
                <Link as="a" to="/user">FAQs</Link>
                <Link as="a" to="/user">Privacy Policy</Link>
                <Link as="a" to="/user">Terms & Conditions</Link>
            </Portion2>

            <Portion3>
                <div>
                  <span>FOLLOW US</span>
                  <span>
                    <Link as="a" to="/user"><img src="/images/instagram-icon.svg" alt="" /></Link>
                    <Link as="a" to="/user"><img src="/images/linkedin-icon.svg" alt="" /></Link>
                  </span>
                </div>
                <div>
                  <span>mettā muse ACCEPTS</span>
                  <span>
                    <Link as="a" to="/user"><img src="/images/gpay-icon.svg" alt="" /></Link>
                    <Link as="a" to="/user"><img src="/images/master-card-icon.svg" alt="" /></Link>
                    <Link as="a" to="/user"><img src="/images/paytm-icon.svg" alt="" /></Link>
                    <Link as="a" to="/user"><img src="/images/amex-icon.svg" alt="" /></Link>
                    <Link as="a" to="/user"><img src="/images/apple-pay-icon.svg" alt="" /></Link>
                    <Link as="a" to="/user"><img src="/images/o-pay-icon.svg" alt="" /></Link>
                  </span>
                </div>
                

            </Portion3>
            
          </Box2>
        </Section1>

        <Section2>
          Copyright © 2023 mettamuse. All rights reserved.
        </Section2>

      </Content>
    </Container>
  )
}

export default Footer

const Container=styled.div`
  background-color:#000000;
  color: white;
  width: 100%;
  height: 800px;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.08); */


  
    /* For Mobile devices: 320px-480px */
  @media only screen and (min-width:320px) and (max-width:1200px) {
    /* border:5px solid yellow; */
    height: 1500px;
  }
`
const Content=styled.div`

  /* border: 5px solid blue; */
  max-width: 1528px;
  margin:auto auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* For Tablets or iPad: 480px - 768px */
  @media only screen and (min-width:1200px) and (max-width:1453px){
      /* border:5px solid red; */
      max-width: 1228px;

  }

  /* For Mobile devices: 320px-480px */
@media only screen and (min-width:320px) and (max-width:1200px) {
  /* border:5px solid red; */
  height: 1500px;

}

`

const Section1=styled.div`
  padding-top: 100px;
  /* margin-top: 50px; */
  height: 100%;
  width: 100%;
  /* border: 5px solid white; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* For Mobile devices: 320px-480px */
@media only screen and (min-width:320px) and (max-width:1200px) {
  /* align-items: flex-start; */
  padding-top: 0px;
  justify-content: flex-start;
  padding: 50px 20px;

}

`

const Box1=styled.div`
  /* border: 1px solid white; */
  /* border-bottom: 1px solid white; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;

    /* For Mobile devices: 320px-480px */
  @media only screen and (min-width:320px) and (max-width:1200px) {
    flex-direction: column;
    
  }
`

const Segment1=styled.div`
  /* border: 5px solid red; */
  height: 100%;
  width:100%;
  /* text-align: center; */
  align-items: center;
  display: flex;
  flex-direction: column;

  span{
    /* border: 5px solid red; */
    width: 100%;
    height: 76%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  /* For Mobile devices: 320px-480px */
  @media only screen and (min-width:320px) and (max-width:1200px) {
      border-bottom: 1px solid white;
  }

`

const Unit1=styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 37%;
  /* width: 100%; */
  div{
    /* border: 2px solid white; */
    &:first-child{
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:nth-child(2){
      font-size: 16px;

    }

  }

  
  
`
const Unit2=styled.div`
  /* border: 5px solid yellow; */
  width: 85%;
  height: 27%;
  display: flex;
  justify-content: space-between;

  input[type="email"]{
    font-size: 26px;
    padding-left: 20px;
    width: 70%;
  }
  
  button{
    background-color: transparent;
    border: 1px solid #838383;
    border-radius: 5px;
    color: #838383;
    font-size: 18px;
    font-weight: bold;
    width: 27%;
    text-transform: uppercase;
    /* border: 5px solid yellow; */
    /* background-color: #833b3b; */

    &:hover{
      background-color: #f6f2f2;
    }
  }

    /* For Mobile devices: 320px-480px */
    @media only screen and (min-width:320px) and (max-width:1200px) {
      width: 100%;
  /* height: 30%; */
    
    
  }
`

//----------------------------------------------------------------------------------------------

const Segment2=styled.div`
/* border: 2px solid red; */
height: 100%;
width:100%;
display: flex;
flex-flow: column;
justify-content: space-between;

`

const Slice1=styled.div`
/* border:2px solid yellow; */
height:43%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
div{
  /* border:2px solid yellow; */
  &:nth-child(1){
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  }
  &:nth-child(2){
    font-size: 16px;
  }
  &:nth-child(3){
    font-size: 16px;
  }
}

@media only screen and (min-width:320px) and (max-width:1200px) {
      border-bottom: 1px solid white;
      margin-top: 20px;
      padding-bottom: 20px;
  } 
`

const Slice2=styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
/* border:2px solid white; */
height: 43%;
div{
  /* border:2px solid yellow; */
  &:nth-child(1){
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  }
  &:nth-child(2){
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    img{
      width: 33px;
      height: 33px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
  }
  &:nth-child(3){
    font-size: 16px;
    
  }
}
@media only screen and (min-width:320px) and (max-width:1200px) {
      border-bottom: 1px solid white;
      
      padding-bottom: 20px;
  } 

`

//------------------------------------------------------------------------------------------------

const Box2=styled.div`
margin-top: 30px;
/* border: 1px solid white; */
height: 100%;
width:100%;
display: flex;
align-items: center;
justify-content: space-between;
 /* For Mobile devices: 320px-480px */
  @media only screen and (min-width:320px) and (max-width:1200px) {
    /* border:5px solid yellow; */
    flex-direction: column;
    margin-top: 0px;
    height: 50%;
    /* align-items: flex-end; */
    /* justify-content: space-between; */

  }
`

const Portion1=styled.div`
  /* border:2px solid white;   */
  width:33%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: flex-start;
  div{
    margin-bottom: 18px;
    /* border:2px solid white;  */
    font-weight: bold;
    font-size: 24.71px;
  }
 a{
    margin-bottom: 12px;
    font-size: 18px;
    color:white;
    /* border:2px solid white;  */
  }

  @media only screen and (min-width:320px) and (max-width:1200px) {
    /* border:5px solid yellow; */
    width: 100%;
    height: 13%;
    flex-direction: column;
    border-bottom: 1px solid white;
  
    a{
      display:none;
      /* position: absolute; */
    }

  }

`

const Portion2=styled(Portion1)`

@media only screen and (min-width:320px) and (max-width:1200px) {
    /* border:5px solid yellow; */
    margin-top: 30px;
    a{
      display:none;
      /* position: absolute; */
    }

  }
`

const Portion3=styled.div`
/* border:2px solid white;   */
width:33%;
height: 100%;
div{
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:flex-start;
  height: 35%;
  
  /* border:2px solid white; */
  &:first-child{
    font-weight: bold;
    font-size: 24.71px;
    span{
      &:nth-child(2){
        a{

          margin-right:7px ;
        }
      }
    }
  }
  &:nth-child(2){
    height: 30%;
    margin-top: 34px;

    span{
      &:nth-child(1){
        font-weight: bold;
        font-size: 20px;
        /* border: 1px solid white; */
        
      }
      &:nth-child(2){
        /* border: 1px solid white; */
        
        a{
          img{
            

          }
          margin-right: 10px;
        }
      }
    }
  }

}

@media only screen and (min-width:320px) and (max-width:1200px) {
    /* border:5px solid yellow; */
    margin-top: 30px;
    flex-direction: column;
    width:100%;
    margin-bottom: 10PX;
    height: 50%;
    display: flex;
    justify-content: space-between;
    div{
      &:nth-child(1){
        /* border:2px solid red; */
        border-bottom: 1px solid white;
        height: 35%;
        span{
          &:nth-child(2){
            a{
                  display: none;

                }
              }
            }
      }
      &:nth-child(2){
        /* height: 40%; */
        height: 50%;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        span{
          /* padding-bottom: 20px; */
          
          &:first-child{
            width: 100%;
            text-align: left;
          }
          &:nth-child(2){
            display: flex;
            align-items: flex-end;
            /* border:1px solid red; */
            width: 100%;
            height: 100%;
            display: flex;
            a{
              width: 100%;
              img{
                width: 100%;
                /* border:1px solid red; */
                max-height: 100vw;
              }
            }
          }
        }
      }
    }
  }

`
//---------------------------------------------------------------------------------------------------------------
const Section2=styled.div`
  /* border: 1px solid white; */
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 14px;
`

