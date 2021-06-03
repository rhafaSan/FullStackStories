import React from 'react';
import ListProps from "./types"
import styled from 'styled-components';

  const DivMap = styled.div`
    /* border: 1px solid #999797; */
    padding: 5%;
  `

  const DivKey = styled.div`
    border: 1px dashed #999;
    padding: 5%;
    text-align: center;
  `

  const Link = styled.a`
    font-size: 18px;
    color: #4f2ec599;
    text-decoration: none;
    &:hover{
      color: #e213e299;
    }
  `
  
  const Text = styled.span`
    color: #000000c1;
  `
  
 const List = ({ list } : ListProps) =>
   (
    <>
    { list.map(item => (
      <div key={item.objectId}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author} </span>
        <span>{item.num_comments} </span>
        <span>{item.points} </span>
      </div>))}
    </>
   )

  export default List