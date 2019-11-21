import styled from 'styled-components';

const FooterStyles = styled.footer`
    width: 100%;
    height: 8rem;
    background-color: ${props => props.theme.secondaryColor};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-direction: column;
    p{
        margin-bottom:0;
        @media screen and (max-width: 600px) {
            margin: 2rem 2rem 0 2rem;
        }
    }
    a{
        color: white;
    }

`

const Footer = () => (
    <FooterStyles>
        <p>This portfolio was built using <a href="https://nextjs.org/">Next.js</a> and <a href="https://icons8.com/">8icons.com</a> for the icons.</p>
        <p>Copyright © Jesus Padron.</p>
    </FooterStyles>
)

export default Footer;