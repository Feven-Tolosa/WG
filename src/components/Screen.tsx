import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
};

export default function Screen({ children, scroll = true, style }: Props) {
  const Wrapper = scroll ? ScrollView : View;
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <Wrapper
        style={[styles.flex, style]}
        contentContainerStyle={scroll ? styles.content : undefined}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Wrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.parchment },
  flex: { flex: 1 },
  content: { paddingBottom: 48 },
});
