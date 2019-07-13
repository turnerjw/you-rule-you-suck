import * as React from "react";
import styled from "styled-components";

export interface TallyCounterProps {
    count: number;
}

const Tally = styled.ul`
    height: 100%;
    li {
        display: inline-block;
        height: 15vw;
        border: 0.5vw solid #000;
        margin-right: 4vw;
        border-radius: 23% 42% 41% 16% / 47% 16% 65% 21%;
        &:nth-child(5n) {
            transform: rotate(300deg);
            height: 24vw;
            position: relative;
            left: -12vw;
            top: 5vw;
            margin-right: 1em;
            margin-top: -9vw;
        }
    }
`;

export const TallyCounter: React.FunctionComponent<TallyCounterProps> = ({
    count
}) => {
    const renderTally = (count: number) => {
        let tally = [];

        for (let index = 0; index < count; index++) {
            tally.push(<li />);
        }
        return tally;
    };

    return <Tally>{renderTally(count)}</Tally>;
};
