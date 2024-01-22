import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductSingleCard = ({localAppProducts,products,error,loading}) => {


  return (
    <>
       {/* {error && error } */}
   
        {
            
            loading ? "Loading..." : error ? (
              localAppProducts.map((item)=>(
              <ProductCard key={item.id}>
                  <div>
                      <img src={item.image} alt={item.image} />
                  
                  </div>

                  <div>
                      <span>{item.title.substring(0,10)}...</span>
                      <span>
                          <ProductName><Link as="a" to="">Sign in</Link> or Create an account to see Pricing</ProductName>
                          {
                              item.rating.count===0 
                              ? (<img src="/images/empty-heart-icon.svg" alt="" />)
                              : (<img src="/images/fill-heart-icon.svg" alt="" />) 
                          }
                        
                      </span>
                  </div>
                  {item.id===1 && <OutOfStock>OUT OF STOCK</OutOfStock>}
              </ProductCard>

          )))  
          : (
                
                products.map((item)=>(
                    <ProductCard key={item.id}>
                        <div>
                            <img src={item.image} alt={item.image} />
                        
                        </div>

                        <div>
                            <span>{item.title.substring(0,10)}...</span>
                            <span>
                                <ProductName><Link as="a" to="">Sign in</Link> or Create an account to see Pricing</ProductName>
                                {
                                    item.rating.count===0 
                                    ? (<img src="/images/empty-heart-icon.svg" alt="" />)
                                    : (<img src="/images/fill-heart-icon.svg" alt="" />) 
                                }
                              
                            </span>
                        </div>
                        {item.id===1 && <OutOfStock>OUT OF STOCK</OutOfStock>}
                    </ProductCard>

                ))
            )
        }
                      
    {/* <ProductCard>
                          <div>
                            <img src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} alt="" />
                            
                          </div>

                          <div>
                            <span>fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</span>
                            <span>
                                <ProductName><Link as="a" to="">Sign in</Link> or Create an account to see Pricing</ProductName>
                                <img src="/images/fill-heart-icon.svg" alt="" />
                            </span>
                          </div>
                          <OutOfStock>OUT OF STOCK</OutOfStock>
                        </ProductCard> */}

    </>
  )
}

export default ProductSingleCard


const ProductCard=styled(Link)`
  
  padding:10px;
  max-width: 400px;
  height: 462px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
         /* box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
        border:2px solid rgba(249,249,249,0.1);
        cursor:pointer;
        transition:all 1s ease 0s;
        /* border-radius:10px; */
        
        /* border: 1px solid red; */
  
  div{
   
    
    &:nth-child(1){

      /* border: 2px solid red; */
      height:78%;
      width: 100%;
      overflow:hidden;
      position :relative ;

      img{
        inset:0px;
        display:block;
        width:100%;
        height:100%;
        object-fit:contain;
        position:absolute;
        
       
    }
      
    }
    &:nth-child(2){
    
      /* border: 2px solid red; */
      height:16%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    
      span{
        /* border:2px solid red; */
        
        &:nth-child(1){
            width: 88%;
            /* border: 2px solid black; */
            overflow: hidden;
            text-overflow: ellipsis;
            height: 50%;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 20px;
        }
        &:nth-child(2){
            height: 50%;
            /* border: 2px solid black; */
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            div{
                /* border: 2px solid blue; */
                /* height: 100%; */
                
            }
            img{
                /* border: 2px solid blue; */
                height: 100%;

            }
        }
      }
    }
    
  }

  &:hover{
    border-color:white;
        transform:scale(1.05);
        /* box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px; */
  }
     
`

const ProductName=styled.div`
    /* border: 2px solid blue; */
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    color: #888792;
    a{
        text-decoration: underline;
    }
`

const OutOfStock=styled.div`
    position: absolute;
    z-index: 200;
    background-color: #ffffff;
    width: 100%;
    height: 20%;
    top:40%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;

`