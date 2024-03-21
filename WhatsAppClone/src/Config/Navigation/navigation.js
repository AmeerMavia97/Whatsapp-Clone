import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Dashboard from '../../Screens/Dashboard';
import Chats from '../../Screens/Chats';
import Status from '../../Screens/status';
import Calls from '../../Screens/Calls';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Connect hub" component={MyTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    );
  }

export default MainRoute;