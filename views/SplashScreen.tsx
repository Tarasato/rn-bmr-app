import React, { useEffect } from 'react';
import { Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import bmrlogo from './../assets/bmrlogo.png';

type RootStackParamList = {
  Splash: undefined;
  Bmr: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Bmr');
    }, 500);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={bmrlogo} style={{width: 150, height: 165, borderRadius: 20}} />
    </SafeAreaView>
  );
}