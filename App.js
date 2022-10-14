import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Homescreen from './screens/Homescreen';
import AddExercise from './screens/AddExercise';
import GoalScreen from './screens/GoalScreen';
import SettingsScreen from './screens/SettingsScreen';

// Navigators
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// Constants
import { GlobalStyles } from './constants/styles';

// Components
import IconButton from './components/UI/IconButton';

const ExercisesOverview = () => {

  return (
    <BottomTabs.Navigator screenOptions={({navigation}) => ({ 
      headerStyle: {
        backgroundColor: GlobalStyles.colors.darkBlue,
      },
      headerTintColor: GlobalStyles.colors.white,
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.darkBlue,
      },
      tabBarActiveTintColor: GlobalStyles.colors.white,
      tabBarInactiveTintColor: GlobalStyles.colors.white,
      headerRight: ({ tintColor }) => {
        return <IconButton icon="add" size={24} color={tintColor} onPress={()=>{navigation.navigate('AddExercise')}}/>
      }
    })}>
      <BottomTabs.Screen 
        name='Homescreen' 
        component={Homescreen} 
        options={{
           title: 'Home',
           tabBarLabel: 'Home',
           tabBarIcon: ({color, size}) => <Ionicons name='home-outline' size={size} color={color} />
        }}
      />
      <BottomTabs.Screen 
        name='GoalScreen' 
        component={GoalScreen}
        options={{
          style: styles.removeBorder,
          title: 'My Goals',
          tabBarLabel: 'Goals',
          tabBarIcon: ({color, size}) => <Ionicons name='checkbox-outline' size={size} color={color} />
       }} 
      />
       <BottomTabs.Screen 
        name='SettingsScreen' 
        component={SettingsScreen}
        options={{
          style: styles.removeBorder,
          title: 'User Settings',
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => <Ionicons name='settings-outline' size={size} color={color} />
       }} 
      />
    </BottomTabs.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar style="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: GlobalStyles.colors.darkBlue,
        },
          headerTintColor: 'white'
        }}>
          <Stack.Screen 
            name='ExercisesOverview' 
            component={ExercisesOverview} 
            options={{ headerShown: false, style: styles.removeBorder}}
          />
          <Stack.Screen name='AddExercise' component={AddExercise}  options={{
            presentation: 'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeBorder: {
    backgroundColor: GlobalStyles.colors.darkBlue,
    borderTopWidth: 0,
  }
});