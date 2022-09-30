import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import { css, Global } from '@emotion/react';

const App = ( { Component, pageProps }: AppProps ) => {
    return (
        <>
            <Global styles={{
                '@font-face': {
                    fontFamily: 'Noto Sans KR',
                    src: 'url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap)'
                },
                body: {
                    fontFamily: 'Noto Sans KR'
                }
            }}/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;