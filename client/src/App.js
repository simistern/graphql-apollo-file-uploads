import React from 'react';
import logo from './logo.svg';
import { ApolloProvider } from 'react-apollo-hooks';
import apolloclient from './apolloclient';
import UploadBuddy from './uploadbuddy';

function App() {
  return (
    <ApolloProvider client={apolloclient} >
      <UploadBuddy />
    </ApolloProvider>
  );
}

export default App;
