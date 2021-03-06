import * as React from "react";
import { Tally } from "./Tally";

export interface TallyCounterProps {
    count: number;
}

export const TallyCounter: React.FunctionComponent<TallyCounterProps> = ({
    count
}) => {
    const renderTallies = (count: number) => {
        let tallies = [];
        const fullCounts = Math.floor(count / 5);
        const remainder = count % 5;

        for (let index = 0; index < fullCounts; index++) {
            tallies.push(<Tally count={5} key={index} />);
        }

        tallies.push(<Tally key={fullCounts} count={remainder} />);

        return tallies;
    };

    return <>{renderTallies(count)}</>;
};
