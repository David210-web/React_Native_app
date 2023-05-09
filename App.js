import React from 'react';
import Navigation from './Navigation';
import { View } from 'react-native';
import { UserContextProvider } from './src/context/UserContext';


export default function App() {

  return (
    <UserContextProvider>
      <Navigation/>
    </UserContextProvider>
     
  );
}
