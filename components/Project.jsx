import styled from 'styled-components';
import Link from 'next/link';
import Tilt from 'react-tilt';
import Carousel from '../components/Carousel';
import Slide from 'react-reveal/LightSpeed';

const Item = styled.div`
  background: white;
  border: 1px solid grey;
  box-shadow: ${props => props.theme.bs};
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.2rem;
  }
  .buttonList {
    
    display: grid;
    width: 100%;
    border-top: 1px solid grey;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightgrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
    
    a{
      text-decoration: none;
      font-size:1.5rem;
      color: black;

      &:hover{
        color: lightgrey;
      }
    }
  }

`;

const Title = styled.h1`
    margin: 0 1rem;
    text-align: center;
    /* transform: skew(-5deg) rotate(-1deg); */
    margin-top: -3rem;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    a {
        display: inline;
        line-height: 1.3;
        font-size: 4rem;
        text-align: center;
        color: black;
        padding: 0 1rem;
        text-decoration: none;

        @media screen and (max-width:600px){
          font-size: 2rem;
        }

    }
    

`;
    
const Project = ({ link, title, description, imag, demo, git}) => (
  <Slide>

  
    <Tilt 
      className="Tilt" 
      options={{ 
        max : 15,
        perspective: 1500,
      }} 
    >
      <Item>
              <Carousel title={title} img={imag} />
              <Title>
                <a href={link}>{title}</a>
              </Title>
              <p>{description}</p> 

              <div className="buttonList">
                  <Link href={git}>
                      <a>View Code</a>
                  </Link>
                  { demo &&
                  <Link href={demo}>
                    <a>View Demo</a>
                  </Link>
                  }
                  

              </div>
          </Item>
    </Tilt>
  </Slide>
   
)

export default Project