import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
          color: "white",
          height:"100vh",
          backgroundImage:"linear-gradient(-90deg, gray, black)",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
