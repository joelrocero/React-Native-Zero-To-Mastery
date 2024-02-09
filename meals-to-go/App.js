import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { initializeApp } from 'firebase/app'

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { theme } from './src/infrastructure/theme'
import { Navigation } from './src/infrastructure/navigation'

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'

const firebaseConfig = {
  apiKey: 'AIzaSyAiA1mxXwqJA5C73dRe5fYpkY_RQB7m-N8',
  authDomain: 'mealstogo-91af6.firebaseapp.com',
  projectId: 'mealstogo-91af6',
  storageBucket: 'mealstogo-91af6.appspot.com',
  messagingSenderId: '556832996265',
  appId: '1:556832996265:web:22abb2e8ac23030547e2b8',
}

initializeApp(firebaseConfig)

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  )
}

