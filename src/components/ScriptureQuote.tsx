import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, spacing } from '../theme';

type Props = {
  text: string;
  reference: string;
  dark?: boolean;
};

// Signature motif used across Home, Sermons, and Books: every scripture
// verse is set as an illuminated pull-quote with a gold rule on the left.
export default function ScriptureQuote({ text, reference, dark = false }: Props) {
  return (
    <View style={[styles.wrap, dark ? styles.wrapDark : styles.wrapLight]}>
      <View style={[styles.rule, dark && styles.ruleDark]} />
      <View style={styles.textCol}>
        <Text style={[styles.quote, dark && styles.quoteDark]}>{text}</Text>
        <Text style={[styles.reference, dark && styles.referenceDark]}>{reference}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'stretch',
  },
  wrapLight: { backgroundColor: colors.parchmentDim },
  wrapDark: { backgroundColor: colors.inkSoft },
  rule: { width: 3, borderRadius: 2, backgroundColor: colors.gold, marginRight: spacing.md },
  ruleDark: { backgroundColor: colors.goldSoft },
  textCol: { flex: 1 },
  quote: {
    fontFamily: fonts.displayItalic,
    fontSize: 17,
    lineHeight: 25,
    color: colors.textPrimary,
  },
  quoteDark: { color: colors.textOnDark },
  reference: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12,
    letterSpacing: 0.5,
    color: colors.clay,
    marginTop: spacing.sm,
  },
  referenceDark: { color: colors.goldSoft },
});
