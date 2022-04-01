import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Index from './src/Index';
import Ranking from './src/Ranking';


const AppNavigator = createSwitchNavigator({
  Index: Index,
  Ranking: Ranking
  
},
{
  initialRouteName: 'Index',
}
)

export default createAppContainer(AppNavigator);

