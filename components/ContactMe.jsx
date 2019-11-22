import React, {useEffect} from 'react';
import Form from './Form';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide'

const ContactStyles = styled.section`
    width: 100%;
    display: grid;
    height: 100%;
    margin-bottom: 2rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    
    .contact{
        justify-self: right;
        margin-right: 3rem;
        p,a{
            img{
                cursor: pointer;
            }
            display:flex;
            flex-direction: row;
            align-content: center;
            margin: 0;
            font-size: 1.5rem;
            outline: none;
            color: ${props => props.theme.secondaryColor};
            img{
                margin-right: .9rem;
                height: 2rem;
                width: auto;
                &:hover{
                    filter: opacity(50%)
                }
            }
        }

        p img{
            height: 1.5rem;
            margin-left: .2rem;
            width: auto;
        }

        a:hover{
            color: ${ props => props.theme.mainColor };
        }

        h1{
            font-size: 4rem;
        }

        @media screen and (max-width: 850px){
            margin: 0;
        }
    }
    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: column;
        .contact{
            text-align: center;
            h1{
                font-size:2.5rem;
            }
            p,a{
                font-size: 1rem;
            }
        }
    }
`;

const ContactMe = () => (

    <Slide duration={1500} left>
        <ContactStyles id="contact">
            <div className="contact">
                <h1>
                    Contact
                </h1>
                <p><img src="/icons/email.svg" alt="Email"/> jesuspadron4497@gmail.com</p>
                <a href="https://github.com/jesus4497"> <img src="/icons/github.svg" alt="Github"/> My Github!</a>
                <a href="https://www.linkedin.com/in/jes%C3%BAs-padr%C3%B3n-romero-21b016158/"> <img src="/icons/linkedin.svg" alt="LinkedIn"/> LinkedIn</a>
            </div>
            <Form/>
        </ContactStyles>
    </Slide>
    
)

export default ContactMe