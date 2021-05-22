import React, { Fragment, useMemo, useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Theme from 'themes/theme'
import { PageLoading, SEO } from 'components'
import { Admin, Site, Login, ErrorLayout } from 'layout'
import { AppProvider } from 'contexts'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box !important;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background-color: #ffffff;
  }

  input, textarea, button {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }

  input[type=checkbox] {
    border: 1 solid #333 !important;
  }

  a {
    color: inherit;
  }

  ul, ol {
    padding-left: 15px;
  }
  
  #__next {
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
  }

  .spin {
    animation: spin 500ms infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { route } = router

  const Layout = useMemo(() => {
    const isAdmin = route.startsWith('/admin')
    const isLogin = route.startsWith('/login')
    const isError = ['/404', '/500'].includes(route)

    let layout = Site
    if (isError) layout = ErrorLayout
    if (isAdmin) layout = Admin
    if (isLogin) layout = Login

    return layout
  }, [route])

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return (
    <Fragment>
      <PageLoading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/animate.min.css" />
      </Head>
      <SEO />

      <ToastContainer autoClose={2500} />
      <Theme>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </Theme>
    </Fragment>
  )
}

export default MyApp
