import React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDom from 'react-dom';
import App from './App';

describe('App', function(){
    it('Deve renderizar o título da aplicação corretamente', function(){
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDom.render(<App/>, container);
        })
        const header = container.querySelector('h1');
        expect(header?.textContent).toBe('My Full Stack Dev Stories');
    });
});