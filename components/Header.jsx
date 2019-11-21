import React,{useEffect} from 'react'
import Nav from './Nav';
import NavMovil from './NavMovil';
import styled from 'styled-components';

// import NProgress from 'nprogress';
// import Router from 'next/router';

const HeaderStyle = styled.header`
    display:grid;
    position:fixed;
    z-index: 3;
    width:100%;
    
    .responsive-bar__button{
        display:none;
    }
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
            &:hover{
                filter: opacity(50%)
            }

        }
        @media (max-width: 1300px) {
            border-top: 1px solid ${props => props.theme.lightgrey};
            width: 100%;
            justify-content: center;
            font-size: 1.5rem;
        }

    }

    .scroll {
        background-color: white;
        display: grid;
        justify-items:center;
        grid-template-columns: 1fr auto;
        -webkit-box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 7px -8px rgba(0,0,0,0.75);
        padding: 0.3125rem;

        a img{
            position:relative;
            top: 0.3125rem;
            bottom: 0;
            height:2.5rem ;
            width:2.5rem;
            &:hover{
                filter: opacity(50%)
            }

        }
        @media (max-width: 1300px) {
            border-top: 1px solid ${props => props.theme.lightgrey};
            width: 100%;
            justify-content: center;
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 700px){
        .bar, .scroll{
             display:none;

        }


    }

    
`;

const Header = () =>{
    useEffect(() => {
        window.onscroll = () => {
            const nav = document.querySelector('#navbar');
            if(window.scrollY <= 10) nav.className = 'bar'; else nav.className = 'scroll';
          };
    }, [])
    return(
        <HeaderStyle>
            <div className="bar" id="navbar">
                <Nav/>
                <a href="https://github.com/jesus4497">
                    <img  src='/icons/github.png' alt="Github"/>
                </a>
            </div>
            <NavMovil/>
        </HeaderStyle>
)}

export default Header;