import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import './App.css'
import ListingsPage from './components/ListingsPage.js'

const client = new ApolloClient({
  uri: 'https://sls-sandbox.zizoo.com/graphql'
})

function App () {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='App'>
          <div className='container-fluid'>
            <Switch>
              <Route path='/search'>
                <ListingsPage />
              </Route>
              <Route path='/'>
                <Redirect to='/search' />
              </Route>
            </Switch>
          </div>
        </div>
      </ApolloProvider>
    </Router>
  )
}

export default App
