import * as React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }
        `}</style>
        <Head>
          <title>Material News</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
