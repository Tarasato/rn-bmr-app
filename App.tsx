import { NavigationContainer } from "@react-navigation/native";
import Bmr from "./views/Bmr";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './views/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Bmr" component={Bmr} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
