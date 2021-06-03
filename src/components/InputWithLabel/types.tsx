import React from 'react';

type InputWithLabelProps = {
    id: string;
    label: string;
    value: string;
    type?: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} 

export default InputWithLabelProps;