import * as React from "react";
import styled from "styled-components";
import { writeText } from "clipboard-polyfill";
import { motion, AnimatePresence } from "framer-motion";

const Button = styled(motion.button)`
    z-index: 1;
    border: none;
    background-color: #fffff6;
    font-size: 25px;
    font-family: inherit;
    cursor: pointer;
    padding: 20px 15px 15px 18px;
    line-height: 15px;
    border-radius: 20px;
`;

const Message = styled(motion.p)`
    z-index: -1;
    font-size: 25px;
    line-height: 15px;
`;

const Container = styled.div`
    position: fixed;
    left: 25px;
    bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export interface ShareProps {
    ruleCount: number;
    suckCount: number;
}

export const Share: React.FunctionComponent<ShareProps> = ({
    ruleCount,
    suckCount
}) => {
    const [text, setText] = React.useState("Link Copied");
    const [isVisible, setIsVisible] = React.useState(false);

    const handleClick = () => {
        writeText(
            `robins-whiteboard.jstntrnr.com/?r=${ruleCount}&s=${suckCount}`
        ).then(
            function() {
                setText("Link Copied");
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                }, 3000);
            },
            function() {
                setText("Failed to copy link");
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                }, 3000);
            }
        );
    };

    return (
        <Container>
            <AnimatePresence>
                {isVisible && (
                    <Message
                        initial={{ opacity: 0, translateY: 45 }}
                        animate={{ opacity: 1, translateY: 5 }}
                        exit={{ opacity: 0, translateY: 45 }}
                    >
                        {text}
                    </Message>
                )}
            </AnimatePresence>
            <Button
                initial={{
                    color: "black",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 20px -7px"
                }}
                whileHover={{
                    translateY: "-3px",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 10px 20px 0px"
                }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
            >
                Share This Board
            </Button>
        </Container>
    );
};
