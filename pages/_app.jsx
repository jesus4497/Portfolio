import App from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../lib/withData';

class MyApp extends App {
    render(){
        const { Component, apollo } = this.props;
        return(
            <ApolloProvider client={apollo}>
                <Page>
                    <Component/>
                </Page>
            </ApolloProvider>
        )
    }
}

export default withData(MyApp)