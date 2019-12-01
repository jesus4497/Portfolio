import withApollo from 'next-with-apollo';
import ApolloClient, {gql} from 'apollo-boost';
import { FOCUS_NAV_QUERY} from '../locales/queries';



const typeDefs = gql`
    type Focus {
        about: Boolean!,
        skills: Boolean!,
        projects: Boolean!,
        contact: Boolean!
    }
`;

function createClient(){
    return new ApolloClient({
        clientState:{
            typeDefs,
            resolvers:{
                Mutation:{
                    updateColor(_, variables, {cache}){
                        const {focus} = cache.readQuery({
                            query: FOCUS_NAV_QUERY
                        });
                       return focus
                    }
                }
            },
            defaults: {
                focus: {
                    about: false,
                    skills: false,
                    projects: false,
                    contact: false,
                    __typename: 'Focus',
                }
            }
        }
    })
}

export default withApollo(createClient)