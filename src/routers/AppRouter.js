import React from 'react'
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import Home from '../components/home/Home'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import PageNotFound from '../components/main/PageNotFound'
import MessageboardLoader from '../components/messageBoard/MessageboardLoader'

const AppRouter=()=>(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Redirect to="/home"/>
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/messageboard" component={MessageboardLoader} />
            <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default AppRouter