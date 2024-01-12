import * as React from 'react'; 
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-web';

function CategoriesScreen(props) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Categories</Text>
      <Button title='ACCESSOIRES' onPress={() => {props.navigation.navigate('Souscategories')}}/>
      <Button title='PERRUQUES' onPress={() => {props.navigation.navigate('Souscategories')}}/>
      <Button title='TISSAGES BRÉSILIENS' onPress={() => {props.navigation.navigate('Souscategories')}}/>
      

    </View>
  )
};

function SouscategoriesScreen(props) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Souscategories</Text>
      <Button title='ACCESSOIRES' onPress={() => {props.navigation.navigate('')}}/>
      <Button title='PERRUQUES' onPress={() => {props.navigation.navigate('')}}/>
      <Button title='TISSAGES BRÉSILIENS' onPress={() => {props.navigation.navigate('')}}/>
    </View>
  )
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Souscategories' component={SouscategoriesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

