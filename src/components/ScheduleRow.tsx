import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing } from '../theme';
import type { ScheduleItem } from '../data/church';

export default function ScheduleRow({ item, last }: { item: ScheduleItem; last?: boolean }) {
  return (
    <View style={[styles.row, !last && styles.divider]}>
      <View style={styles.dayCol}>
        <Text style={styles.day}>{item.day}</Text>
      </View>
      <View style={styles.infoCol}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.titleAmharic}>{item.titleAmharic}</Text>
        {item.note ? <Text style={styles.note}>{item.note}</Text> : null}
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
  },
  divider: { borderBottomWidth: 1, borderBottomColor: colors.line },
  dayCol: { width: 80 },
  day: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: colors.gold,
  },
  infoCol: { flex: 1, paddingRight: spacing.sm },
  title: { fontFamily: fonts.bodySemiBold, fontSize: 14, color: colors.textPrimary },
  titleAmharic: { fontFamily: fonts.body, fontSize: 12, color: colors.textSecondary, marginTop: 1 },
  note: { fontFamily: fonts.body, fontSize: 11, color: colors.clay, marginTop: 3, fontStyle: 'italic' },
  time: { fontFamily: fonts.bodyMedium, fontSize: 12, color: colors.textSecondary, textAlign: 'right', width: 100 },
});
