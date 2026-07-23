import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing } from '../theme';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export default function SectionHeader({ eyebrow, title, subtitle, dark = false }: Props) {
  return (
    <View style={styles.wrap}>
      {eyebrow ? (
        <View style={styles.eyebrowRow}>
          <View style={[styles.rule, dark && styles.ruleDark]} />
          <Text style={[styles.eyebrow, dark && styles.eyebrowDark]}>{eyebrow}</Text>
        </View>
      ) : null}
      <Text style={[styles.title, dark && styles.titleDark]}>{title}</Text>
      {subtitle ? <Text style={[styles.subtitle, dark && styles.subtitleDark]}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.md },
  eyebrowRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs },
  rule: { width: 20, height: 2, backgroundColor: colors.gold, marginRight: spacing.sm },
  ruleDark: { backgroundColor: colors.goldSoft },
  eyebrow: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.clay,
  },
  eyebrowDark: { color: colors.goldSoft },
  title: { fontFamily: fonts.display, fontSize: 26, color: colors.textPrimary, lineHeight: 32 },
  titleDark: { color: colors.textOnDark },
  subtitle: { fontFamily: fonts.body, fontSize: 14, color: colors.textSecondary, marginTop: spacing.xs, lineHeight: 20 },
  subtitleDark: { color: colors.textOnDarkSecondary },
});
