import React from 'react'
import styled from "styled-components"

const TagLine = () => {
  return (
    <TagLineContent>

          <div>DISCOVER OUR PRODUCTS</div>
          <div>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</div>
    </TagLineContent>
  )
}

export default TagLine

const TagLineContent=styled.div`
    /* border:2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 240px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    div{
        &:nth-child(1){
            font-size: 60px;
            /* font-weight: bold; */
            /* border: 2px solid red; */
            letter-spacing: 1.5px;
           margin-bottom: 12px;
        }
        &:nth-child(2){
            margin-top: 13px;
            /* border: 2px solid red; */
            width: 50%;
            text-align: center;
            font-size: 22px;
            letter-spacing: 0.5px;
            line-height: 40px;
        }
    }
`