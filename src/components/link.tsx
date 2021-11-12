import * as React from 'react';

export type LinkProps = {
    href: string;
    text: string;
};

export const Link = (props: LinkProps) => {
    return <a href={props.href}>{props.text}</a>;
}