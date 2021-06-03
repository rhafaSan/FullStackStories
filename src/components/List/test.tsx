import React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDom from 'react-dom';
import { List } from './List';

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

  describe('List', function() {
      it('Deve renderizar os títulos como Redux ou React', function(){
          let container = document.createElement('div');
          document.body.appendChild(container);
          act (() => {
              ReactDom.render(
                  <List list={stories} />, container
              );
          })
          const item = container.querySelector('a');
          expect(item?.textContent == 'Redux' || item?.textContent == 'React').toBeTruthy();
      })
  })