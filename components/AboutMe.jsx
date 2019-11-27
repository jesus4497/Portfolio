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

const AboutMe = () => (
    <AboutStyles id='aboutme'>
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

export default AboutMe;