import * as React from "react";
import { Header } from "./Header";
import { TallyCounter } from "./TallyCounter";

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
            <tbody style={{ minHeight: "15vw" }}>
                <tr>
                    <td
                        onClick={incrementYouRule}
                        style={{
                            borderRight: "1vw solid black",
                            cursor: "pointer",
                            verticalAlign: "top"
                        }}
                    >
                        <TallyCounter count={youRuleCount} />
                    </td>
                    <td
                        onClick={incrementYouSuck}
                        style={{ cursor: "pointer", verticalAlign: "top" }}
                    >
                        <TallyCounter count={youSuckCount} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
