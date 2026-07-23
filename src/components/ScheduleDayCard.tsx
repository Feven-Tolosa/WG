import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, shadow, spacing } from '../theme';
import type { ScheduleItem } from '../data/church';

type Props = {
  day: string;
  dayAmharic: string;
  entries: ScheduleItem[];
  isToday?: boolean;
};

export default function ScheduleDayCard({ day, dayAmharic, entries, isToday = false }: Props) {
  return (
    <View style={[styles.card, isToday && styles.cardToday]}>
      <View style={styles.dayHeader}>
        <View>
          <Text style={[styles.day, isToday && styles.dayToday]}>{day}</Text>
          <Text style={styles.dayAmharic}>{dayAmharic}</Text>
        </View>
        {isToday && (
          <View style={styles.todayPill}>
            <Text style={styles.todayPillLabel}>Today</Text>
          </View>
        )}
      </View>

      {entries.map((entry, i) => (
        <View key={`${entry.title}-${entry.time}`} style={[styles.entry, i > 0 && styles.entryDivider]}>
          <View style={styles.entryTextCol}>
            <Text style={styles.entryTitle}>{entry.title}</Text>
            <Text style={styles.entryTitleAmharic}>{entry.titleAmharic}</Text>
            {entry.note ? <Text style={styles.entryNote}>{entry.note}</Text> : null}
          </View>
          <Text style={styles.entryTime}>{entry.time}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadow.card,
  },
  cardToday: {
    borderWidth: 1.5,
    borderColor: colors.gold,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  day: {
    fontFamily: fonts.display,
    fontSize: 18,
    color: colors.textPrimary,
  },
  dayToday: { color: colors.clay },
  dayAmharic: { fontFamily: fonts.body, fontSize: 12, color: colors.textSecondary, marginTop: 1 },
  todayPill: {
    backgroundColor: colors.gold,
    borderRadius: radius.pill,
    paddingVertical: 4,
    paddingHorizontal: spacing.sm,
  },
  todayPillLabel: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 10,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: colors.ink,
  },
  entry: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: spacing.sm },
  entryDivider: { borderTopWidth: 1, borderTopColor: colors.line },
  entryTextCol: { flex: 1, paddingRight: spacing.sm },
  entryTitle: { fontFamily: fonts.bodySemiBold, fontSize: 14, color: colors.textPrimary },
  entryTitleAmharic: { fontFamily: fonts.body, fontSize: 12, color: colors.textSecondary, marginTop: 1 },
  entryNote: { fontFamily: fonts.body, fontSize: 11, color: colors.clay, marginTop: 3, fontStyle: 'italic' },
  entryTime: {
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'right',
    width: 100,
  },
});
