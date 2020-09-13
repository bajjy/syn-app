import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle/*css */`
    html,
    body {
        min-height: 100vh;
        background-color: #799fb4;
        color: white;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    html {
        line-height: 1;
        font-size: $font-size-base;
    }

    body {
        display: block;
        font-family: $font-family-base;
        font-size: 1em;
        padding: 0;
        margin: 0;
    }

    header {
        padding-top: 1em;
        padding-bottom: 1em;
    }
    p {
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ol {
        padding: 0;
        margin: 0;
    }

    main {
        min-height: 75vh;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-left: 1em;
        padding-right: 1em;
        .row {
            margin-left: 0;
            margin-right: 0;
        }

        .container,
        .col {
            padding-left: 0;
            padding-right: 0;
        }
    }

    .root-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }
    .container {
        padding-bottom: 1em;
    }
`;

export default GlobalStyle;