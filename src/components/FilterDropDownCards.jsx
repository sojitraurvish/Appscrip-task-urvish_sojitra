import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import FilterDropDownCard from './FilterDropDownCard';

const FilterDropDownCards = ({category:item}) => {
  const [subDropDown,setSubDropDown]=useState(false);


  const changeSubDropDown=(e)=>{
    setSubDropDown(!subDropDown);
  }

  const unSelectAllCheckBox=(e)=>{

  }
  return (<>
      
          <FilterDropDown  >
            
            <div onClick={(e)=>changeSubDropDown(e)}>
              <span>{item.category}</span>
              <img src={subDropDown?`/images/above-arrow-icon.svg` : `/images/down-arrow-icon.svg`} alt=""/>
            </div>
            <div>All</div>
            <SubDropDown subDropDown={subDropDown}>
              <span onClick={(e)=>unSelectAllCheckBox(e)}>Unselect all</span>
              {
                item.subCategories.map((item)=>(
                  <FilterDropDownCard key={item.subCategory} subCategory={item} unSelectAllCheckBox={unSelectAllCheckBox}/>
                ))
              }
              
            </SubDropDown>
          </FilterDropDown>
  </>
  )
}

export default FilterDropDownCards


const FilterDropDown=styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 10px;
  padding-bottom: 10px;

  div{

    padding-top:5px;
    padding-bottom: 5px;
    &:nth-child(1){
      display: flex;
      /* border: 2px solid yellow; */
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0.5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      
      span{
        text-transform: uppercase;
        
      }
      image{
      
      }

    }
    &:nth-child(2){
      font-size: 18px;
    }
  }
`

const SubDropDown=styled.div`
  /* border: 2px solid red; */
  
  margin-top:13px;
  margin-bottom:13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* display: none; */
  display: ${(props)=>{
        if(props.subDropDown){
            return "block";
        }
        return "none";
  }};
  
  span{
    &:first-child{
      width: 100%;
      
      font-size: 16px;
      text-decoration: underline;
      color:#c3cbd0;
      margin-bottom: 20px;
      /* border: 2px solid red; */
    }
  }
  div{
    display: flex;
    align-items: center;
    /* border: 2px solid red; */
    width:100% ;
    margin-top: 3px;
    margin-bottom: 3px;
    input[type="checkbox"]{
      height: 18px;
      width: 18px;
    }
    span{
      /* width: 100%; */
      margin-left: 5px;
      font-size: 18px;
      /* border: 2px solid red; */
      
    }
  }

`