import Document, { Html, Head, NextScript, Main } from "next/document"


export default class MyDocument extends Document {

    
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <NextScript />
                    <Main />
                </body>
            </Html>
        )
    }
}
