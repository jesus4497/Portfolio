import { useEffect, useRef } from 'react';
import {useQuery} from '@apollo/react-hooks';
import { FOCUS_NAV_QUERY } from '../locales/resolvers';
import styled from 'styled-components';
import Link from 'next/link';

const NavBar = styled.ul`
    display: flex;
    list-style-type: none;

    li a{
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
        &:hover{
            outline: none;
            &:after{
                width: calc(100% - 3.75rem)
            }
            @media (max-width: 700px) {
                width: calc(100% - 10px);
            }
        }

       
    }

    .active{
            outline: none;
            &:after{
                width: calc(100% - 3.75rem)
            }
            @media (max-width: 700px) {
                width: calc(100% - 10px);
            }
        }
   

`;

const Nav = () => {

    const { data } = useQuery(FOCUS_NAV_QUERY);

    const about = useRef();
    const skills = useRef();
    const projects = useRef();
    const contact = useRef();
    
    if(data.focus.about){
        about.current.classList.add("active");
        skills.current.classList.remove("active");
        projects.current.classList.remove("active");
        contact.current.classList.remove("active");
    }
    if(data.focus.skills){
        about.current.classList.remove("active");
        skills.current.classList.add("active");
        projects.current.classList.remove("active");
        contact.current.classList.remove("active");
    }
    if(data.focus.projects){
        about.current.classList.remove("active");
        skills.current.classList.remove("active");
        projects.current.classList.add("active");
        contact.current.classList.remove("active");
    }

    if(data.focus.contact){
        about.current.classList.remove("active");
        skills.current.classList.remove("active");
        projects.current.classList.remove("active");
        contact.current.classList.add("active");
    }

    return(
        <NavBar>
            <li>
                <Link  href="#aboutme">
                    <a ref={about}>About Me</a>
                </Link>
                
            </li>

            <li>
                <Link href="#skills">
                    <a ref={skills}>My Skills</a>
                </Link>
                
            </li>

            <li>
                <Link href="#projects">
                    <a ref={projects}>My Projects</a>
                </Link>
                
            </li>

            <li>
                <Link href="#contact">
                    <a ref={contact}>Contact Me</a>
                </Link>
                
            </li>

        </NavBar>
    )
}

export default Nav;