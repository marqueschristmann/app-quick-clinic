import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import Routes from './src/routes';

import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Routes />;
}
