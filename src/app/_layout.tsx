import { Ionicons } from '@expo/vector-icons'
import {
  useFonts as useInter,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'
import {
  useFonts as usePlayfair,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_600SemiBold_Italic,
} from '@expo-google-fonts/playfair-display'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { colors, fonts } from '../theme'

const ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  index: 'home',
  sermons: 'play-circle',
  books: 'book',
}

const LABELS: Record<string, string> = {
  index: 'Home',
  sermons: 'Sermons',
  books: 'Books',
}

export default function RootLayout() {
  const [interLoaded] = useInter({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  })
  const [playfairLoaded] = usePlayfair({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_600SemiBold_Italic,
  })

  if (!interLoaded || !playfairLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.gold} size='large' />
      </View>
    )
  }

  return (
    <>
      <StatusBar style='light' />
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.gold,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.line,
          },
          tabBarLabelStyle: { fontFamily: fonts.bodyMedium, fontSize: 11 },
          tabBarLabel: LABELS[route.name] ?? route.name,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={ICONS[route.name] ?? 'ellipse'}
              size={focused ? size : size - 2}
              color={color}
            />
          ),
        })}
      >
        <Tabs.Screen name='index' />
        <Tabs.Screen name='sermons' />
        <Tabs.Screen name='books' />
      </Tabs>
    </>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ink,
  },
})
