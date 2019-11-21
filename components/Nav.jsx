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
        &:hover,
        &:focus{
            outline: none;
            &:after{
                width: calc(100% - 3.75rem)
            }
            @media (max-width: 700px) {
                width: calc(100% - 10px);
            }
        }
    }
   

`;




const Nav = () => (
    <NavBar>
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

    </NavBar>
)

export default Nav;