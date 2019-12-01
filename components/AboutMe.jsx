import {useEffect} from 'react';
import { useMutation } from '@apollo/react-hooks';
import {useInView} from 'react-intersection-observer';
import { FOCUS_NAV_QUERY, FOCUS_NAV_MUTATION } from '../locales/queries';
import styled from 'styled-components';


const AboutStyles = styled.section`
    max-height: 100vh;
    width: 100%;
    background-image:linear-gradient(rgba(66,66,66,.6),rgba(66,66,66,.6)),url(/img/bg-laptop.jpg);;
    display: flex;
    background-size:cover;
    background-position: 50%;
    color: white;
    background-repeat: no-repeat;
    
    .about{
        margin: 0 auto;
        text-align:center;
        margin-top: 5rem;

       p{
            width: 65vh;
            font-size:1.2rem;
            @media screen and (max-width: 600px){
                width: auto;
            }    
       }
        img{
            height: 15rem;
            width: 15rem;
            border-radius:100%;
        }
      
    }

    @media screen and (max-width: 600px){
        padding-bottom: 5rem;
    }

 

`;


const AboutMe = () => {
    const [updateFocus] = useMutation(FOCUS_NAV_MUTATION,{
        update: cache => {
            const data = cache.readQuery({
              query: FOCUS_NAV_QUERY
            });
    
            const dataClone = {
              ...data,
              focus: {
                ...data.focus,
                about: true,
                skills: false,
                projects: false,
                contact: false,
              }
            };
    
            cache.writeQuery({
              query: FOCUS_NAV_QUERY,
              data: dataClone
            });
          }
    });
    const [ref, inView] = useInView({
        threshold: 1,
    })

    useEffect(() => {
        updateFocus();
        return;
    },[inView])


    return(
        <AboutStyles ref={ref} id='aboutme'>
            <div className="about">
                
                <img  src='/img/perfil.png' alt="Perfil"/>
                    <p>
                        Hi ! I'm Jesus Padron an enthusiastic frontend developer with project experience
                        in React, Node.js, JavaScript, PHP, MongoDB among others.  Computer Engineering
                        graduate. Looking to join high-performing teams.
                    </p>
            </div>
        </AboutStyles>  
    )
}

export default AboutMe;