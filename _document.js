import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <title>Bloggr</title>
          <meta
            name="description"
            content="Bloggr-let your mind speak"
          />
          <link rel="shortcut icon" href="/bloggr.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;