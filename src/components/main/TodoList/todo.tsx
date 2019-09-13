import * as React from 'react';
import styled from 'styled-components';

export interface TodoProps {
    index: number;
    title: string;
    description: string;
    onChangeTitle: (value:string) => void;
    onChangeDescription: (value:string) => void;
}

export const Todo:React.FC<TodoProps> = (props:TodoProps)=> {
    return(
        <React.Fragment>
            <TextBoxTitle value={props.title} onChange = {e => props.onChangeTitle(e.target.value)} placeholder="title"/>
            <TextBoxDes value={props.description} onChange = {e => props.onChangeDescription(e.target.value)} placeholder="description"/>
        </React.Fragment>
    )
}

const TextBoxTitle = styled.input.attrs({
    type: 'text',
})`
    padding: 0.1rem 0.3rem;
    
    border-radius: 2px;
    color: #000000;
    font-size: 0.8rem;
    margin:1px;
    cursor:pointer;
    width:15%;
    min-width:30px;
    
    border:none;
    outline: 0;
    &:focus {
        border: 1px solid #ddd;
        margin:0;
        cursor:text;
    }
`;

const TextBoxDes = styled.input.attrs({
    type: 'text',
})`
    padding: 0.1rem 0.3rem;
    
    border-radius: 2px;
    color: #000000;
    font-size: 0.8rem;
    margin:1px;
    cursor:pointer;
    width:30%;
    min-width:60px;

    border:none;
    outline: 0;
    &:focus {
        border: 1px solid #ddd;
        margin:0;
        cursor:text;
    }
`;