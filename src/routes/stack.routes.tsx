import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import colors from '../styles/colors';
import AuthRoutes from './tabs.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
      headerShown: false,
    }}
  >
    <stackRoutes.Screen name="ListClinics" component={AuthRoutes} />
    {/* <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} /> */}
  </stackRoutes.Navigator>
);

export default AppRoutes;
