import { NextPage } from "next";
import Head from "next/head";
import { YouRuleYouSuck } from "../components/YouRuleYouSuck";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    return (
        <div style={{ height: "100vh" }}>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Neucha&display=swap"
                    rel="stylesheet"
                />
                <link rel="manifest" href="/static/manifest.json" />
                <meta name="theme-color" content="#505050" />
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
                      font-display: auto;
                    }
                  `}
                </style>
            </Head>
            <YouRuleYouSuck />
        </div>
    );
};

export default Home;
