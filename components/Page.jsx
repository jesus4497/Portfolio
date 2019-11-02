import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta';
import Header from './Header';


const GlobalStyle = createGlobalStyle`
  body{
        font-family:arial;
        padding:0;
        margin:0
    }
`

const Page = props => {
    
        return (
            <div>
                <GlobalStyle/>
                <Meta/>
                <Header/>
                {props.children}
            </div>
        );
    }

export default Page;