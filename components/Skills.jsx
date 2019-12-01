import { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { FOCUS_NAV_QUERY, FOCUS_NAV_MUTATION } from '../locales/queries';
import { useInView } from 'react-intersection-observer';
import SkillsIcons from './SkillsIcons';
import styled from 'styled-components';
import getIcons from '../lib/getIcons'

const SkillsStyles = styled.section`
    text-align: center;
    padding: 2rem;

    .skills{
        margin: 0 auto;
        margin-top:2rem;
        text-align:center;
        position:relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;

        img{
            height: 15rem;
            width: auto;
        }

        .platforms{
            position: relative;
            display: grid;
            grid-template-columns: 10rem 10rem 10rem;
            justify-items: center;
            img, svg{
                height: 4rem;
            }

            @media screen and (max-width: 400px){
                grid-template-columns: 4rem 4rem 4rem;
                gap: 2rem
            }
        }

        @media screen and (max-width: 1600px){
            .platforms{
                grid-template-columns: 4rem 4rem 4rem;
                gap: 1.5rem
            }
        }

        @media screen and (max-width: 850px){
            display: flex;
            width: calc(100% - 5rem);
            flex-direction: column;
            justify-self: center;
            align-items: center;
            margin-bottom:5rem;
        }

        h2{
            position: relative; 
            &:after{
                content:"";
                height:2.5px;
                background-color: ${props => props.theme.mainColor};
                width: calc(25% - 3.75rem);
                position: absolute;
                bottom: -20%;
                right: 43%;
                @media (max-width: 1600px) {
                    width: calc(25% - 20px);
                }
            }
        }
        
    }

    p{
        font-size: 1.3rem;
        display: flex;
        width: 65vh;
        margin: 0 auto; 
        margin-top:2rem;
        margin-bottom:3rem;
    }
    

    h1{
        font-size: 2.5rem;
    }

    

    @media screen and (max-width: 1600px){
            font-size: 1rem;
            width: auto;
            p{
                font-size: 1.2rem;
                width: 50vh;
            }
    }

    @media screen and (max-width: 850px){
            p{
                width: auto;
            }
    }

    @media screen and (max-width: 400px){
            font-size: 1rem;
            width: auto;
    }

   


`
const frontIcons = getIcons('frontend');
const backendIcons = getIcons('backend');
const otherIcons = getIcons();

const Skills = () => {

    const [updateFocus] = useMutation(FOCUS_NAV_MUTATION,{
        update: cache => {
            const data = cache.readQuery({
              query: FOCUS_NAV_QUERY
            });
    
            const dataClone = {
              ...data,
              focus: {
                ...data.focus,
                about: false,
                skills: true,
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
        return
    },[inView])

    return(
        <SkillsStyles ref={ref} id='skills'>
            <h1>Skills</h1>
            
            <div className="skills">
                <div>
                    <h2>Front-End</h2>
                    <div className="platforms">
                        {
                            frontIcons.map( (icon, index) => {
                                return <SkillsIcons key={index} src={icon.src} description={icon.description}/>
                            })
                        }
                    </div>
                    
                </div>

                <div>
                    <h2>Back-End</h2>
                    <div className="platforms">
                        {
                            backendIcons.map( (icon, index) => {
                                return <SkillsIcons key={index} src={icon.src} description={icon.description}/>
                            
                            })
                        }
                    </div>
                </div>

                <div>
                    <h2>Others</h2>
                    <div className="platforms">
                        {
                            otherIcons.map( (icon, index)=> {
                                return <SkillsIcons  key={index} src={icon.src} description={icon.description}/>
                            
                            })
                        }
                    </div>
                </div>
                
            </div>
            <p> 
                I have been focusing on Web Development for almost 3 years now, throughout my years of experience I have been able to work with
                multiples technologies. However I focus in the JavaScript enviroment so I use it for the Front-end as well as for the Back-end. 
            </p>
        </SkillsStyles>
    )
}

export default Skills;