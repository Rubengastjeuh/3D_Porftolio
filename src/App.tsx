// App.tsx
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import client from './graphql/grahpql'; // Fix the import path to your GraphQL client
import HomeScreen from './Views/HomeView';

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </div>
        </Router>
    </ApolloProvider>
);

export default App;
