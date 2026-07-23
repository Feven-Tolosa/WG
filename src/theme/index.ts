export const colors = {
  ink: '#0d1b2a', // near-black navy, primary text / hero background
  inkSoft: '#0d1b2a', // secondary dark surface
  parchment: '#F7F2E7', // warm off-white background
  parchmentDim: '#EDE5D3', // card background on parchment
  gold: '#B98A3E', // single accent — used sparingly (links, dividers, icons)
  goldSoft: '#D9B876',
  clay: '#8C5A3C', // secondary warm accent for tags/labels
  line: '#DFD5BC', // hairline dividers on light surfaces
  lineDark: '#3A4066', // hairline dividers on dark surfaces
  textPrimary: '#1D2233',
  textSecondary: '#5B5A4E',
  textOnDark: '#F4EFE3',
  textOnDarkSecondary: '#B9BAD1',
  white: '#FFFFFF',
  success: '#4C7A5E',
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
}

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
  pill: 999,
}

// Font family keys — actual fonts loaded via @expo-google-fonts in App.tsx
export const fonts = {
  display: 'PlayfairDisplay_700Bold',
  displayItalic: 'PlayfairDisplay_600SemiBold_Italic',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemiBold: 'Inter_600SemiBold',
}

export const shadow = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
}
