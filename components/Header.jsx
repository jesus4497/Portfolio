import Nav from './Nav';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    position:fixed;
    width:100%;
      .bar {
        display: grid;
        justify-items:center;
        grid-template-columns: 1fr auto;
        -webkit-box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
        padding: 0.3125rem;
        
      
       a img{
           cursor: pointer;
            position:relative;
            top: 0.3125rem;
            bottom: 0;
            height:2.5rem ;
            width:2.5rem;

        }
    }
`;

const Header = () =>(
    <HeaderStyle>
        <div className="bar">
            <Nav/>
            <a href="https://github.com/jesus4497">
                <img  src='../static/logotipo-de-github.png' alt="Github"/>
            </a>
        </div>
       
    </HeaderStyle>
)

export default Header;