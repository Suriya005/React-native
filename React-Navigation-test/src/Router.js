import React , {Component} from 'react'
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home'

const AppComponent = () => {
    return (
        <Router>
            <Scene key="root">
            <Scene Key="Home" component={Home} title="My Home page"/>
        </Scene>
    </Router>
    )
    }

export default AppComponent;