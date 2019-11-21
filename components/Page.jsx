import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const theme = {
    mainColor: '#03A696',
    secondaryColor: '#038C7F',
    lightGrey:"#F2F2F2",
    maxWidth:'1300px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:'Rambla';
        src: url('/static/Rambla-Regular.ttf');
        font-weight: normal;
        font-style:normal;
    }

    body{
            font-family:'Rambla';
            padding:0;
            margin:0
        }

    html {
	    scroll-behavior: smooth;
    }
    a,button{
        cursor: pointer;
    }
    


`


const Page = props => {
    
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Meta/>
                <Header/>
                {props.children}
                <Footer/>
                
            </ThemeProvider>
        );
    }

export default Page;