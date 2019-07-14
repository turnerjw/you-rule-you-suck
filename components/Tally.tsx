import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export interface TallyProps {
    count: number;
}

const TallyMarks = styled.ul`
    height: 100%;
    display: inline-block;
    padding: 0;
    margin: 0 -25px 30px 0;
    user-select: none;
    li {
        display: inline-block;
        height: 15vw;
        border: 0.5vw solid #000;
        margin-right: 3.5vw;
        border-radius: 23% 42% 41% 16% / 47% 16% 65% 21%;
        transform-origin: top;
        &:nth-child(5n) {
            transform: rotate(300deg);
            height: 20vw;
            position: relative;
            left: -20vw;
            top: 8vw;
            margin-top: -9vw;
        }
    }
`;

export const Tally: React.FunctionComponent<TallyProps> = ({ count }) => {
    const renderTally = (count: number) => {
        let tally = [];

        for (let index = 0; index < count; index++) {
            if (index % 5 === 4) {
                tally.push(
                    <motion.li
                        key={index}
                        initial={{ scaleY: 0, scaleX: 0, rotate: "300deg" }}
                        animate={{ scaleY: 1, scaleX: 1, rotate: "300deg" }}
                    />
                );
            } else {
                tally.push(
                    <motion.li
                        key={index}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                    />
                );
            }
        }
        return tally;
    };

    return <TallyMarks>{renderTally(count)}</TallyMarks>;
};
