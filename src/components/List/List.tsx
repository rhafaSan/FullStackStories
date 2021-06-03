import ListProps from "./types"
import styled from 'styled-components';
const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objId: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objId: 1
    }
  ]

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
  
 export const List = ({list} : ListProps) =>
   (
    <DivMap>
    { list.map(item => (
      <DivKey key={item.objId}>
        <span>
          <Link href={item.url}> {item.title} </Link>
        </span>
        <Text> {item.author} </Text>
        <Text>{item.num_comments} </Text>
        <Text>{item.points} </Text>
      </DivKey>
    )) }
    </DivMap>
   )