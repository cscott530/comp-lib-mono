import * as React from 'react';
import styled from "styled-components";

const ButtonStyle = styled.button <{rounded: boolean }>`
    border: 1px solid black;
    border-radius: ${({rounded}) => rounded ? '10px' : 0};
`

export type ButtonProps = {
    rounded: boolean
};

export const Button = (props: ButtonProps) => {
    return <ButtonStyle rounded={props.rounded}>My button</ButtonStyle>
}