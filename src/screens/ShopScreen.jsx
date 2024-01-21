import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import TagLine from '../components/TagLine'
import Filters from '../components/Filters'
import FilterDropDownCards from '../components/FilterDropDownCards'
import { listProducts } from '../store/actions/productActions'
import {useDispatch,useSelector} from "react-redux"
// import products from '../product'
import ProductSingleCard from '../components/ProductSingleCard'

const ShopScreen = () => {

  const [sideNav,setSideNav]=useState(true);


  const dispatch=useDispatch();

  const filterCategories=[
    {
      id:1,   
        category:"ideal for",
        subCategories:["Man","Women","Children"]
    },
    {
      id:2,
        category:"occasion",
        subCategories:["Man","Women","Children"]
    },
    {
      id:3,
        category:"work",
        subCategories:["Man","Women","Children"]
    },
    {
      id:4,
        category:"fabric",
        subCategories:["Man","Women","Children"]
    },
    {
      id:5,
        category:"segment",
        subCategories:["Man","Women","Children"]
    },
    {
      id:6,
        category:"suitable for",
        subCategories:["Man","Women","Children"]
    },
    {
      id:7,
        category:"row materials",
        subCategories:["Man","Women","Children"]
    },
    {
      id:8,
        category:"pattern",
        subCategories:["Man","Women","Children"]
    },
  ];
  
  const productList=useSelector(state=>state.productList)
    const {loading,error,products}=productList;

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])


  const changMenu=(e)=>{
    setSideNav(!sideNav);
  }
 
  return (
    <Container>
      
      <Content>
          <TagLine/>
          {/* PageHeader */}
        
          <Filters sideNav={sideNav} changMenu={changMenu}/>

          <MainContent>

            <SideNav show={sideNav} >
              <InnerContainer>

              <FirstFilter>
                <input type="checkbox" name="" id="" />
                <span>Customizble</span>
              </FirstFilter>

              <AllFilterDropDown>
                {
                  filterCategories.map((item)=>(
                    
                    <FilterDropDownCards key={item.id} category={item}/>
                  ))
                }
                {/* <FilterDropDown>
                  <div>
                    <span>OCCASION</span>
                    <img src="/images/down-arrow-icon.svg" alt="" />
                  </div>
                  <div>All</div>
                </FilterDropDown> */}
                
              </AllFilterDropDown>
              
              </InnerContainer>
              
            </SideNav>

            <ProductsSection>

                  <ProductSingleCard products={products} error={error} loading={loading}/>
                      
            </ProductsSection>
          </MainContent>

      </Content>
    </Container>
  )
}



export default ShopScreen

const Container=styled.div`
  /* border: 1px solid red; */
  background-color: #ffffff;
  width: 100%;
  margin-top: 187px;
  
  /* For Mobile devices: 320px-480px */
  @media only screen and (min-width:320px) and (max-width:1200px) {
    
    margin-top: 80px;
    
    
  }
`

const Content=styled.div`
  /* border: 2px solid blue; */
  max-width: 1528px;
  min-height: 100%;
  margin:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* For Tablets or iPad: 480px - 768px */
  @media only screen and (min-width:1200px) and (max-width:1453px){
      /* border:5px solid red; */
      max-width: 1228px;

  }
`

const MainContent=styled.div`
  /* border:2px solid red; */
  display: flex;
  width: 100%;
  margin-top: 27px;
  
  `

const SideNav=styled.div`
  
  /* border:2px solid yellow; */
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* transform:${(props)=> props.show ? "translateX(0%)" : "translateX(100%)"};
  transition:transform 2s ease-in 0s; */

  display: ${(props)=>{
        if(props.show){
            return "block";
        }
        return "none";
  }};

    /* For Mobile devices: 320px-480px */
    @media only screen and (min-width:320px) and (max-width:1200px) {
      display: none;
    }


`

const InnerContainer=styled.div`
  /* border: 2px solid red; */
  width: 98%;
`

const FirstFilter=styled.div`
  /* &:nth-child(1){ */
      /* border: 2px solid black; */
      width: 100%;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      input[type="checkbox"]{
        height:22px ;
        width: 22px;
        border:0.92px;
      }
      span{
        font-weight: bold;
        margin-top: 7px;
        margin-left: 3px;
        text-transform: uppercase;
        font-size: 18px;
      }
    /* } */

`

const AllFilterDropDown=styled.div`
/* border: 2px solid black; */
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
width: 100%;
`


const ProductsSection=styled.div`
  /* border:2px solid black; */
  margin-bottom: 30px;
  width:${(props)=>{
        if(props.show){
            return "70%";
        }
        return "100%";
    }};

    /* FR(fr) means hole space give 1fr to first and so on*/
    display:grid;
    grid-gap: 1rem;
    /* grid-template-columns: 112px 112px 112px; */
    
    /* to create responsive */
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    justify-content: flex-start;
    align-items: flex-start;

      /* For Mobile devices: 320px-480px */
  @media only screen and (min-width:320px) and (max-width:1200px) {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  }

  /* div{
    width:${(props)=>{
        if(props.show){
            return "25%";
        }
        return "33%";
    }};
    border: 1px solid red;
    padding:10px;
  }  */

`
