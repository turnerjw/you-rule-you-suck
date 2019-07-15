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
                <link
                    rel="apple-touch-icon"
                    href="static/images/icons/icon-512x512.png"
                />
                <meta name="theme-color" content="#505050" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <meta name="HandheldFriendly" content="true" />
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
