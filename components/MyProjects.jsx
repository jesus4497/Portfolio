import Project from './Project';
import styled from 'styled-components';

const ProjectList = styled.div`
    max-width:${props => props.theme.maxWidth};
    margin:0 auto;
    padding: 0 2rem 2rem 2rem;
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-gap: 6rem;

    @media screen and (max-width: 780px){
        display: flex;
        flex-direction: column;
    }

`

const Inner = styled.section`
   
    background-color: ${props => props.theme.lightGrey};
    text-align:center;
    h1{
        padding-top:2rem;
        margin-bottom: 0;
        font-size:3.5rem;
        position: relative;
        &:after{
            content:"";
            position: absolute;
            width: 10%;
            height: 5px;
            background: ${props => props.theme.mainColor};
            left: 45%;
            bottom: -5px;
        }
        
    }
`;

const MyProjects = () =>(
    <Inner>
        <h1>Projects</h1>
        <ProjectList id="projects">
            <Project 
                title="Game Store" 
                description="An e-commerce for the selling of videogames using React, Apollo, GraphQL, Prisma" 
                imag={'game'} 
                demo={'https://gamestore-next-prod.herokuapp.com/'} 
                git={'https://github.com/jesus4497/Game-Store'}
            />
            <Project 
                title="Video App" 
                description="A web app in which shows the user the 7 most trending movies of the genre of horror using React, Redux, Sass" 
                imag={'videoApp'} 
                demo={'https://jesus4497.github.io/'}
                git={'https://github.com/jesus4497/videoApp'}
            />
            <Project 
                title="Genetic Algorithms"
                imag={'genetics'}
                description="Predictive model through genetic algorithms for the projection of the inflationary increase using Python, JavaScript, Eel"
                git={'https://github.com/jesus4497/tesisGeneticAlgorithm'}
            />
            <Project 
                title="Mangafy"
                imag={'mangafy'} 
                description="Web Page for downloading mangas using PHP, JavaScript, MySQL among others."
                git={'https://github.com/jesus4497/Mangafy'}
            />

        </ProjectList>
    </Inner>
    
)

export default MyProjects