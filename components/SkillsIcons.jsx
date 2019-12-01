import styled from 'styled-components';

const Image = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    span{
        display: none;
        position: absolute;
        z-index: 1;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 2px 0;
    }

    &:hover{
        span{
            display: block;
        }
    }
`;

const SkillsIcons = ({src, description}) => (
    <Image>
        <span>{description}</span>
        <img src={src} alt={description}/>
    </Image>
)

export default SkillsIcons;