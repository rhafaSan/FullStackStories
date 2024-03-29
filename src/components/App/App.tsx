import React, { useEffect, useState } from 'react';
import useSemiPersistentState from '../../Hooks/UseSemiPersistentState';
import  InputWithLabel  from '../InputWithLabel/InputWithLabel';
import { List } from '../List/List';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 35px;
  font-weight: 600;
  
`

const Header = styled.div`
  width: 100vw;
  height: 90px;
  padding-top: 1%;
  /* border: 1px solid #000; */
  padding-left: 5%;
  text-align: center;
  background-color: #9358ca;
  color: #fff;
`

const DivSearch = styled.div`
  /* border: 1px solid #000; */
  
  width: 100%;
  height: 5vh;
  padding-left: 125px;
  padding-top: 25px;
`

const App = () => {

  const stories =[
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

  const [ searchTerm, setSearchTerm ] = useSemiPersistentState(
    'search',
    'React'
  );
  
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const searchdStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })



  return (
    <div className="App">
      <Header>
        <H1>
          My Full Stack Dev Stories
        </H1>
      </Header> 

      <DivSearch>
        <InputWithLabel
          id='search'
          value={searchTerm}
          onInputChange={handleSearch}
          label="Search"
          />

      </DivSearch>
      {/* <hr /> */}
    

      <List list={searchdStories} />

    </div>
  );
}

export default App;


