import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen.tsx/index.js';
import DurationScreen from '../screens/DurationScreen';
import DamageScreen from '../screens/DamageScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen.tsx/index.js';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Localização" component={LocationScreen} />
        <Stack.Screen name="Duração" component={DurationScreen} />
        <Stack.Screen name="Prejuízos" component={DamageScreen} />
        <Stack.Screen name="Recomendações" component={RecommendationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
