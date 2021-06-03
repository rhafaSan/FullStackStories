import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDom from 'react-dom';
import InputWithLabel from './InputWithLabel';

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value)
}

const InputWithLabelInstance = {
    id: 'search',
    value: 'React',
    onInputChange: handleSearch,
    label: 'search'
}

describe('InputWithLabel', function() {
    it('Deve renderizar o label com a string Search', function() {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDom.render(
                <InputWithLabel
                    id={InputWithLabelInstance.id}
                    value={InputWithLabelInstance.value}
                    onInputChange={InputWithLabelInstance.onInputChange}
                    label={InputWithLabelInstance.label}
                />, container
            );
        })
        const label = container.querySelector('label')
        expect(label?.textContent).toBe('Search');
    })
})