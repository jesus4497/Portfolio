import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormStyles = styled.form`

    display: flex;
    flex-direction: column;
    justify-self: left;
    font-size: 1.5rem;
    margin-left: 3rem;
    width: 40%;

    input, textarea{
        margin-bottom: 1rem;
        border-radius: .25rem;
        padding: .375rem .75rem;
        font-size: 1rem;
        box-shadow: none;
        border: 1px solid;
        ::placeholder{
            font-size: 1rem;
            font-family:'Rambla';
        }
    }
    textarea{
        font-size: 1.1rem;
        font-family:'Rambla';
        resize: none;
    }
    
    button{
        background-color: ${ props => props.theme.mainColor };
        border: 1px solid black;
        border-radius: 4px;
        padding: .5rem .5rem;
        color: white;
        transition: 0.3s ease-in-out;
        &:hover{
            background-color: rgba(3, 140, 127, 0.6);
            transform: translateY(-3px);
            box-shadow: 5px 5px 10px rgba(0, 50, 50, 0.5);

        }

    }

    @media screen and (max-width: 780px){
        margin: 0;
        width: 80%;
        h1{
            font-size: 1.5rem
        }
        
    }

    
`;


const Form = () => {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })

    const [inputs, setInputs] = useState({
        name:'',
        email: '',
        message:'',
    })

    const handleServerResponse = (ok,msg) => {
        if(ok){
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg },
            })

            setInputs({
                name:'',
                email:'',
                message:'',
            })
        }else{
            setStatus({
                info: {error: true, msg},
            })
        }
    }

    const handleOnChange = e => {
        e.persist();
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url:'https://formspree.io/meqqwebb',
            data: inputs
        })
        .then( response => {
            handleServerResponse(
                true,
                'Thank you for your message!'
            )
        })
        .catch(error => {
            handleServerResponse(
                false,
                error.response.data.error
            )
        })
    }
    return(
        <FormStyles onSubmit={handleOnSubmit}>
                <h1>If you like my work feel free to contact me !</h1>
                    <label htmlFor="name">
                        Your name
                    </label>
                        <input required value={inputs.name} id="name" onChange={handleOnChange} type="text" name="name" placeholder="Lucas Film"/>
                    <label htmlFor="email">
                        Email
                    </label>
                        <input required value={inputs.email} id="email" onChange={handleOnChange} type="email" name="_replyto" placeholder="name@example.com"/>
                    <label htmlFor="message">
                        Message
                    </label>
                        <textarea required value={inputs.message} id="message" onChange={handleOnChange} name="message" cols="30" placeholder="Hi how are you?" rows="10"></textarea>
                    <button type="submit" disabled={status.submitting} >
                        {
                            !status.submitting ? 
                            !status.submitted ? 'Submit'
                            : 'Submitted'
                            :'Submitting...'
                        }
                    </button>
                    
                    {status.info.error &&(
                        <div className="error">Error: { status.info.msg }</div>
                    )}
                    {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}

            </FormStyles>
    )}

export default Form