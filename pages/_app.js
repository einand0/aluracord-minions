function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: #FFDA1F;
          border-radius:5px;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: blue;
          border-radius: 5px; 
          border: 3px solid #FFDA1F; 
        }

        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */

      `}</style>
    );
  }

export default function CustomApp({ Component, pageProps}) {

    return (
        <>
        <GlobalStyle />
        <Component {...pageProps} />
        </>)
}