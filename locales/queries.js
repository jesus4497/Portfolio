import { gql } from 'apollo-boost';

export const FOCUS_NAV_QUERY = gql`
    query{
        focus @client{
            about,
            skills,
            projects,
            contact,
        }
    }
`;

export const FOCUS_NAV_MUTATION = gql`
    mutation{
        updateFocus @client
    }
`;