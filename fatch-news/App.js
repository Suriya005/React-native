import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import News from './Screens/News'

const stackNavigator = createStackNavigator({
  News:News
})

const App = createAppContainer(stackNavigator)
export default App