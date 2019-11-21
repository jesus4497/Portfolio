import styled from 'styled-components';

const CarouselStyles = styled.div`
    height:25rem;
    top: 79px;
    right: 0;
    left: 0;
    bottom: 0;


    .css-carousel {
        height: 100%;
    }

    .css-carousel .carousel-slides,
    .css-carousel .carousel-inner,
    .css-carousel .carousel-item {
        height: 100%;
    }

    .css-carousel .carousel-item {
        background-repeat: no-repeat;
        background-position: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        /* position: relative; */
    }

    .css-carousel .carousel-item .center {
        width: 100%;
        height: 100%;
        display: table;
        text-align: center;
        /* position: relative; */
    }

    .css-carousel .carousel-item .center .title {

        display: table-cell;
        vertical-align: middle;
        color: #fff;
        /* font-size: 70px; */
        height: 90%;
        font-weight: 900;
        letter-spacing: 10px;
        text-transform: uppercase;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .css-carousel .carousel-item .credit {
        display: none;
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 20px;
        color: #fff;
        font-size: 14px;
    }

    .css-carousel .carousel-item .credit a {
        color: #fff;
        text-decoration: underline;
        font-weight: 700;
    }

    .css-carousel .carousel-item .credit a:hover {
        text-decoration: none;
    }

    .css-carousel {
        position: relative;
    }

    .css-carousel input[name="carousel"] {
        display: none;
    }

    .css-carousel .carousel-nav {
        position: absolute;
        bottom: 50px;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 1;
    }

    .css-carousel .carousel-nav label[for=${props=>`carousel-1${props.titleC}`}] {
        display: inline-block;
        margin: 0 10px;
        width: 20px;
        height: 20px;
        border: 2px solid #E80A58;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        background-color:${props => props.theme.mainColor};
        border-radius: 50%;

        
    cursor: pointer;
        -webkit-transition: background-color 0.25s;
        -moz-transition: background-color 0.25s;
        -o-transition: background-color 0.25s;
        transition: background-color 0.25s;
    }

    .css-carousel .carousel-nav label{
        display: inline-block;
        margin: 0 10px;
        width: 20px;
        height: 20px;
        border: 2px solid #E80A58;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;

        
    cursor: pointer;
        -webkit-transition: background-color 0.25s;
        -moz-transition: background-color 0.25s;
        -o-transition: background-color 0.25s;
        transition: background-color 0.25s;
    }

    .css-carousel ${props=>`#carousel-1${props.titleC}`}:checked ~ .carousel-nav label[for=${props=>`carousel-1${props.titleC}`}] {
        background-color:${props => props.theme.mainColor};
    }

    .css-carousel ${props=>`#carousel-2${props.titleC}`}:checked ~ .carousel-nav label[for=${props=>`carousel-2${props.titleC}`}]   {

        background-color:${props => props.theme.mainColor};
    }

    .css-carousel ${props=>`#carousel-2${props.titleC}`}:checked ~ .carousel-nav label[for=${props=>`carousel-1${props.titleC}`}]   {

        background-color:transparent;
    }

    .css-carousel ${props=>`#carousel-3${props.titleC}`}:checked ~ .carousel-nav label[for=${props=>`carousel-3${props.titleC}`}] {
        background-color:${props => props.theme.mainColor};
    }

    .css-carousel ${props=>`#carousel-3${props.titleC}`}:checked ~ .carousel-nav label[for=${props=>`carousel-1${props.titleC}`}]   {

        background-color:transparent;
    }

    .css-carousel ${props=>`#carousel-4${props.titleC}`}:checked ~ .carousel-nav label[for=${props=>`carousel-4${props.titleC}`}] {
        background-color:${props => props.theme.mainColor};
    }

    .css-carousel ${props=>`#carousel-4${props.titleC}`}:checked ~ .carousel-nav label[for=${props=>`carousel-1${props.titleC}`}]   {

        background-color:transparent;
    }   

    .css-carousel .carousel-slides {
        width: 100%;
        overflow: hidden;
    }

    .css-carousel .carousel-slides .carousel-inner {
        width: 400%;
        -webkit-transition: margin 1s;
        -moz-transition: margin 1s;
        -o-transition: margin 1s;
        transition: margin 1s;
    }

    .css-carousel .carousel-slides .carousel-item {
        float: left;
        width: 25%;
    }

    .css-carousel ${props=>`#carousel-1${props.titleC}`}:checked ~ .carousel-slides .carousel-inner {
        margin-left: 0%;
    }

    .css-carousel ${props=>`#carousel-2${props.titleC}`}:checked ~ .carousel-slides .carousel-inner {
        margin-left: -100%;
    }

    .css-carousel ${props=>`#carousel-3${props.titleC}`}:checked ~ .carousel-slides .carousel-inner {
        margin-left: -200%;
    }

    .css-carousel ${props=>`#carousel-4${props.titleC}`}:checked ~ .carousel-slides .carousel-inner {
        margin-left: -300%;
    }

`;

const Carousel = props =>(
    <CarouselStyles titleC={props.title.replace(/\s/g, '')}>
        <div className="css-carousel">

            <input type="radio" name="carousel" id={`carousel-1${props.title.replace(/\s/g, '')}`}  />
            <input type="radio" name="carousel" id={`carousel-2${props.title.replace(/\s/g, '')}`} />
            <input type="radio" name="carousel" id={`carousel-3${props.title.replace(/\s/g, '')}`} />
            <input type="radio" name="carousel" id={`carousel-4${props.title.replace(/\s/g, '')}`} />

            <div className="carousel-nav">
                <label htmlFor={`carousel-1${props.title.replace(/\s/g, '')}`}></label>
                <label htmlFor={`carousel-2${props.title.replace(/\s/g, '')}`}></label>
                <label htmlFor={`carousel-3${props.title.replace(/\s/g, '')}`}></label>
                <label htmlFor={`carousel-4${props.title.replace(/\s/g, '')}`}></label>
            </div>

            <div className="carousel-slides">
                <div className="carousel-inner">
                    <div className="carousel-item" >
                        <div className="center">
                            <img src={`/img/${props.img}.jpg` } className="title" />
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div className="center">
                            <img src={`/img/${props.img}2.jpg`} className="title" />
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div className="center">
                            <img src={`/img/${props.img}3.jpg`} className="title" />
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div className="center">
                            <img src={`/img/${props.img}4.jpg`} className="title" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
</CarouselStyles>
)

export default Carousel;