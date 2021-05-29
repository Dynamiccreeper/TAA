import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screen/HomeScreen'
import SummaryScreen from './screen/SummaryScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class App extends React.Component {
 
 
  render() {
    return (
      <View>
<AppContainer/>
      </View>
    );
  }
}
var AppNavigator=createSwitchNavigator({
HomeScreen:HomeScreen,
SummaryScreen:SummaryScreen
})
var AppContainer=createAppContainer(AppNavigator)
