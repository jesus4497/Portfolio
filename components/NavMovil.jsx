import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ResponsiveNav = styled.div`
    padding: 20px;
    position: relative;
    display:flex;
    flex-direction:column;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 40%;
    /* min-width: 500px; */
    bottom: 0;
    transform: translateX(100%);
    transition: all 0.3s;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 5;
    display: grid;
    grid-template-rows: auto 1fr auto;
    ${props => props.open && `transform: translateX(0%);`};
  
    ul {
        list-style-type: none;
        li a{
            display: flex;
            text-decoration: inherit;
            padding:.75rem;
            color: #03A696;
            position: relative;
            &:after {
                height: 2px;
                background: #038C7F;
                content: '';
                width: 0;
                position: absolute;
                transform: translateX(-50%);
                transition: width 0.4s;
                transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
                left: 50%;
                margin-top: 2rem;
            }
            &:hover,
            &:focus{
                outline: none;
                &:after{
                    width: calc(100% - 10rem);
                    
                }
                @media (max-width: 700px) {
                    width: calc(100% - 10px);
                }
            }
        }
    }
`;

const CloseButton = styled.button`
    background-color:transparent;
    color: ${props => props.theme.mainColor};
    font-size: 3rem;
    cursor: pointer;
    border: 0;
    position: absolute;
    z-index: 2;
    right: 0;
    &:hover{
        color:${props => props.theme.secondaryColor};
    }
`;

const OpenButton = styled.button`
    display:none;
     @media screen and (max-width: 700px){
        
        display:block;
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.mainColor};
        font-size: 1.5rem;
        cursor: pointer;
        border: 0;
        position: absolute;
        z-index: 2;
        right: 0;
        &:hover{
            color:${props => props.theme.secondaryColor};
        }
    }
    div{
        width: 35px;
        height: 5px;
        background-color: ${ props => props.theme.mainColor};
        margin: 6px 0;
    }

`;

class NavMovil extends Component {
    state = {
        open: false
    }

    handleCloseButton = () =>{
        this.setState({
            ...this.state,
            open: !this.state.open
        })
    }

    render() {
        return (
            <>
                <OpenButton onClick={this.handleCloseButton}>
                    <div></div>
                    <div></div>
                    <div></div>
                </OpenButton>
                <ResponsiveNav open={this.state.open}>
                    <CloseButton onClick={this.handleCloseButton} title="close">&times;</CloseButton>
                    <ul>
                        <li>
                            <Link href="#aboutme">
                                <a>About Me</a>
                            </Link>

                        </li>

                        <li>

                            <Link href="#skills">
                                <a>My Skills</a>
                            </Link>

                        </li>

                        <li>

                            <Link href="#projects">
                                <a>My Projects</a>
                            </Link>

                        </li>

                        <li>

                            <Link href="#contact">
                                <a >Contact Me</a>
                            </Link>

                        </li>
                    </ul>
                </ResponsiveNav>
            </>
        );
    }
}

export default NavMovil;