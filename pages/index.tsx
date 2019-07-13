import { NextPage } from "next";
import Head from "next/head";
import { YouRuleYouSuck } from "../components/YouRuleYouSuck";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Neucha&display=swap"
                    rel="stylesheet"
                />
                <style>
                    {`
                    html, body 
                    {
                      margin:0;
                      padding:0;
                      height:100%;
                      border:none
                    }
                    body {
                      font-family: 'Neucha', cursive;
                      background-color: #fffff6;
                    }
                  `}
                </style>
            </Head>
            <YouRuleYouSuck />
        </div>
    );
};

export default Home;
