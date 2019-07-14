import * as React from "react";
import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";
import { Header } from "./Header";
import { TallyCounter } from "./TallyCounter";

const EraseButton = styled(motion.button)`
    position: fixed;
    right: 25px;
    bottom: 25px;
    border: none;
    background-color: #fffff6;
    font-size: 25px;
    font-family: inherit;
    cursor: pointer;
    padding: 20px 15px 15px 18px;
    line-height: 15px;
    border-radius: 20px;
`;

const Table = styled.table`
    user-select: none;
    width: 100%;
    border-spacing: 0;
`;

const Layout = styled.div`
    height: 100%;
    user-select: none;
`;

export const spring: MotionProps["transition"] = {
    type: "spring",
    stiffness: 1000,
    damping: 40
};

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
        <Layout>
            <Table>
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody style={{ height: "40vw" }}>
                    <tr style={{ height: "40vw" }}>
                        <td
                            onClick={incrementYouRule}
                            style={{
                                borderRight: "1vw solid black",
                                borderRadius: "0% 1% 1% 55% / 0% 65% 26% 3%",
                                cursor: "pointer",
                                verticalAlign: "top",
                                minHeight: "15vw",
                                padding: "40px"
                            }}
                        >
                            <TallyCounter count={youRuleCount} />
                        </td>
                        <td
                            onClick={incrementYouSuck}
                            style={{
                                cursor: "pointer",
                                verticalAlign: "top",
                                minHeight: "15vw",
                                padding: "40px"
                            }}
                        >
                            <TallyCounter count={youSuckCount} />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <EraseButton
                transition={spring}
                onClick={() => {
                    setYouRuleCount(0);
                    setYouSuckCount(0);
                }}
                initial={{
                    color: "black",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 20px -7px"
                }}
                whileHover={{
                    translateY: "-3px",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 10px 20px 0px"
                }}
                whileTap={{ scale: 0.9 }}
            >
                Erase Board
            </EraseButton>
        </Layout>
    );
};
