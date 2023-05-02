import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts,Montserrat_400Regular,Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import Cesta from './src/telas/Cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    'MontSerratRegular':Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold
  })
 
  if(!fonteCarregada){
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

