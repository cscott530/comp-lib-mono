import * as React from 'react';

export type ButtonProps = {
    rounded: boolean
};

export const Button = (props: ButtonProps) => {
    return <button style={{borderRadius: props.rounded ? '10px' : 0, border: '1px solid black'}}>My button</button>
}