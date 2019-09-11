import * as React from 'react';

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
            <input type="text" value={props.title} onChange = {e => props.onChangeTitle(e.target.value)} placeholder="title"/>
            <input type="text" value={props.description} onChange = {e => props.onChangeDescription(e.target.value)} placeholder="description"/>
        </React.Fragment>
    )
}
