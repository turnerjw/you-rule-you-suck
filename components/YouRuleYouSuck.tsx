import * as React from "react";
import { Header } from "./Header";

export const YouRuleYouSuck: React.FunctionComponent = () => {
    return (
        <table style={{ width: "100%" }}>
            <thead>
                <th>
                    <Header text="YOU RULE" />
                </th>
                <th>
                    <Header text="YOU SUCK" />
                </th>
            </thead>
        </table>
    );
};
