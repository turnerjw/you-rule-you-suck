import * as React from "react";
import { Header } from "./Header";
import { TallyCounter } from "./TallyCounter";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
`;

const Board = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-around;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const VLine = styled.div`
    width: 1vw;
    background-color: black;
    align-self: stretch;
    border-radius: 23% 42% 41% 16% / 47% 16% 65% 21%;
`;

const HLine = styled.div`
    height: 1vw;
    background-color: black;
    align-self: stretch;
    border-radius: 23% 42% 41% 16% / 47% 16% 65% 21%;
`;

export const YouRuleYouSuck: React.FunctionComponent = () => {
    const [youRuleCount, setYouRuleCount] = React.useState(0);
    const [youSuckCount, setYouSuckCount] = React.useState(0);

    const incrementYouRule = () => {
        setYouRuleCount(youRuleCount + 1);
    };

    const incrementYouSuck = () => {
        setYouSuckCount(youSuckCount + 1);
    };

    return (
        <div style={{ height: "100%" }}>
            {/* <Board>
                <Column>
                    <Header text="YOU RULE" />
                    <HLine />
                </Column>
                <VLine />
                <Column>
                    <Header text="YOU SUCK" />
                    <HLine />
                </Column>
            </Board> */}
            <table style={{ width: "100%", borderSpacing: 0 }}>
                <thead>
                    <th
                        onClick={incrementYouRule}
                        style={{
                            borderRight: "1vw solid black",
                            borderBottom: "1vw solid black",
                            borderRadius: "0% 1% 21% 44% / 0% 65% 3% 3%",
                            width: "50%"
                        }}
                    >
                        <Header text="YOU RULE" />
                    </th>
                    <th
                        onClick={incrementYouSuck}
                        style={{
                            borderBottom: "1vw solid black",
                            borderRadius: "0% 1% 21% 55% / 0% 65% 2% 3%",
                            width: "50%"
                        }}
                    >
                        <Header text="YOU SUCK" />
                    </th>
                </thead>
                <tbody style={{ height: "40vw" }}>
                    <tr>
                        <td
                            onClick={incrementYouRule}
                            style={{
                                borderRight: "1vw solid black",
                                borderRadius: "0% 1% 1% 55% / 0% 65% 26% 3%",
                                cursor: "pointer",
                                verticalAlign: "top",
                                minHeight: "15vw"
                            }}
                        >
                            <TallyCounter count={youRuleCount} />
                        </td>
                        <td
                            onClick={incrementYouSuck}
                            style={{
                                cursor: "pointer",
                                verticalAlign: "top",
                                minHeight: "15vw"
                            }}
                        >
                            <TallyCounter count={youSuckCount} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
