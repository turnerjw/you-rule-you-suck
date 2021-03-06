import * as React from "react";
import styled from "styled-components";

export const BoardHeader = styled.h1<{ content: string }>`
    font-size: 11vw;
    margin: 0;
    user-select: none;
    cursor: pointer;
    ::before {
        content: "${props => props.content}";
        position: absolute;
        z-index: -1;
        color: red;
        transform: translateX(0.5vw);
    }
`;

export interface HeaderProps {
    text: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ text }) => {
    return <BoardHeader content={text}>{text}</BoardHeader>;
};
