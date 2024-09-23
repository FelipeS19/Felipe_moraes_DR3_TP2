// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './Pages/inicial';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Perdisenha from './Pages/perdisenha';
import Perfil from './Pages/Perfil';
import Settings from './Pages/Settings';
import Dashboard from './Pages/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicial">
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Perdisenha" component={Perdisenha} />
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
